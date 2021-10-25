import Link from 'next/link';
import { GetStaticProps } from 'next';
import { gql } from '@apollo/client';
import client from '../apollo-client';

import Layout from '../components/Layout';
import Card from '../components/Card';

const ProductsPage = ({ products }) => {
  const title = 'Spiritual and Healing Merchandise';
  const description =
    'Browse our beautiful colour changing Vitamin D bracelets and our polished healing tumblestone necklace selection.';

  return (
    <Layout title={title} description={description}>
      <section
        data-testid='section-products'
        className='relative xl:px-56 md:px-28 px-10 pt-32 pb-10 z-10 min-h-screen w-full'
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
          <h2 className='inline-block'>Products</h2>
        </div>
        <h2 className='text-4xl tracking-wide font-heading uppercase'>
          Products
        </h2>
        <h3 className='mt-5 text-gray-900 text-lg font-medium'>
          Our wide range of spiritual and healing merchandise.
        </h3>
        <p className='mb-10 mt-3 max-w-4xl text-gray-600 md:text-base text-sm'>
          Choose from our beautiful colour changing Vitamin D bracelets. Or take
          a look at our polished healing tumblestone necklace selection. Each
          tumblestone has a different meaning, so you will have no problem
          finding one that is perfect for you. Furthermore, each tumblestone
          necklace has been cleansed using a Tibetan Singing Bowl, to promote
          the necklace's Aura and Chakra balancing properties.
        </p>
        {products.map((product, index) => {
          return <Card data={product} index={index} key={product.name} />;
        })}
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const PRODUCTS = {
    query: gql`
      query GetProducts {
        products {
          name
          text
          imagePath
          category
          subcategory
        }
      }
    `,
  };

  const { data } = await client.query(PRODUCTS);

  return {
    props: { products: data.products },
  };
};

export default ProductsPage;
