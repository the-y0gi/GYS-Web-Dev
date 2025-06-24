import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className='flex  w-full justify-center align-middle h-[38vh] '>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
