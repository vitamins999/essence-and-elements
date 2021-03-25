import Image from 'next/image';
import { motion } from 'framer-motion';

type Props = {
  footerFixed?: boolean;
};

const Footer = ({ footerFixed }: Props) => {
  return (
    <footer
      className={`${
        footerFixed && 'absolute md:bottom-10 bottom-5'
      } z-10 md:px-28 px-10`}
    >
      <ul
        className={`${
          footerFixed ? 'justify-center' : 'pb-10'
        } flex items-center`}
      >
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
