import { Product, Item } from '../interfaces/index';

export const products: Product[] = [
  {
    name: 'Vitamin D Bracelets',
    text: 'Colour changing wristbands which monitor exposure to U.V. rays.',
    imagePath: '/bracelet.jpeg',
    category: 'products',
    subcategory: 'bracelets',
  },
  {
    name: 'Crystal Necklaces',
    text: 'Polished tumblestone crystal necklaces, with spiritual and healing properties.',
    imagePath: '/necklace.jpeg',
    category: 'products',
    subcategory: 'necklaces',
  },
];

export const bracelets: Item[] = [
  {
    itemName: 'Green & White',
    itemDescription:
      'A beautiful green and white Vitamin D bracelet. The darker the white beads glow, the greater the UV index.',
    itemBullets: [
      'Wrist size: Adult',
      'Colour: Green and White',
      'Acts as an early warning to prevent sunburn',
    ],
    itemPrice: 999,
    itemImagePath: '/vitamin-d.jpeg',
    itemLinkPath: 'green-white',
    category: 'bracelets',
  },
  {
    itemName: 'Blue & Pink',
    itemDescription:
      'A beautiful blue and pink Vitamin D bracelet. The darker the white beads glow, the greater the UV index.',
    itemBullets: [
      'Wrist size: Adult',
      'Colour: Blue and Pink',
      'Acts as an early warning to prevent sunburn',
    ],
    itemPrice: 599,
    itemImagePath: '/black.jpeg',
    itemLinkPath: 'blue-pink',
    category: 'bracelets',
  },
];

export const necklaces: Item[] = [
  {
    itemName: 'Amythyst',
    itemDescription:
      'Polished tumblestone amythyst crystal necklace, with spiritual and healing properties.',
    itemBullets: [
      'Helps relieve headache and fatigue',
      'Promotes good dreams and skin',
      'Supports bones and joints',
    ],
    itemPrice: 1299,
    itemImagePath: '/necklace-healing.jpeg',
    itemLinkPath: 'amythyst',
    category: 'necklaces',
  },
  {
    itemName: 'Jade',
    itemDescription:
      'Polished tumblestone jade crystal necklace, with spiritual and healing properties.',
    itemBullets: ['Supports the adrenal gland', 'Relieves headaches'],
    itemPrice: 499,
    itemImagePath: '/necklace-green.jpeg',
    itemLinkPath: 'jade',
    category: 'necklaces',
  },
];
