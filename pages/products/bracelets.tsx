import Link from 'next/link';

import Layout from '../../components/Layout';
import ItemCard from '../../components/ItemCard';
import { bracelets } from '../../data/products';

const BraceletsPage = () => {
  return (
    <Layout title='Bracelets'>
      <section className='relative md:px-28 px-10 pt-32 pb-20 z-10 min-h-screen w-full'>
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
          <h2 className='inline-block'>Bracelets</h2>
        </div>
        <h2 className='text-4xl tracking-wide font-heading uppercase'>
          Vitamin D Bracelets
        </h2>
        <p className='mb-10 mt-5 max-w-4xl text-gray-600'>
          U.V wristbands helping you get the Vitamin D you need, without the
          risk of sunburn. These wristbands monitor exposure to U.V rays, the
          white beads turning darker the higher the U.V. index.
        </p>
        <div className='flex md:flex-wrap md:justify-between md:flex-row flex-col items-center pt-5'>
          {bracelets.map((bracelet) => {
            return <ItemCard data={bracelet} key={bracelet.itemName} />;
          })}
        </div>
      </section>
    </Layout>
  );
};

export default BraceletsPage;
