/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import NecklacesPage from '../../../pages/products/necklaces';
import { necklaces } from '../../../mocks/products';

describe('Necklaces Page', () => {
  it('should render necklaces page', () => {
    render(<NecklacesPage necklaces={necklaces} />);
    const sectionElement = screen.getByTestId('section-necklaces');
    expect(sectionElement).toBeInTheDocument();
  });

  it('should render two item cards', () => {
    render(<NecklacesPage necklaces={necklaces} />);
    const cardElements = screen.getAllByTestId('card-item');
    expect(cardElements.length).toBe(2);
  });
});
