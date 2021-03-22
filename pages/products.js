import Link from 'next/link';

import Layout from '../components/Layout';
import Card from '../components/Card';
import { products } from '../data/products';

const ProductsPage = () => {
  return (
    <Layout title='Products'>
      <section className='relative px-28 py-32 z-10 min-h-screen w-full'>
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
        <p className='mb-10 mt-5 max-w-4xl'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora sit
          accusantium eveniet, distinctio debitis, adipisci accusamus nihil amet
          temporibus nisi minus sequi praesentium quaerat magni, maiores earum
          facere animi! Ullam iusto molestiae provident inventore magni quis
          voluptatem harum voluptate libero!
        </p>
        {products.map((product, index) => {
          return <Card data={product} index={index} key={product.name} />;
        })}
      </section>
    </Layout>
  );
};

export default ProductsPage;
