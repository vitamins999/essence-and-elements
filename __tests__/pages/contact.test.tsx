/**
 * @jest-environment jsdom
 */

import { render, screen, fireEvent } from '@testing-library/react';
import ContactPage from '../../pages/contact';

const changeInputBoxValue = (placeholderText, newValue) => {
  const inputElement = screen.getByPlaceholderText(placeholderText);
  fireEvent.change(inputElement, {
    target: {
      value: newValue,
    },
  });

  return inputElement;
};

describe('Contact Page', () => {
  it('should render contact page', () => {
    render(<ContactPage />);
    const sectionElement = screen.getByTestId('section-contact');
    expect(sectionElement).toBeInTheDocument();
  });

  it('should be able to type in name input', () => {
    render(<ContactPage />);
    const inputElement = changeInputBoxValue(
      'eg. Jim Morrison',
      'Jim Morrison'
    );
    expect(inputElement.value).toBe('Jim Morrison');
  });

  it('should be able to type in email input', () => {
    render(<ContactPage />);
    const inputElement = changeInputBoxValue(
      'eg. jim.morrison@company.com',
      'jmorrison@example.com'
    );
    expect(inputElement.value).toBe('jmorrison@example.com');
  });

  it('should be able to type in message input', () => {
    render(<ContactPage />);
    const inputElement = changeInputBoxValue(
      'Message',
      'Come on baby, light my fire'
    );
    expect(inputElement.value).toBe('Come on baby, light my fire');
  });
});
