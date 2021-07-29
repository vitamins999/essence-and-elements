import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { formatter } from '../utils/format';

import { Item } from '../interfaces/index';

type Props = {
  data: Item;
};

const ItemCard = ({ data }: Props) => {
  return (
    <Link href={`/products/${data.category}/${data.itemLinkPath}`}>
      <a data-testid='card-item' className='cursor-pointer'>
        <div className='lg:w-84 lg:h-96 w-64 h-72'>
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.15 }}
            className='relative w-full lg:h-64 h-48 object-cover rounded-md hover:shadow-md'
          >
            <Image
              src={`${data.itemImagePath}`}
              alt={`${data.itemName}`}
              layout='fill'
              className='object-cover rounded-md'
              data-testid='image'
            />
          </motion.div>
          <p data-testid='paragraph-item-name' className='pt-3 text-gray-500'>
            {data.itemName}
          </p>
          <p
            data-testid='paragraph-item-price'
            className='pt-2 tracking-wide text-gray-900'
          >
            {formatter.format(data.itemPrice / 100)}
          </p>
        </div>
      </a>
    </Link>
  );
};

export default ItemCard;
