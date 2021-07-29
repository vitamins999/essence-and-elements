/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import BraceletsPage from '../../../pages/products/bracelets';
import { bracelets } from '../../../mocks/products';

describe('Bracelets Page', () => {
  it('should render bracelets page', () => {
    render(<BraceletsPage bracelets={bracelets} />);
    const sectionElement = screen.getByTestId('section-bracelets');
    expect(sectionElement).toBeInTheDocument();
  });

  it('should render two item cards', () => {
    render(<BraceletsPage bracelets={bracelets} />);
    const cardElements = screen.getAllByTestId('card-item');
    expect(cardElements.length).toBe(2);
  });
});
