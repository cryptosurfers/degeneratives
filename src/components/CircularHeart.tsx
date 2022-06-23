import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components';
import heart from '../assets/heart.png';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 5px;
  font-size: 1.2rem;
`;

export const CircularHeart: FC = () => {
  return (
    <Rotate>
      <img src={heart}></img>
    </Rotate>
  );
};
