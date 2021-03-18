import Layout from '../components/Layout';
import Card from '../components/Card';
import { services } from '../data/services';

const ServicesPage = () => {
  return (
    <Layout title='Services'>
      <section className='relative px-28 pt-32 pb-10 z-10 min-h-screen w-full'>
        <h2 className='text-4xl tracking-wide font-heading uppercase'>
          Our Services
        </h2>
        <p className='my-10 max-w-4xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          error quo molestias quia iste, tenetur ut beatae totam nesciunt
          mollitia consequatur nemo numquam obcaecati dicta consequuntur. Labore
          quo similique dolor enim. Illum necessitatibus error blanditiis, autem
          ut odit sapiente quo.
        </p>
        {services.map((service, index) => {
          return <Card data={service} index={index} key={service.name} />;
        })}
      </section>
    </Layout>
  );
};

export default ServicesPage;
