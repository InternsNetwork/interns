import React from 'react';
import styled from 'styled-components';
import { ChevronDown } from '../ChevronDown';
import { ChevronUp } from '../ChevronUp';

const StyledCompanyItemWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(0, 23, 31, 0.02);
  padding: 1em 1em;
  flex-direction: column;
  background-color: rgba(0, 23, 31, 0.02);
`;

const CompanyItemWrapperUpper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CompanyItemWrapperLower = styled.div`
  display: flex;
  padding-top: 0.3em;
  justify-content: center;
`;

const CompanyItemInformationWrapper = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;
`;

const CompanyItemPositionsInfoWrapper = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
`;

const CompanyInfoName = styled.h2`
  font-size: 1.1em;
  padding: 0;
  margin: 0;
  font-weight: 400;
  margin-bottom: 0.3em;
`;

const CompanyInfoLocation = styled.span`
  font-weight: 300;
`;

const CompanyPositionsList = styled.ul`
  margin: 0;
  padding: 0;
  padding: 1em 0;
`;

const CompanyPositionsListItem = styled.li`
  list-style: none;
  margin-bottom: 0.5em;
  :last-child {
    margin-bottom: 0em;
  }
`;

const CompanyPositionLink = styled.a`
  color: #007ea7;
  text-decoration: none;
`;

const CompanyShowPositionsWrapper = styled.div`
  cursor: pointer;
`;

export class CompanyItemWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showPosition: false };
  }

  onShowHideInformationClick = () => {
    this.setState({
      showPosition: !this.state.showPosition,
    });
  };

  render() {
    return (
      <StyledCompanyItemWrapper>
        <CompanyItemWrapperUpper>
          <CompanyItemInformationWrapper>
            <CompanyInfoName>{this.props.companyName}</CompanyInfoName>
            <CompanyInfoLocation>
              {this.props.country}, {this.props.city}
            </CompanyInfoLocation>
          </CompanyItemInformationWrapper>
          <CompanyItemPositionsInfoWrapper>
            <span>
              {this.props.positions.length}{' '}
              {this.props.positions.length === 1 ? 'Position' : 'Positions'}
            </span>
          </CompanyItemPositionsInfoWrapper>
        </CompanyItemWrapperUpper>
        {this.state.showPosition && (
          <CompanyItemWrapperLower>
            <CompanyPositionsList>
              {this.props.positions.map(position => {
                return (
                  <CompanyPositionsListItem>
                    <CompanyPositionLink
                      href={position.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Apply as {position.title} ↗
                    </CompanyPositionLink>
                  </CompanyPositionsListItem>
                );
              })}
            </CompanyPositionsList>
          </CompanyItemWrapperLower>
        )}
        <CompanyItemWrapperLower onClick={this.onShowHideInformationClick}>
          <CompanyShowPositionsWrapper>
            {!this.state.showPosition && <ChevronDown size={16} />}
            {!this.state.showPosition && <span>Show More</span>}
            {this.state.showPosition && <ChevronUp size={16} />}
            {this.state.showPosition && <span>Show Less</span>}
          </CompanyShowPositionsWrapper>
        </CompanyItemWrapperLower>
      </StyledCompanyItemWrapper>
    );
  }
}

export default CompanyItemWrapper;
