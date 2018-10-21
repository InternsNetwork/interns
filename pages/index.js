import 'glamor/reset';
import styled from 'styled-components';
import React from 'react';
import Link from 'next/link';
import { COLORS } from '../util/colors';
import { ChevronDown } from '../components/ChevronDown';
import Triangle from '../components/Triangle';
import { InternTable } from '../components/InternTable';
import { Logo } from '../components/Logo';

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

const MenuItem = styled.a`
  font-weight: ${props => (props.active ? '600' : '300')};
  cursor: ${props => (props.active ? 'default' : 'pointer')};

  &:not(:last-child) {
    margin-right: 10px;
  }
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
  transition: all 0.3s ease, opacity 0.3s ease, transform 0.2s ease;
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

export class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchText: '' };
  }

  handleChange = event => {
    this.setState({
      searchText: event.target.value,
    });
  };

  render() {
    return (
      <Wrapper>
        <Header>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
          <Menu>
            <Link href="/">
              <MenuItem active>Companies</MenuItem>
            </Link>
            <Link href="/about">
              <MenuItem>About</MenuItem>
            </Link>
          </Menu>
        </Header>
        <Content>
          <div>
            <SearchInputContainer>
              <SearchInput
                placeholder="Company..."
                value={this.state.value}
                onChange={this.handleChange}
              />
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
                      <span>Recently Updated</span>
                    </DropdownItemWrapper>
                  </DropdownItemsWrapper>
                </DropdownItemContent>
              </DropdownFilter>
            </DropdownFilterWrapper>
          </ContentWithMargins>
          <ContentWithMargins>
            <Divider color="rgb(0,23,31,0.1)" marginTop="0" />
            <InternTable searchText={this.state.searchText} />
          </ContentWithMargins>
        </Content>
        <footer>…</footer>
      </Wrapper>
    );
  }
}

export default Index;
