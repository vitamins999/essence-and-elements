import { useState, ReactNode } from 'react';

import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';

type Props = {
  children: ReactNode;
  title: string;
  description: string;
  footerFixed?: boolean;
};

const Layout = ({ children, title, description, footerFixed }: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <link rel='icon' href='favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <title>Essence & Elements | {title}</title>
        <meta name='twitter:card' content='summary' key='twcard' />
        <meta name='twitter:creator' content='EssenceElement2' key='twhandle' />
        <meta name='description' content={description} key='desc' />
        <meta
          property='og:title'
          content={`Essence & Elements | ${title}`}
          key='ogtitle'
        />
        <meta property='og:description' content={description} key='ogdesc' />
        <meta
          property='og:image'
          content='https://www.essenceandelements.org/img/logo.png'
          key='ogimage'
        />
        <meta
          property='og:site_name'
          content='Essence & Elements'
          key='ogsitename'
        />
      </Head>
      <div className='bg-gray-50 text-gray-900 font-body'>
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div>{children}</div>
        {footerFixed ? (
          <Footer footerFixed={true} />
        ) : (
          <Footer footerFixed={false} />
        )}
      </div>
      <Menu menuOpen={menuOpen} />
    </>
  );
};

export default Layout;
