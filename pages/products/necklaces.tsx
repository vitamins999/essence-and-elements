import Link from 'next/link';
import { GetStaticProps } from 'next';
import { gql } from '@apollo/client';
import client from '../../apollo-client';

import Layout from '../../components/Layout';
import ItemCard from '../../components/ItemCard';

const NecklacesPage = ({ necklaces }) => {
  const title = 'Crystal Necklaces';
  const description =
    'Browse our selection of polished tumblestone crystal necklaces, enhanced with spiritual and healing properties.';

  return (
    <Layout title={title} description={description}>
      <section
        data-testid='section-necklaces'
        className='relative xl:px-56 md:px-28 px-10 pt-32 pb-20 z-10 min-h-screen w-full'
      >
        <div className='mx-auto pt-6 pb-4 font-heading'>
          <h2 className='inline-block text-gray-500'>
            <Link href='/'>
              <a className='hover:text-purple-500 transition duration-200 ease-in-out'>
                Home
              </a>
            </Link>
          </h2>
          <span className='text-gray-500 px-2'> / </span>
          <h2 className='inline-block text-gray-500'>
            <Link href={`/products`}>
              <a className='hover:text-purple-500 transition duration-200 ease-in-out'>
                Products
              </a>
            </Link>
          </h2>
          <span className='text-gray-500 px-2'> / </span>
          <h2 className='inline-block'>Necklaces</h2>
        </div>
        <h2 className='text-4xl tracking-wide font-heading uppercase'>
          Crystal Necklaces
        </h2>
        <p className='mb-10 mt-5 max-w-4xl text-gray-600'>
          Polished tumblestone necklaces, with spiritual and healing properties.
        </p>
        <div className='flex md:flex-wrap md:justify-between md:flex-row flex-col items-center pt-5'>
          {necklaces.map((necklace) => {
            return <ItemCard data={necklace} key={necklace.itemName} />;
          })}
        </div>
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const NECKLACES = {
    query: gql`
      query GetNecklaces {
        necklaces {
          itemName
          itemPrice
          itemImagePath
          itemLinkPath
          category
        }
      }
    `,
  };

  const { data } = await client.query(NECKLACES);

  return {
    props: { necklaces: data.necklaces },
  };
};

export default NecklacesPage;
