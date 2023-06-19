import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();

  const shoudRedirect = !isLoggedIn && !isRefreshing;
  return shoudRedirect ? <Navigate to={redirectTo} /> : Component;
};
