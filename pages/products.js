import Layout from '../components/Layout';
import Card from '../components/Card';
import { products } from '../data/products';

const ProductsPage = () => {
  return (
    <Layout title='Products'>
      <section className='relative px-28 py-32 z-10 min-h-screen w-full'>
        <h2 className='text-4xl tracking-wide font-heading'>Products</h2>
        <p className='my-10 max-w-4xl'>
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
