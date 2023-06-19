import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavList = styled.nav`
  display: flex;
  gap: 20px;
`;

export const Link = styled(NavLink)`
  min-width: 64px;
  padding: 6px 16px;
  border-radius: 10px;
  color: #775489;
  &.active {
    color: #fff;
    background-color: #775489;
  }
`;
