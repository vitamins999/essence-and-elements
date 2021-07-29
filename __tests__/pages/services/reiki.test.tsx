/**
 * @jest-environment jsdom
 */

import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReikiPage from '../../../pages/services/reiki';
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

describe('Reiki Page', () => {
  it('should render reiki page', () => {
    render(<ReikiPage readers={readers} />);
    const sectionElement = screen.getByTestId('section-reiki');
    expect(sectionElement).toBeInTheDocument();
  });

  it('should render practitioner text', () => {
    render(<ReikiPage readers={readers} />);
    const paragraphElement = screen.getByRole('heading', {
      name: /Our Reiki Practitioners/i,
    });
    expect(paragraphElement).toBeInTheDocument();
  });

  it('should not render "no practitioner" text', () => {
    render(<ReikiPage readers={readers} />);
    const paragraphElement = screen.queryByRole('paragraph', {
      name: /Sorry! We currently have no practitioners offering this service!/i,
    });
    expect(paragraphElement).not.toBeInTheDocument();
  });

  it('should render one reader card', () => {
    render(<ReikiPage readers={readers} />);
    const cardElements = screen.getAllByTestId('card-reader');
    expect(cardElements.length).toBe(1);
  });

  it('should be able to type in name input', () => {
    render(<ReikiPage readers={readers} />);
    const inputElement = changeInputBoxValue(
      'eg. Jim Morrison',
      'Jim Morrison'
    );
    expect(inputElement.value).toBe('Jim Morrison');
  });

  it('should be able to type in email input', () => {
    render(<ReikiPage readers={readers} />);
    const inputElement = changeInputBoxValue(
      'eg. jim.morrison@company.com',
      'jmorrison@example.com'
    );
    expect(inputElement.value).toBe('jmorrison@example.com');
  });

  it('should be able to type in question input', () => {
    render(<ReikiPage readers={readers} />);
    const inputElement = changeInputBoxValue(
      'My question is...',
      'Come on baby, light my fire'
    );
    expect(inputElement.value).toBe('Come on baby, light my fire');
  });

  it('should allow reader to be selected in combobox', () => {
    render(<ReikiPage readers={readers} />);
    const selectElement = screen.getByRole('combobox');
    userEvent.selectOptions(selectElement, 'Davina Sperglord');

    const optionElementDavina = screen.getByRole('option', {
      name: 'Davina Sperglord',
    });

    expect(optionElementDavina.selected).toBe(true);
  });
});
