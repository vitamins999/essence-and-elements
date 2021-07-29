/**
 * @jest-environment jsdom
 */

import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TarotPage from '../../../pages/services/tarot';
import { readers } from '../../../mocks/readers';

const changeInputBoxValue = (placeholderText, newValue) => {
  const inputElement = screen.getByPlaceholderText(placeholderText);
  fireEvent.change(inputElement, {
    target: {
      value: newValue,
    },
  });

  return inputElement;
};

describe('Tarot Page', () => {
  it('should render tarot page', () => {
    render(<TarotPage readers={readers} />);
    const sectionElement = screen.getByTestId('section-tarot');
    expect(sectionElement).toBeInTheDocument();
  });

  it('should render practitioner text', () => {
    render(<TarotPage readers={readers} />);
    const paragraphElement = screen.getByRole('heading', {
      name: /Our Tarot Practitioners/i,
    });
    expect(paragraphElement).toBeInTheDocument();
  });

  it('should not render "no practitioner" text', () => {
    render(<TarotPage readers={readers} />);
    const paragraphElement = screen.queryByRole('paragraph', {
      name: /Sorry! We currently have no practitioners offering this service!/i,
    });
    expect(paragraphElement).not.toBeInTheDocument();
  });

  it('should render two reader cards', () => {
    render(<TarotPage readers={readers} />);
    const cardElements = screen.getAllByTestId('card-reader');
    expect(cardElements.length).toBe(2);
  });

  it('should be able to type in name input', () => {
    render(<TarotPage readers={readers} />);
    const inputElement = changeInputBoxValue(
      'eg. Jim Morrison',
      'Jim Morrison'
    );
    expect(inputElement.value).toBe('Jim Morrison');
  });

  it('should be able to type in email input', () => {
    render(<TarotPage readers={readers} />);
    const inputElement = changeInputBoxValue(
      'eg. jim.morrison@company.com',
      'jmorrison@example.com'
    );
    expect(inputElement.value).toBe('jmorrison@example.com');
  });

  it('should be able to type in question input', () => {
    render(<TarotPage readers={readers} />);
    const inputElement = changeInputBoxValue(
      'My question is...',
      'Come on baby, light my fire'
    );
    expect(inputElement.value).toBe('Come on baby, light my fire');
  });

  it('should allow reader to be selected in combobox', () => {
    render(<TarotPage readers={readers} />);
    const selectElement = screen.getByRole('combobox');
    userEvent.selectOptions(selectElement, 'Gloria McSpiggy');
    const optionElementGloria = screen.getByRole('option', {
      name: 'Gloria McSpiggy',
    });
    const optionElementDavina = screen.getByRole('option', {
      name: 'Davina Sperglord',
    });

    expect(optionElementGloria.selected).toBe(true);
    expect(optionElementDavina.selected).toBe(false);
  });
});
