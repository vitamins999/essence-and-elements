/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import CrystalHealingPage from '../../../pages/services/crystal-healing';
import { readers } from '../../../mocks/readers';

describe('Crystal Healing Page', () => {
  it('should render crystal healing page', () => {
    render(<CrystalHealingPage readers={readers} />);
    const sectionElement = screen.getByTestId('section-crystal-healing');
    expect(sectionElement).toBeInTheDocument();
  });

  it('should not render practitioner text', () => {
    render(<CrystalHealingPage readers={[]} />);
    const paragraphElement = screen.queryByRole('heading', {
      name: 'Our Crystal Healing Practitioners',
    });
    expect(paragraphElement).not.toBeInTheDocument();
  });

  it('should render "no practitioner" text', () => {
    render(<CrystalHealingPage readers={[]} />);
    const paragraphElement = screen.getByText(
      'Sorry! We currently have no practitioners offering this service!'
    );
    expect(paragraphElement).toBeInTheDocument();
  });

  it('should render no reader cards', () => {
    render(<CrystalHealingPage readers={readers} />);
    const cardElements = screen.queryAllByTestId('card-reader');
    expect(cardElements.length).toBe(0);
  });

  it('should not render the question form as no one offers crystal healing', () => {
    render(<CrystalHealingPage readers={readers} />);
    const formElement = screen.queryByRole('form');
    expect(formElement).not.toBeInTheDocument();
  });
});
