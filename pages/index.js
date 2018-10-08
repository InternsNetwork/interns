import 'glamor/reset';
import styled from 'styled-components';
import React from 'react';
import { COLORS } from '../util/colors';
import { InternTable } from '../components/InternTable';
import { ChevronDown } from '../components/ChevronDown';

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
  border-top: 1px solid ${COLORS.PRIMARY};
  width: 100%;
  margin-top: 1.3em;
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

const DropdownFilter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em 0.7em;
  cursor: pointer;

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
          </DropdownFilter>
        </DropdownFilterWrapper>
      </ContentWithMargins>
      {/* <InternTable /> */}
    </Content>
    <footer>…</footer>
  </Wrapper>
);
