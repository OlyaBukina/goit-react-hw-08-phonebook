import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LogoWrapper = styled(Link)`
  font-family: 'Mali', cursive;
  color: #424242;

  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 5px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 24px;
  }
`;

export const LogoSpan = styled.span`
  color: ${({ color }) => color};
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 34px;
  }
`;
