import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container } from '../Container/Container.styled';
import { AppBar } from '../AppBar/AppBar';
import { Loader } from '../Loader/Loader';

const Layout = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
export default Layout;
