import React from 'react';
import styled from 'styled-components';

const ArrowUp = styled.div`
  width: 0;
  height: 0;
  border-left: ${props => `${props.size}px` || '5px'} solid transparent;
  border-right: ${props => `${props.size}px` || '5px'} solid transparent;

  border-bottom: ${props => `${props.size}px` || '5px'} solid white;
  align-self: center;
  z-index: 2;
`;

export const Triangle = props => {
  return <ArrowUp size={props.size} />;
};

export default Triangle;
