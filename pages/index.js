import 'glamor/reset';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const Content = styled.main`
  flex: 1;
`;

export default () => (
  <Wrapper>
    <header>…</header>
    <Content>...dwa</Content>
    <footer>…</footer>
  </Wrapper>
);
