import React from 'react';
import lodash from 'lodash';

import { CompanyItemWrapper } from '../CompanyItemWrapper';

const SPREADSHEET_URL =
  'https://spreadsheets.google.com/feeds/list/1SCbvy-6sPIJvafn5KUPSIDDDIFHenEeTMsglLpPCsz4/1/public/values?alt=json';

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

    // const entries = spreadsheetData.feed.entry.map(row => {
    //   const rowURI = row['id']['$t'];
    //   const id = rowURI.slice(rowURI.lastIndexOf('/') + 1);

    //   return {
    //     id: id,
    //     company: row['gsx$company']['$t'],
    //     location: row['gsx$location']['$t'],
    //     url: row['gsx$url']['$t'],
    //     updatedAt: row['updated']['$t'],
    //   };
    // });

    const entries = [
      {
        id: 'cokwr',
        title: 'Frontend Engineering Intern',
        department: 'Engineering',
        company: '3YOURMIND',
        city: 'Berlin',
        country: 'Germany',
        url: 'https://3yourmind.com',
        updatedAt: '2018-10-11T17:46:02.549Z',
      },
      {
        id: '4i29f',
        title: 'Marketing Intern',
        department: 'Marketing',
        company: '3YOURMIND',
        city: 'Berlin',
        country: 'Germany',
        url: 'https://3yourmind.com',
        updatedAt: '2018-10-15T17:46:02.549Z',
      },
      {
        id: 'cokwr',
        title: 'Frontend Engineering Intern',
        department: 'Engineering',
        company: 'Uber',
        city: 'Dublin',
        country: 'Ireland',
        url: 'https://uber.com',
        updatedAt: '2018-10-11T17:46:02.549Z',
      },
    ];

    this.setState({ loaded: true, internships: entries });
  }

  render() {
    if (!this.state.loaded) return <p>Loading...</p>;
    if (this.state.internships.length == 0) return <p>No entries!</p>;

    const result = lodash.groupBy(
      this.state.internships,
      internship =>
        `${internship.company}//${internship.city}//${internship.country}`,
    );

    return Object.keys(result).map(company => {
      const positions = result[company];
      return (
        <CompanyItemWrapper
          companyName={positions[0].company}
          country={positions[0].country}
          city={positions[0].city}
          positions={positions.map(position => ({
            url: position.url,
            title: position.title,
          }))}
        />
      );
    });
  }
}

export default InternTable;
