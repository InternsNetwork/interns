import React from 'react';
import lodash from 'lodash';

import internshipsList from '../../util/internships.json';

import { CompanyItemWrapper } from '../CompanyItemWrapper';

export class InternTable extends React.Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      internships: [],
    };
  }

  async componentDidMount() {
    const entries = internshipsList;

    this.setState({ loaded: true, internships: entries });
  }

  render() {
    if (!this.state.loaded) return <p>Loading...</p>;
    if (this.state.internships.length == 0) return <p>No entries!</p>;

    let _internships = [...this.state.internships];
    if (this.props.searchText !== '') {
      _internships = _internships.filter(internship =>
        internship.company
          .toLowerCase()
          .includes(this.props.searchText.toLowerCase()),
      );
    }

    _internships = _internships.sort(
      (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt),
    );

    const result = lodash.groupBy(
      _internships,
      internship =>
        `${internship.company}//${internship.city}//${internship.country}`,
    );

    return Object.keys(result).map(company => {
      const positions = result[company];
      return (
        <CompanyItemWrapper
          key={positions[0].id}
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
