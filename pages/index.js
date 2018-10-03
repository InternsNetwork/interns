import 'glamor/reset';
import styled from 'styled-components';
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

class InternTable extends React.Component {
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

  componentDidUpdate() {
    console.log(this.state);
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

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
`;

const Content = styled.main`
  flex: 1;
  max-width: 1000px;
  min-width: 100%;
  align-self: center;
  box-sizing: border-box;

  @media (min-width: 1000px) {
    min-width: 1000px;
  }
`;

const Header = styled.header`
  max-width: 1000px;
  align-self: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 100%;

  @media (min-width: 1000px) {
    min-width: 1000px;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
`;

export default () => (
  <Wrapper>
    <Header>
      <div>interns</div>
      <Menu>
        <div>Companies</div>
        <div>About</div>
      </Menu>
    </Header>
    <Content>Our cool internships</Content>
    <InternTable />
    <footer>…</footer>
  </Wrapper>
);
