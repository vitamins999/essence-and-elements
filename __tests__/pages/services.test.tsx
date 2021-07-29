/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import ServicesPage from '../../pages/services';
import { services } from '../../mocks/services';

describe('Services Page', () => {
  it('should render services page', () => {
    render(<ServicesPage services={services} />);
    const sectionElement = screen.getByTestId('section-services');
    expect(sectionElement).toBeInTheDocument();
  });

  it('should render three service cards', () => {
    render(<ServicesPage services={services} />);
    const cardElements = screen.getAllByTestId('card');
    expect(cardElements.length).toBe(3);
  });
});
