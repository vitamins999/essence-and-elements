import Layout from '../../components/Layout';
import Item from '../../components/Item';
import { necklaces } from '../../data/products';

const NecklacesPage = () => {
  return (
    <Layout title='Crystal Necklaces'>
      <section className='relative px-28 pt-32 pb-20 z-10 min-h-screen w-full'>
        <h2 className='text-4xl tracking-wide font-heading uppercase'>
          Crystal Necklaces
        </h2>
        <p className='my-10 max-w-4xl'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora sit
          accusantium eveniet, distinctio debitis, adipisci accusamus nihil amet
          temporibus nisi minus sequi praesentium quaerat magni, maiores earum
          facere animi! Ullam iusto molestiae provident inventore magni quis
          voluptatem harum voluptate libero!
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
