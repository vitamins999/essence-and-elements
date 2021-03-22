import Link from 'next/link';

import Layout from '../../../components/Layout';
import { bracelets } from '../../../data/products';
import { formatter } from '../../../utils/format';

const BraceletProductPage = ({ itemData }) => {
  const productType = 'Bracelet';
  const productTypeFull = 'Vitamin D Bracelet';

  return (
    <Layout title={`${itemData.itemName} ${productType}`}>
      <section className='relative px-28 pt-32 pb-20 z-10 w-full'>
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
          <h2 className='inline-block text-gray-500'>
            <Link href={`/products/bracelets`}>
              <a className='hover:text-purple-500 transition duration-200 ease-in-out'>
                {productType}s
              </a>
            </Link>
          </h2>
          <span className='text-gray-500 px-2'> / </span>
          <h2 className='inline-block'>{itemData.itemName}</h2>
        </div>

        <section className='text-gray-600 body-font overflow-hidden'>
          <div className='pt-3'>
            <div className='w-full h-96 grid grid-cols-2 gap-10'>
              <img
                alt={itemData.itemName}
                className='h-96 object-cover rounded-lg'
                src={`${itemData.itemImagePath}`}
              />
              <div className='w-full flex flex-col justify-between'>
                <div>
                  <h2 className='text-sm font-heading text-purple-500 tracking-tight uppercase'>
                    {productTypeFull}
                  </h2>
                  <h1 className='text-gray-900 text-5xl font-heading font-medium tracking-tight mt-3 mb-2'>
                    {itemData.itemName}
                  </h1>

                  <div>
                    <span className='text-md font-bold mr-1 align-top text-gray-500'>
                      £
                    </span>
                    <span className='font-medium text-2xl text-gray-900'>
                      {itemData.itemPrice / 100}
                    </span>
                  </div>
                </div>
                <div className='font-medium mt-2'>
                  <p className='leading-relaxed text-sm max-w-sm pb-2 text-gray-600'>
                    {itemData.itemDescripion}
                  </p>
                  {itemData.itemBullets.map((bullet, index) => {
                    return (
                      <div className='flex py-1' key={index}>
                        <svg
                          className='w-6 h-6 mr-2'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                          ></path>
                        </svg>
                        <p className='text-sm'>{bullet}</p>
                      </div>
                    );
                  })}
                </div>
                <div>
                  <div className='flex items-center pb-5 border-b-2 border-gray-200 mb-5'></div>

                  <button className='w-full text-gray-50 bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 transition duration-200 ease-in-out rounded-md'>
                    Buy Now - {formatter.format(itemData.itemPrice / 100)}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </Layout>
  );
};

export const getStaticProps = async (context) => {
  const itemData = bracelets.find((bracelet) => {
    return bracelet.itemLinkPath === context.params.item;
  });

  return {
    props: { itemData },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { item: 'green-white' } },
      { params: { item: 'blue-pink' } },
      { params: { item: 'silver-black' } },
      { params: { item: 'white-black' } },
      { params: { item: 'pink-black' } },
      { params: { item: 'pink-white' } },
      { params: { item: 'dice' } },
      { params: { item: 'stars' } },
      { params: { item: 'pink-white-crystal' } },
      { params: { item: 'red-white' } },
      { params: { item: 'black-red-stars' } },
      { params: { item: 'purple-white' } },
    ],
    fallback: false,
  };
};

export default BraceletProductPage;
