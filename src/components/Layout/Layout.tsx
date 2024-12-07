import React, { FC, PropsWithChildren } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <Header />
    <div className='container'>{children}</div>
    <Footer />
  </>
);
export default Layout;
