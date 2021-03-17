import { motion } from 'framer-motion';

import Layout from '../components/Layout';

const HomePage = () => {
  return (
    <Layout title='Home'>
      <div className='absolute overflow-hidden w-screen h-screen'>
        <video
          className='z-0 opacity-40'
          src='/background.mp4'
          type='video/mp4'
          muted
          loop
          autoPlay
        ></video>
      </div>
      <section className='relative px-28 py-64 z-10 min-h-screen w-full'>
        <div>
          <h2 className='text-4xl uppercase font-extrabold tracking-wider'>
            Believing In
          </h2>
          <h3 className='text-3xl uppercase font-bold tracking-wide'>
            A Better You
          </h3>
          <p className='mt-5 max-w-4xl'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
            exercitationem nostrum tempore soluta dolorem est vel mollitia
            libero modi laudantium.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className='bg-white text-purple-700 mt-5 py-3 px-8 rounded-lg uppercase tracking-wider hover:text-purple-900'
          >
            Explore
          </motion.button>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
