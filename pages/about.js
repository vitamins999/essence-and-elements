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
        <div className='grid grid-cols-2 gap-10 mt-5'>
          <div>
            <h2 className='text-5xl tracking-wide font-heading uppercase leading-snug'>
              Who we are and our mission to help people
            </h2>
            <p className='mt-5 max-w-4xl text-gray-600 text-sm'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus, incidunt ipsam corporis fugiat adipisci molestias
              nostrum. Laboriosam in odio distinctio nemo ipsa laudantium illo?
              Aliquam ab nulla praesentium culpa neque fuga excepturi nobis
              ipsum, delectus odit mollitia dignissimos cupiditate ut!
            </p>
          </div>
          <div className='w-full h-full flex justify-center'>
            <img
              src='/hand-holding.jpeg'
              alt='logo'
              className='rounded-full object-cover w-80 h-80'
            />
          </div>
        </div>
        {readers.map((reader) => {
          return <ReaderCard data={reader} key={reader.name} tag={true} />;
        })}
      </section>
    </Layout>
  );
};

export default AboutPage;
