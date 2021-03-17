import Image from 'next/image';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className='absolute bottom-20 z-10 px-28'>
      <ul className='flex justify-center items-center'>
        <motion.li
          whileHover={{ translateY: -7 }}
          className='cursor-pointer mr-5'
        >
          <a>
            <Image src='/facebook.svg' alt='Facebook' width={20} height={20} />
          </a>
        </motion.li>
        <motion.li
          whileHover={{ translateY: -7 }}
          className='cursor-pointer mr-5'
        >
          <a>
            <Image src='/twitter.svg' alt='Twitter' width={20} height={20} />
          </a>
        </motion.li>
        <motion.li whileHover={{ translateY: -7 }} className='cursor-pointer'>
          <a>
            <Image
              src='/instagram.svg'
              alt='Instagram'
              width={20}
              height={20}
            />
          </a>
        </motion.li>
      </ul>
    </footer>
  );
};

export default Footer;
