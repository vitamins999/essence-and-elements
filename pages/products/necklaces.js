import Link from 'next/link';

import Layout from '../../components/Layout';
import Item from '../../components/Item';
import { necklaces } from '../../data/products';

const NecklacesPage = () => {
  return (
    <Layout title='Crystal Necklaces'>
      <section className='relative px-28 pt-32 pb-20 z-10 min-h-screen w-full'>
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
        <p className='mb-10 mt-5 max-w-4xl'>
          Polished tumblestone necklaces, with spirtual and healing properties.
        </p>
        <div className='flex flex-wrap justify-between pt-5'>
          {necklaces.map((necklace) => {
            return <Item data={necklace} key={necklace.itemName} />;
          })}
        </div>
      </section>
    </Layout>
  );
};

export default NecklacesPage;
