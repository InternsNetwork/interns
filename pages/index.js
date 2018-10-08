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
  align-items: center;

  @media (min-width: 1000px) {
    min-width: 1000px;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 2em;
  padding-bottom: 2em;
`;

const MenuItem = styled.div`
  font-weight: 600;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const Logo = styled.img`
  width: 100px;
  filter: grayscale(100%);
`;

export default () => (
  <Wrapper>
    <Header>
      <Logo src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />
      <Menu>
        <MenuItem>Companies</MenuItem>
        <MenuItem>About</MenuItem>
      </Menu>
    </Header>
    <Content>
      <InternTable />
    </Content>
    <footer>…</footer>
  </Wrapper>
);
