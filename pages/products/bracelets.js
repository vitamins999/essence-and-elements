import Layout from '../../components/Layout';
import Item from '../../components/Item';
import { bracelets } from '../../data/products';

const BraceletsPage = () => {
  return (
    <Layout title='Bracelets'>
      <section className='relative px-28 pt-32 pb-20 z-10 min-h-screen w-full'>
        <h2 className='text-4xl tracking-wide font-heading uppercase'>
          Vitamin D Bracelets
        </h2>
        <p className='my-10 max-w-4xl'>
          U.V wristbands helping you get the Vitamin D you need, without the
          risk of sunburn. These wristbands monitor exposure to U.V rays, the
          white beads turning darker the higher the U.V. index.
        </p>
        <div className='flex flex-wrap justify-between pt-5'>
          {bracelets.map((bracelet) => {
            return <Item data={bracelet} key={bracelet.itemName} />;
          })}
        </div>
      </section>
    </Layout>
  );
};

export default BraceletsPage;
