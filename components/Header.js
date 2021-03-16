import Link from 'next/link';

const Header = ({ menuOpen, setMenuOpen }) => {
  return (
    <header
      className={`flex w-full text-lg z-50 absolute top-0 right-0 justify-between px-28 py-10 items-center`}
    >
      <Link href='/'>
        <a className='font-heading uppercase font-bold cursor-pointer hover:text-purple-700 transition ease-in-out duration-150'>
          Essence & Elements
        </a>
      </Link>
      {menuOpen ? (
        <svg
          onClick={() => setMenuOpen(!menuOpen)}
          className='text-gray-900 w-6 h-6 cursor-pointer hover:text-purple-700 transition ease-in-out duration-150'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M6 18L18 6M6 6l12 12'
          ></path>
        </svg>
      ) : (
        <svg
          onClick={() => setMenuOpen(!menuOpen)}
          className='text-gray-900 w-6 h-6 cursor-pointer hover:text-purple-700 transition ease-in-out duration-150'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h16M4 18h16'
          ></path>
        </svg>
      )}
    </header>
  );
};

export default Header;
