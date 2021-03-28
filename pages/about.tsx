import Link from 'next/link';

import Layout from '../components/Layout';
import ReaderCard from '../components/ReaderCard';
import { readers } from '../data/readers';

const AboutPage = () => {
  return (
    <Layout title='About Us'>
      <section className='relative xl:px-56 md:px-28 px-10 py-32 z-10 min-h-screen w-full'>
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
        <div className='grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-10 gap-0 grid-cols-1 grid-rows-2 mt-5 md:mb-0 -mb-5'>
          <div>
            <h2 className='lg:text-5xl md:text-4xl text-3xl tracking-wide font-heading uppercase leading-snug'>
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
          <div className='w-full h-full flex justify-center items-center'>
            <img
              src='/hand-holding.jpeg'
              alt='logo'
              className='rounded-full object-cover lg:w-80 lg:h-80 lg-mt-0 mt-5 w-40 h-40'
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
