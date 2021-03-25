import Link from 'next/link';
import { motion } from 'framer-motion';

import { formatter } from '../utils/format';

import { Item } from '../interfaces/index';

type Props = {
  data: Item;
};

const ItemCard = ({ data }: Props) => {
  return (
    <Link href={`/products/${data.category}/${data.itemLinkPath}`}>
      <a className='cursor-pointer'>
        <motion.div className='lg:w-84 lg:h-96 w-64 h-72'>
          <motion.img
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.15 }}
            className='w-full lg:h-64 h-48 object-cover rounded-md hover:shadow-md'
            src={`${data.itemImagePath}`}
            alt={`${data.itemName}`}
          />
          <p className='pt-3 text-gray-500'>{data.itemName}</p>
          <p className='pt-2 tracking-wide text-gray-900'>
            {formatter.format(data.itemPrice / 100)}
          </p>
        </motion.div>
      </a>
    </Link>
  );
};

export default ItemCard;
