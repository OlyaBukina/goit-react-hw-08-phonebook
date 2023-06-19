import { NavLink } from 'react-router-dom';


import { AuthNavList } from './AuthNav.styled';

export const AuthNav = () => {
 
  return (
    <AuthNavList>
      <NavLink to="/signup">Sign up</NavLink>
      <NavLink to="/login">Log in</NavLink>
    </AuthNavList>
  );
};
