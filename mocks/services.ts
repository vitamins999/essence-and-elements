import { Service } from '../interfaces/index';

export const services: Service[] = [
  {
    name: 'Tarot',
    text: 'Mystical Tarot readings help you to gain insight into the past, the present or the future, and can reveal the innermost truths of your higher self.',
    imagePath: '/tarot.jpeg',
    category: 'services',
    subcategory: 'tarot',
  },
  {
    name: 'Reiki',
    text: 'A Japanese form of alternative medicine that means "Energy Healing".  Reiki uses universal energy to encourage emotional and physical healing.',
    imagePath: '/reiki.jpeg',
    category: 'services',
    subcategory: 'reiki',
  },
  {
    name: 'Crystal Healing',
    text: 'Crystal Healing is a type of alternative therapy that involves using semi-precious stones to help bring balance to your life and mind.',
    imagePath: '/crystal_healing.jpeg',
    category: 'services',
    subcategory: 'crystal-healing',
  },
];
