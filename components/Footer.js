import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='absolute bottom-20 z-10 px-28'>
      <ul className='flex justify-center items-center'>
        <li className='cursor-pointer mr-5'>
          <a>
            <Image src='/facebook.svg' alt='Facebook' width={20} height={20} />
          </a>
        </li>
        <li className='cursor-pointer mr-5'>
          <a>
            <Image src='/twitter.svg' alt='Twitter' width={20} height={20} />
          </a>
        </li>
        <li className='cursor-pointer'>
          <a>
            <Image
              src='/instagram.svg'
              alt='Instagram'
              width={20}
              height={20}
            />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
