import { Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

type Props = {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
};

const Header = ({ menuOpen, setMenuOpen }: Props) => {
  return (
    <header
      className={`flex w-full md:text-lg sm:text-base text-xs z-50 absolute top-0 right-0 justify-between xl:px-56 md:px-28 px-10 py-10 items-center`}
    >
      <Link href='/'>
        <a className='font-heading uppercase font-bold cursor-pointer hover:text-purple-700 transition ease-in-out duration-150'>
          Essence & Elements
        </a>
      </Link>
      <button
        className='focus:outline-none'
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <motion.svg
          className='text-gray-900 w-6 h-6 cursor-pointer hover:text-purple-700 transition ease-in-out duration-150'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          {
            //  TODO: Change this to ordinary tag instead of motion. Check it looks
            // fine.
          }
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          ></path>
        </motion.svg>
      </button>
    </header>
  );
};

export default Header;
