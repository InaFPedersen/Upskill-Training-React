import { Outlet } from 'react-router-dom';

import Header from './Header';
import Sidebar from './Sidebar';
import { Container, Main, StyledAppLayout } from './AppLayoutStyledComponent';

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
