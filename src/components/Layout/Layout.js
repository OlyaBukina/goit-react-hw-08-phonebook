import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Container } from '../Container/Container.styled';

import { AppBar } from '../AppBar/AppBar';

export const Layout = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback="Loading...">
        <Outlet />
      </Suspense>
    </Container>
  );
};
