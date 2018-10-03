import 'glamor/reset';
import styled from 'styled-components';

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
    <footer>…</footer>
  </Wrapper>
);
