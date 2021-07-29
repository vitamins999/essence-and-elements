/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import ProductsPage from '../../pages/products';
import { products } from '../../mocks/products';

describe('Products Page', () => {
  it('should render products page', () => {
    render(<ProductsPage products={products} />);
    const sectionElement = screen.getByTestId('section-products');
    expect(sectionElement).toBeInTheDocument();
  });

  it('should render two product cards', () => {
    render(<ProductsPage products={products} />);
    const cardElements = screen.getAllByTestId('card');
    expect(cardElements.length).toBe(2);
  });
});
