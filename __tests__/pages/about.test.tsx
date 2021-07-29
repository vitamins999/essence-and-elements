/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import AboutPage from '../../pages/about';
import { readers } from '../../mocks/readers';

describe('About Page', () => {
  it('should render about page', () => {
    render(<AboutPage readers={readers} />);
    const sectionElement = screen.getByTestId('section-about');
    expect(sectionElement).toBeInTheDocument();
  });

  it('should render two reader cards', () => {
    render(<AboutPage readers={readers} />);
    const cardElements = screen.getAllByTestId('card-reader');
    expect(cardElements.length).toBe(2);
  });
});
