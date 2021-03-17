import Link from 'next/link';
import { motion } from 'framer-motion';

const Menu = ({ menuOpen }) => {
  return (
    <motion.nav
      initial={false}
      animate={menuOpen ? { x: 0 } : { x: 500 }}
      transition={{ type: 'tween' }}
      className={`bg-white font-body fixed right-0 top-0 w-60 h-full flex items-center justify-center z-40 text-gray-900`}
    >
      <ul className='text-2xl'>
        <li>
          <Link href='/'>
            <a className='hover:text-purple-700 transition ease-in-out duration-150'>
              Home
            </a>
          </Link>
        </li>
        <li>
          <a
            className='hover:text-purple-700 transition ease-in-out duration-150'
            href='#'
          >
            Services
          </a>
        </li>
        <li>
          <a
            className='hover:text-purple-700 transition ease-in-out duration-150'
            href='#'
          >
            Products
          </a>
        </li>
        <li>
          <a
            className='hover:text-purple-700 transition ease-in-out duration-150'
            href='#'
          >
            About Us
          </a>
        </li>
        <li>
          <a
            className='hover:text-purple-700 transition ease-in-out duration-150'
            href='#'
          >
            Contact Us
          </a>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Menu;
