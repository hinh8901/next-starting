import { ReactNode } from 'react';

import Sidebar from '../_components/Sidebar';

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div>
      <Sidebar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
