import { FC, ReactNode } from 'react';

const Layout: FC<Readonly<{ children: ReactNode }>> = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen gap-4 bg-[#202020]">
      {children}
    </div>
  );
};

export default Layout;
