import Link from 'next/link';
import { GetStaticProps } from 'next';
import { gql } from '@apollo/client';
import client from '../apollo-client';

import Layout from '../components/Layout';
import Card from '../components/Card';

const ServicesPage = ({ services }) => {
  return (
    <Layout title='Services'>
      <section
        data-testid='section-services'
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
          <h2 className='inline-block'>Services</h2>
        </div>
        <h2 className='text-4xl tracking-wide font-heading uppercase'>
          Services
        </h2>
        <h3 className='mt-5 text-gray-900 text-lg font-medium'>
          Our wide range of spiritual and healing services, suitable for
          everyone.
        </h3>
        <p className='mb-10 mt-3 max-w-4xl text-gray-600 md:text-base text-sm'>
          As a client, you will be truly valued at Essence & Elements. We are
          kind, sensitive and empathic to all your needs - whether it be a
          personalised Tarot reading, Crystal Healing or the power of Reiki.
        </p>
        {services.map((service, index) => {
          return <Card data={service} index={index} key={service.name} />;
        })}
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const SERVICES = {
    query: gql`
      query GetServices {
        services {
          name
          text
          imagePath
          category
          subcategory
        }
      }
    `,
  };

  const { data } = await client.query(SERVICES);

  return {
    props: { services: data.services },
  };
};

export default ServicesPage;
