import React from 'react';

const SPREADSHEET_URL =
  'https://spreadsheets.google.com/feeds/list/1SCbvy-6sPIJvafn5KUPSIDDDIFHenEeTMsglLpPCsz4/1/public/values?alt=json';

const TableRow = ({ id, company, location, url }) => (
  <tr key={id}>
    <td>{company}</td>
    <td>{location}</td>
    <td>
      <a href={url}>apply</a>
    </td>
  </tr>
);

export class InternTable extends React.Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      internships: [],
    };
  }

  async componentDidMount() {
    const spreadsheetData = await fetch(SPREADSHEET_URL).then(res =>
      res.json(),
    );

    const entries = spreadsheetData.feed.entry.map(row => {
      const rowURI = row['id']['$t'];
      const id = rowURI.slice(rowURI.lastIndexOf('/') + 1);

      return {
        id: id,
        company: row['gsx$company']['$t'],
        location: row['gsx$location']['$t'],
        url: row['gsx$url']['$t'],
        updatedAt: row['updated']['$t'],
      };
    });

    this.setState({ loaded: true, internships: entries });
  }

  render() {
    if (!this.state.loaded) return <p>Loading...</p>;
    if (this.state.internships.length == 0) return <p>No entries!</p>;

    return (
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>{this.state.internships.map(TableRow)}</tbody>
      </table>
    );
  }
}

export default InternTable;
