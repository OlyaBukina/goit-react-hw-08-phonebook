import { useEffect, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { refreshUser } from '../redux/auth/auth-operations';
import { useAuth } from '../hooks/useAuth';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { Loader } from './Loader/Loader';
import Layout from '../components/Layout/Layout';

const Home = lazy(() => import('../pages/Home'));
const Contacts = lazy(() => import('../pages/Contacts'));
const Login = lazy(() => import('../pages/Login'));
const Signup = lazy(() => import('../pages/Signup'));

export const App = () => {
  const { isRefreshing } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
        <Route
          path="/signup"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Signup />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route path="*" element={<div>Not found</div>} />
      </Route>
    </Routes>
  );
};
