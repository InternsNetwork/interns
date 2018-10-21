import 'glamor/reset';
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Logo } from '../components/Logo';
import { Footer } from '../components/Footer';

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
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

const Content = styled.main`
  flex: 1;
  min-width: 100%;
  align-self: center;
  box-sizing: border-box;
`;

const ContentWithMargins = styled.div`
  margin-left: auto;
  margin-right: auto;

  max-width: 1000px;
  @media (min-width: 1000px) {
    min-width: 1000px;
  }
`;

export const About = props => {
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
            <MenuItem>Companies</MenuItem>
          </Link>
          <Link href="/about">
            <MenuItem active>About</MenuItem>
          </Link>
        </Menu>
      </Header>
      <Content>
        <ContentWithMargins>
          <h2>Interns Network</h2>
          <p>
            We are Software Engineers with a passion for getting people into
            this industry.
          </p>
          <p>
            This is quite hard for new programmers or computer science students.
            Entry jobs are really hard to find and internships are the perfect
            bridge for getting into the market.
          </p>
          <h2>Contact</h2>
          <p>You can contact us by emailing: </p>
          <h2>FAQ</h2>
          <p>
            <i>How do you make money?</i>
          </p>
          <p>We do not right now. We will think about monetization later.</p>
          <p>
            <i>How can I list my company here?</i>
          </p>
          <p>
            This project will be Open Source at some point so everyone can
            contribute companies to it.
          </p>
        </ContentWithMargins>
      </Content>
      <Footer />
    </Wrapper>
  );
};

export default About;
