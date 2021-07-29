/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import ItemCard from '../../components/ItemCard';

const mockBracelet = {
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
};

describe('Item Card Component', () => {
  it('should render the image', () => {
    render(<ItemCard data={mockBracelet} />);
    const imageElement = screen.getByTestId('image');
    expect(imageElement).toHaveAttribute('alt', 'Green & White');
  });

  it('should render the name', () => {
    render(<ItemCard data={mockBracelet} />);
    const paragraphElement = screen.getByTestId('paragraph-item-name');
    expect(paragraphElement.textContent).toBe('Green & White');
  });

  it('should render the price', () => {
    render(<ItemCard data={mockBracelet} />);
    const paragraphElement = screen.getByTestId('paragraph-item-price');
    expect(paragraphElement.textContent).toBe('£9.99');
  });
});
