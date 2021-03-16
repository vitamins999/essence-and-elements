const Menu = ({ menuOpen }) => {
  return (
    <nav
      className={`bg-white font-body absolute top-0 ${
        menuOpen ? 'right-0' : 'hidden'
      } w-60 h-full flex items-center justify-center z-40 text-gray-900`}
    >
      <ul className='text-2xl'>
        <li>
          <a
            className='hover:text-purple-700 transition ease-in-out duration-150'
            href='#'
          >
            Home
          </a>
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
    </nav>
  );
};

export default Menu;
