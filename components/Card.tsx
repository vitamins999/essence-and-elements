import Link from 'next/link';

import { Service } from '../interfaces/index';

type Props = {
  data: Service;
  index: number;
};

const Card = ({ data, index }: Props) => {
  return (
    <Link href={`/${data.category}/${data.subcategory}`}>
      <a className='cursor-pointer'>
        <div
          className={`w-full bg-gray-200 my-10 flex lg:flex-row flex-col rounded-md shadow-md ${
            index % 2 !== 1 ? 'justify-start' : 'justify-between'
          }`}
        >
          {index % 2 !== 1 && (
            <img
              src={`${data.imagePath}`}
              alt=''
              className='h-72 lg:rounded-l-md lg:rounded-t-none rounded-t-md object-cover'
            />
          )}
          <div className='xl:p-14 lg:py-10 py-5 px-10 flex flex-col justify-around'>
            <h3 className='md:text-2xl text-xl pb-3 tracking-wide uppercase'>
              {data.name}
            </h3>
            <p className='text-gray-700 md:text-sm text-xs'>{data.text}</p>
            <div className='underline hover:text-purple-700 transition ease-in-out duration-150 md:text-base text-sm py-3'>
              Find out more
            </div>
          </div>
          {index % 2 === 1 && (
            <img
              src={`${data.imagePath}`}
              alt=''
              className='h-72 lg:rounded-r-md lg:rounded-b-none rounded-b-md object-cover'
            />
          )}
        </div>
      </a>
    </Link>
  );
};

export default Card;
