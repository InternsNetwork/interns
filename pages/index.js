import 'glamor/reset';
import styled from 'styled-components';
import React from 'react';
import { COLORS } from '../util/colors';
import { InternTable } from '../components/InternTable';
import { ChevronDown } from '../components/ChevronDown';
import { ChevronUp } from '../components/ChevronUp';
import Triangle from '../components/Triangle';

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
  min-width: 100%;
  align-self: center;
  box-sizing: border-box;
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

const Divider = styled.div`
  border-top: 1px solid ${props => props.color || COLORS.PRIMARY};
  width: 100%;
  margin-top: ${props => props.marginTop || '1.3em'};
`;

const SearchInputContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SearchInput = styled.input`
  border: 0;
  border-bottom: 1px solid rgb(0, 23, 31, 0.39);
  padding-left: 0.61em;
  padding-right: 0.61em;
  padding-bottom: 0.4em;
  font-size: 1.2em;
  color: ${COLORS.PRIMARY};
  outline-style: none;
  box-shadow: none;
  transition: all 0.36s;

  &::placeholder {
    color: rgb(0, 23, 31, 0.39);
  }

  &:focus {
    border-bottom: 1px solid ${COLORS.PRIMARY};
  }
`;

const DropdownFilterWrapper = styled.div`
  display: flex;
`;

const ContentWithMargins = styled.div`
  margin-left: auto;
  margin-right: auto;

  max-width: 1000px;
  @media (min-width: 1000px) {
    min-width: 1000px;
  }
`;

const DropdownItemContent = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  transform: ;
  border-radius: 2px;
  visibility: hidden;
  transform: rotateX(20deg) translateY(100%);
  opacity: 0;
  transition: all 0.3s ease, opacity 0.5s ease, transform 0.2s ease;
  border-radius: 2px;
`;

const DropdownFilter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em 0.7em;
  cursor: pointer;
  position: relative;

  > span {
    transition: all ${0.61 * 0.36}s;
    padding-right: 0.15em;
    color: rgb(0, 23, 31, 0.39);
  }

  &:hover > span {
    color: rgb(0, 23, 31, 1);
  }

  > svg {
    transition: all ${0.61 * 0.36}s;
    stroke-width: 0.8;
  }

  &:hover > svg {
    stroke-width: 1.2;
  }

  &:hover > ${DropdownItemContent} {
    visibility: visible;
    opacity: 1;
    transform: rotateX(0deg) translateY(calc(100% - 0.3em));
  }
`;

const DropdownItemsWrapper = styled.div`
  background-color: white;
  min-width: 120px;
  padding: 1.1em 1em;
  padding-bottom: 1.3em;
  box-shadow: 0px 2px 20px -0px rgba(0, 0, 0, 0.161);
  border-radius: 3px;
`;

const DropdownItemWrapper = styled.div`
  color: rgb(0, 23, 31, 0.39);
  padding-bottom: 0.61em;
  font-size: 0.9em;

  :last-child {
    padding-bottom: 0em;
  }

  &:hover > span {
    color: rgb(0, 23, 31, 1);
  }
`;

const CompanyItemWrapper = styled.div`
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

export class Index extends React.Component {
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
      <Wrapper>
        <Header>
          <Logo
            src={
              'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
            }
          />
          <Menu>
            <MenuItem>Companies</MenuItem>
            <MenuItem>About</MenuItem>
          </Menu>
        </Header>
        <Content>
          <div>
            <SearchInputContainer>
              <SearchInput placeholder="Company..." />
            </SearchInputContainer>
            <Divider />
          </div>
          <ContentWithMargins>
            <DropdownFilterWrapper>
              <DropdownFilter>
                <span>Sort By</span>
                <ChevronDown size={16} />
                <DropdownItemContent>
                  <Triangle size={8} />
                  <DropdownItemsWrapper>
                    <DropdownItemWrapper>
                      <span>Location</span>
                    </DropdownItemWrapper>
                    <DropdownItemWrapper>
                      <span>Recently Updated</span>
                    </DropdownItemWrapper>
                  </DropdownItemsWrapper>
                </DropdownItemContent>
              </DropdownFilter>
            </DropdownFilterWrapper>
          </ContentWithMargins>
          <ContentWithMargins>
            <Divider color="rgb(0,23,31,0.1)" marginTop="0" />
            <CompanyItemWrapper>
              <CompanyItemWrapperUpper>
                <CompanyItemInformationWrapper>
                  <CompanyInfoName>3YOURMIND</CompanyInfoName>
                  <CompanyInfoLocation>Germany, Berlin</CompanyInfoLocation>
                </CompanyItemInformationWrapper>
                <CompanyItemPositionsInfoWrapper>
                  <span>3 Positions</span>
                </CompanyItemPositionsInfoWrapper>
              </CompanyItemWrapperUpper>
              {this.state.showPosition && (
                <CompanyItemWrapperLower>
                  <CompanyPositionsList>
                    <CompanyPositionsListItem>
                      <CompanyPositionLink
                        href="https://www.google.com/"
                        target="_blank"
                      >
                        Apply as Software Engineering Intern ↗
                      </CompanyPositionLink>
                    </CompanyPositionsListItem>
                    <CompanyPositionsListItem>
                      <CompanyPositionLink
                        href="https://www.google.com/"
                        target="_blank"
                      >
                        Apply as Marketing Intern ↗
                      </CompanyPositionLink>
                    </CompanyPositionsListItem>
                  </CompanyPositionsList>
                </CompanyItemWrapperLower>
              )}
              <CompanyItemWrapperLower
                onClick={this.onShowHideInformationClick}
              >
                {!this.state.showPosition && <ChevronDown size={16} />}
                {!this.state.showPosition && <span>Show More</span>}
                {this.state.showPosition && <ChevronUp size={16} />}
                {this.state.showPosition && <span>Show Less</span>}
              </CompanyItemWrapperLower>
            </CompanyItemWrapper>
            <div />
            <div />
            <div />
          </ContentWithMargins>
          {/* <InternTable /> */}
        </Content>
        <footer>…</footer>
      </Wrapper>
    );
  }
}

export default Index;
