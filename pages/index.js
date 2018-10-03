import styled from 'styled-components';

import { COLORS } from '../util/colors';

const Button = styled.button`
  background-color: ${COLORS.SECONDARY};
`;

export default () => (
  <div>
    <Button>Hello World.</Button>
  </div>
);
