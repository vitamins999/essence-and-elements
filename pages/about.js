import Link from 'next/link';

import Layout from '../components/Layout';
import ReaderCard from '../components/ReaderCard';
import { readers } from '../data/readers';

const AboutPage = () => {
  return (
    <Layout title='About Us'>
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
          <h2 className='inline-block'>About Us</h2>
        </div>
        <h2 className='text-4xl tracking-wide font-heading uppercase'>
          About Us
        </h2>
        <h3 className='mt-5 text-gray-900 text-lg font-medium'>
          Who we are and our mission to help people.
        </h3>
        <p className='mt-3 max-w-4xl text-gray-600'>
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
