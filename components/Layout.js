import { useState } from 'react';

import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';

const Layout = ({ children, title, footerFixed }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <link rel='icon' href='favicon.ico' />
        <title>Essence & Elements | {title}</title>
      </Head>
      <div className='bg-gray-50 text-gray-900 font-body'>
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div>{children}</div>
        {footerFixed ? <Footer footerFixed={true} /> : <Footer />}
      </div>
      <Menu menuOpen={menuOpen} />
    </>
  );
};

export default Layout;
