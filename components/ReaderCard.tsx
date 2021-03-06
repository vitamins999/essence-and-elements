import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { Reader } from '../interfaces/index';

type Props = {
  data: Reader;
  tag?: boolean;
};

const ReaderCard = ({ data, tag }: Props) => {
  return (
    <div data-testid='card-reader' className='flex flex-col text-gray-900'>
      <div className='lg:w-4/6'>
        <div className='flex flex-col sm:flex-row mt-10 bg-gray-100 rounded-lg shadow-md px-6 py-5'>
          <div className='sm:w-1/3 text-center sm:pr-8 sm:py-8'>
            <div className='w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400'>
              <Image
                className='rounded-full object-cover object-center'
                src={`${data.imagePath}`}
                alt={data.name}
                width={80}
                height={80}
                data-testid='image'
              />
            </div>
            <div className='flex flex-col items-center text-center justify-center'>
              <h2
                data-testid='heading-name'
                className='font-medium title-font mt-4 text-gray-900 text-lg'
              >
                {data.name}
              </h2>
              <div className='w-12 h-1 bg-purple-700 rounded mt-2 mb-4'></div>
              <p data-testid='paragraph-short-details' className='text-xs pb-3'>
                {data.shortDetails}
              </p>
            </div>
          </div>
          <div className='sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t pt-3 sm:mt-0 text-center flex flex-col justify-center sm:text-left'>
            <p
              data-testid='paragraph-long-details'
              className='leading-relaxed text-sm pb-8 max-w-md'
            >
              {data.longDetails}
            </p>
            <div className='flex flex-wrap'>
              {data.tarot && tag && (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className='md:mr-5 mr-2'
                >
                  <Link href='/services/tarot'>
                    <a
                      data-testid='link-tarot'
                      className='bg-yellow-700 w-20 text-yellow-50 rounded-lg py-3 px-5 text-center md:text-sm text-xs tracking-wide cursor-pointer'
                    >
                      Tarot
                    </a>
                  </Link>
                </motion.div>
              )}
              {data.crystalHealing && tag && (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className='md:mr-5 mr-2'
                >
                  <Link href='/services/crystalhealing'>
                    <a
                      data-testid='link-crystal-healing'
                      className='bg-green-700 w-40 text-green-50 rounded-lg py-3 px-5 text-center md:text-sm text-xs tracking-wide cursor-pointer'
                    >
                      Crystal Healing
                    </a>
                  </Link>
                </motion.div>
              )}
              {data.reiki && tag && (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className='md:mr-5 mr-2'
                >
                  <Link href='/services/reiki'>
                    <a
                      data-testid='link-reiki'
                      className='bg-purple-700 w-20 text-purple-50 rounded-lg py-3 px-5 text-center md:text-sm text-xs tracking-wide cursor-pointer'
                    >
                      Reiki
                    </a>
                  </Link>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReaderCard;
