/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import BraceletProductPage from '../../../pages/products/bracelets/[item]';

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

describe('Item Page', () => {
  it('should render item page', () => {
    render(<BraceletProductPage itemData={mockBracelet} />);
    const sectionElement = screen.getByTestId('section-item');
    expect(sectionElement).toBeInTheDocument();
  });

  it('should render item name', () => {
    render(<BraceletProductPage itemData={mockBracelet} />);
    const headingElement = screen.getByTestId('heading-item-name');
    expect(headingElement.textContent).toBe('Green & White');
  });

  it('should render item price', () => {
    render(<BraceletProductPage itemData={mockBracelet} />);
    const spanElement = screen.getByTestId('span-item-price');
    expect(spanElement.textContent).toBe('9.99');
  });

  it('should render item description', () => {
    render(<BraceletProductPage itemData={mockBracelet} />);
    const paragraphElement = screen.getByTestId('paragraph-item-description');
    expect(paragraphElement.textContent).toBe(
      'A beautiful green and white Vitamin D bracelet. The darker the white beads glow, the greater the UV index.'
    );
  });

  it('should render item bullets', () => {
    render(<BraceletProductPage itemData={mockBracelet} />);
    const divElement = screen.getAllByTestId('div-item-bullet');
    expect(divElement.length).toBe(3);
  });

  it('should render item image', () => {
    render(<BraceletProductPage itemData={mockBracelet} />);
    const imageElement = screen.getByTestId('image-item');
    expect(imageElement).toHaveAttribute('alt', 'Green & White');
  });
});
