import Link from 'next/link';
import { motion } from 'framer-motion';

const ReaderCard = ({ data }) => {
  return (
    <div className='flex flex-col text-gray-900'>
      <div className='lg:w-4/6'>
        <div className='flex flex-col sm:flex-row mt-10'>
          <div className='sm:w-1/3 text-center sm:pr-8 sm:py-8'>
            <div className='w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400'>
              <img className='rounded-full' src={`${data.imagePath}`} alt='' />
            </div>
            <div className='flex flex-col items-center text-center justify-center'>
              <h2 className='font-medium title-font mt-4 text-gray-900 text-lg'>
                {data.name}
              </h2>
              <div className='w-12 h-1 bg-purple-700 rounded mt-2 mb-4'></div>
              <p className='text-xs'>{data.shortDetails}</p>
            </div>
          </div>
          <div className='sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t sm:mt-0 text-center flex flex-col justify-center sm:text-left'>
            <p className='leading-relaxed text-sm pb-5'>{data.longDetails}</p>
            <div className='flex'>
              {data.tarot && (
                <motion.div whileHover={{ scale: 1.1 }} className='mr-5'>
                  <Link href='/services/tarot'>
                    <a
                      whileHover={{ scale: 1.1 }}
                      className='bg-yellow-700 w-20 text-yellow-50 rounded-lg py-3 px-5 text-center text-sm tracking-wide cursor-pointer'
                    >
                      Tarot
                    </a>
                  </Link>
                </motion.div>
              )}
              {data.crystalHealing && (
                <motion.div whileHover={{ scale: 1.1 }} className='mr-5'>
                  <Link href='/services/crystalhealing'>
                    <a className='bg-green-700 w-40 text-green-50 rounded-lg py-3 px-5 text-center text-sm tracking-wide cursor-pointer'>
                      Crystal Healing
                    </a>
                  </Link>
                </motion.div>
              )}
              {data.reiki && (
                <motion.div whileHover={{ scale: 1.1 }} className='mr-5'>
                  <Link href='/services/reiki'>
                    <a
                      whileHover={{ scale: 1.1 }}
                      className='bg-purple-700 w-20 text-purple-50 rounded-lg py-3 px-5 text-center text-sm tracking-wide cursor-pointer'
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
