import Layout from '../components/Layout';
import ReaderCard from '../components/ReaderCard';
import { readers } from '../data/readers';

const AboutPage = () => {
  return (
    <Layout title='About Us'>
      <section className='relative px-28 py-32 z-10 min-h-screen w-full'>
        <h2 className='text-4xl tracking-wide font-heading uppercase'>
          About Us
        </h2>
        <p className='mt-5 max-w-4xl'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
          incidunt ipsam corporis fugiat adipisci molestias nostrum. Laboriosam
          in odio distinctio nemo ipsa laudantium illo? Aliquam ab nulla
          praesentium culpa neque fuga excepturi nobis ipsum, delectus odit
          mollitia dignissimos cupiditate ut!
        </p>
        {readers.map((reader) => {
          return <ReaderCard data={reader} key={reader.name} />;
        })}
      </section>
    </Layout>
  );
};

export default AboutPage;
