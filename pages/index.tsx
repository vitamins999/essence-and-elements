import Link from 'next/link';
import { motion } from 'framer-motion';

import Layout from '../components/Layout';

const HomePage = () => {
  const title = 'Home';
  const description =
    'We are a UK spiritual healing business, offering intuitive Tarot readings, Reiki and Crystal Healing services.';

  return (
    <Layout title={title} description={description} footerFixed={true}>
      <div className='relative h-screen w-screen overflow-hidden'>
        <video
          className='z-0 opacity-40 object-cover absolute top-0 left-0 w-screen h-screen'
          src='/background.mp4'
          muted
          loop
          autoPlay
        ></video>
        <section className='relative xl:px-56 md:px-28 px-10 z-10 min-h-screen w-full flex flex-col justify-center'>
          <div className=''>
            <h2 className='lg:text-5xl md:text-3xl sm:text-2xl text-xl uppercase font-extrabold tracking-wider'>
              Nurturing Your
            </h2>
            <h3 className='lg:text-4xl md:text-2xl sm:text-xl text-lg uppercase font-bold tracking-wide'>
              Soul & Spirit
            </h3>
            <p className='mt-5 md:max-w-4xl max-w-sm xl:text-lg md:text-sm text-xs'>
              Essence & Elements offer intuitive Tarot, Reiki and Crystal
              Healing. We invite you to explore our complementary healing and
              spiritual guidance.
            </p>
            <Link href='/services'>
              <motion.button
                aria-label='Explore'
                whileHover={{ scale: 1.1 }}
                className='bg-white text-purple-700 text-sm md:text-base mt-5 py-3 px-8 rounded-lg uppercase tracking-wider hover:text-purple-900 focus:outline-none'
              >
                Explore
              </motion.button>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;
