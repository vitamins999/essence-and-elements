import Link from 'next/link';
import { GetStaticProps, GetStaticPaths } from 'next';

import Layout from '../../../components/Layout';
import { necklaces } from '../../../data/products';
import { formatter } from '../../../utils/format';

import { Item } from '../../../interfaces/index';

type Props = {
  itemData: Item;
};

const BraceletProductPage = ({ itemData }: Props) => {
  const productType = 'Necklace';
  const productTypeFull = 'Crystal Necklace';

  return (
    <Layout title={`${itemData.itemName} ${productType}`}>
      <section className='relative md:px-28 px-10 pt-32 pb-20 z-10 w-full iPadPro:pt-48 iPadProWidescreen:pt-56'>
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
            <Link href={`/products/necklaces`}>
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
            <div className='w-full lg:h-96 h-full grid lg:grid-cols-2 lg:grid-rows-1 grid-cols-1 grid-rows-2 lg:gap-10 iPadPro:grid-cols-1 iPadPro:grid-rows-2 iPadPro:h-full'>
              <img
                alt={itemData.itemName}
                className='lg:h-96 sm:h-72 h-52 w-full object-cover rounded-lg'
                src={`${itemData.itemImagePath}`}
              />
              <div className='w-full flex flex-col justify-between sm:mt-0 -mt-10'>
                <div>
                  <h2 className='lg:text-sm text-xs font-heading text-purple-500 tracking-tight uppercase'>
                    {productTypeFull}
                  </h2>
                  <h1 className='text-gray-900 lg:text-5xl text-4xl font-heading font-medium tracking-tight mt-3 mb-2'>
                    {itemData.itemName}
                  </h1>

                  <div>
                    <span className='lg:text-md text-sm font-bold mr-1 align-top text-gray-500'>
                      £
                    </span>
                    <span className='font-medium lg:text-2xl text-xl text-gray-900'>
                      {itemData.itemPrice / 100}
                    </span>
                  </div>
                </div>
                <div className='font-medium mt-2'>
                  <p className='leading-relaxed lg:text-sm text-xs max-w-sm pb-2 text-gray-600'>
                    {itemData.itemDescription}
                  </p>
                  {itemData.itemBullets.map((bullet, index) => {
                    return (
                      <div className='flex py-1' key={index}>
                        <svg
                          className='lg:w-6 lg:h-6 w-4 h-4 mr-2'
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
                        <p className='lg:text-sm text-xs'>{bullet}</p>
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

export const getStaticProps: GetStaticProps = async (context) => {
  const itemData = necklaces.find((necklace) => {
    return necklace.itemLinkPath === context.params.item;
  });

  return {
    props: { itemData },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { item: 'amythyst' } },
      { params: { item: 'jade' } },
      { params: { item: 'black-onyx' } },
      { params: { item: 'opal' } },
      { params: { item: 'snowflake-obsidian' } },
      { params: { item: 'blue-sodalite' } },
      { params: { item: 'tigers-eye' } },
      { params: { item: 'brown-jasper' } },
      { params: { item: 'white-howlite' } },
      { params: { item: 'turquoise-tumblestone' } },
    ],
    fallback: false,
  };
};

export default BraceletProductPage;
