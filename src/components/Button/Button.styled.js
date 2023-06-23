import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Button = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 96px;
  height: 36px;
  border-radius: 10px;
  color: #775489;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    width: 86px;
    height: 30px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 16px;
    width: 96px;
    height: 36px;
  }

  &.active {
    color: #fff;
    background-color: #775489;
  }
  &:hover {
    color: #775489;
    background-color: #cdc1d5;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
`;
