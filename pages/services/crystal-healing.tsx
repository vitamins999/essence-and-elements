import Link from 'next/link';
import Image from 'next/image';
import { GetStaticProps } from 'next';
import { gql } from '@apollo/client';
import client from '../../apollo-client';

import Layout from '../../components/Layout';
import ReaderCard from '../../components/ReaderCard';

const CrystalHealingPage = ({ readers }) => {
  const title = 'Crystal Healing Services - Book a Healing now';
  const description =
    'Book a Crystal Healing now and discover how our Crystal Healing services can benefit your body and mind.';

  return (
    <Layout title={title} description={description}>
      <section
        data-testid='section-crystal-healing'
        className='relative xl:px-56 md:px-28 px-10 pt-32 pb-20 z-10 min-h-screen w-full'
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
          <h2 className='inline-block text-gray-500'>
            <Link href='/services'>
              <a className='hover:text-purple-500 transition duration-200 ease-in-out'>
                Services
              </a>
            </Link>
          </h2>
          <span className='text-gray-500 px-2'> / </span>
          <h2 className='inline-block'>Crystal Healing Services</h2>
        </div>
        <div className='grid grid-cols-2 gap-10 bg-gray-200 p-5 rounded-lg'>
          <div className='flex items-center'>
            <h2 className='sm:text-5xl text-xl tracking-wide font-heading uppercase leading-snug'>
              Crystal Healing Services
            </h2>
          </div>
          <div className='w-full h-full flex justify-center'>
            <div className=' relative rounded-full object-cover lg:w-80 lg:h-80 sm:w-40 sm:h-40 w-20 h-20'>
              <Image
                src='/img/crystal-healing-1.webp'
                layout='fill'
                alt='logo'
                className='rounded-full object-cover lg:w-80 lg:h-80 sm:w-40 sm:h-40 w-20 h-20'
              />
            </div>
          </div>
        </div>
        <h3 className='mt-5 text-gray-900 text-lg font-medium'>
          What is Crystal Healing?
        </h3>
        <p className='mt-3 max-w-4xl text-gray-600'>
          Crystal Healing is a natural and holistic therapy. It taps into an
          energy based system, using various types of crystals, which in turn
          helps to unblock and balance the chakras. The practitioner places the
          crystals around the client, usually whilst the client is laying down.
        </p>
        <h3 className='mt-5 text-gray-900 text-lg font-medium'>
          How can Crystal Healing benefit your body and mind?
        </h3>
        <p className='mt-3 max-w-4xl text-gray-600'>
          Crystals can help to ground, balance, restore and cleanse both your
          body and mind. Crystal Healing is a practice that is intended for
          relaxing, renewing and restoring yourself. Sessions are aimed at
          calming and refreshing your physical and mental self.
        </p>
        {readers.length === 0 ? (
          <p className='mt-5 max-w-4xl text-red-600 italic'>
            Sorry! We currently have no practitioners offering this service!
          </p>
        ) : (
          <>
            <h3 className='mt-10 text-gray-700 text-xl font-medium'>
              Our Crystal Healing Practitioners
            </h3>
            {readers.map((reader) => {
              return (
                reader.crystalHealing === true && (
                  <ReaderCard data={reader} key={reader.name} />
                )
              );
            })}
            <section className='text-gray-600 relative'>
              <h3 className='mt-10 mb-1 text-gray-700 text-xl font-medium'>
                Request a Crystal Healing
              </h3>
              <p className='font-semibold'>£9.99</p>
              <p className='mt-3 mb-5 max-w-4xl text-gray-600'>
                Getting a healing couldn't be simpler. Just fill in the form
                below with your name and email, any questions or comments you
                have, and select the name of the practitioner you want to give
                your reading. The practitioner will get back to you right away
                to arrange payment.
              </p>
              <div className=''>
                <div className='lg:w-1/2 md:w-2/3'>
                  <form
                    name='crystal-healing'
                    method='POST'
                    action='/success'
                    data-netlify='true'
                    className='flex flex-wrap -m-2'
                  >
                    <input
                      type='hidden'
                      name='form-name'
                      value='crystal-healing'
                    />
                    <div className='p-2 w-1/2'>
                      <div className='relative'>
                        <label className='leading-7 text-sm text-gray-900 font-medium'>
                          Name
                        </label>
                        <input
                          type='text'
                          id='name'
                          name='name'
                          placeholder='eg. Jim Morrison'
                          required
                          className='w-full text-xs md:text-base bg-gray-100 bg-opacity-50 rounded-lg border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out shadow-inner'
                        />
                      </div>
                    </div>
                    <div className='p-2 w-1/2'>
                      <div className='relative'>
                        <label className='leading-7 text-sm text-gray-900 font-medium'>
                          Email
                        </label>
                        <input
                          type='email'
                          id='email'
                          name='email'
                          placeholder='eg. jim.morrison@company.com'
                          required
                          className='w-full bg-gray-100 bg-opacity-50 rounded-lg border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-xs md:text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out shadow-inner'
                        />
                      </div>
                    </div>
                    <div className='p-2 w-1/2'>
                      <div className='relative'>
                        <label className='leading-7 text-sm text-gray-900 font-medium'>
                          Practitioner
                        </label>
                        <select
                          id='practitioner'
                          name='practioner'
                          required
                          className='w-full bg-gray-100 bg-opacity-50 rounded-lg border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-xs md:text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out shadow-inner'
                        >
                          {readers.map((reader) => {
                            return (
                              reader.crystalHealing === true && (
                                <option value={reader.name} key={reader.name}>
                                  {reader.name}
                                </option>
                              )
                            );
                          })}
                        </select>
                      </div>
                    </div>
                    <div className='p-2 w-full'>
                      <div className='relative'>
                        <label className='leading-7 text-sm text-gray-900 font-medium'>
                          Question or comments
                        </label>
                        <textarea
                          id='message'
                          name='message'
                          className='w-full bg-gray-100 bg-opacity-50 rounded-lg border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-xs md:text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out shadow-inner'
                        ></textarea>
                      </div>
                    </div>
                    <div className='p-2 w-full'>
                      <button
                        type='submit'
                        className='flex justify-center w-full text-purple-50 bg-purple-500 border-0 py-3 px-8 focus:outline-none hover:bg-purple-600 transition duration-200 ease-in-out rounded-md text-md'
                      >
                        Submit request
                      </button>
                    </div>
                    <div className='p-2 w-full pt-8 mt-8 border-t border-gray-300 text-center'></div>
                  </form>
                </div>
              </div>
            </section>
          </>
        )}
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const READER = {
    query: gql`
      query GetReaders {
        readers(where: { crystalHealing: true }) {
          name
          shortDetails
          longDetails
          imagePath
          reiki
          tarot
          crystalHealing
        }
      }
    `,
  };

  const { data } = await client.query(READER);

  return {
    props: { readers: data.readers },
  };
};

export default CrystalHealingPage;
