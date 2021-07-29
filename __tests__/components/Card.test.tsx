/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import Card from '../../components/Card';

const mockService = {
  name: 'Tarot',
  text: 'Mystical Tarot readings help you to gain insight into the past, the present or the future, and can reveal the innermost truths of your higher self.',
  imagePath: '/tarot.jpeg',
  category: 'services',
  subcategory: 'tarot',
};

describe('Card Component', () => {
  it('should render the image', () => {
    render(<Card data={mockService} index={0} />);
    const imageElement = screen.getByTestId('image-left');
    expect(imageElement).toHaveAttribute('alt', 'Tarot');
  });

  it('should render the name', () => {
    render(<Card data={mockService} index={0} />);
    const headingElement = screen.getByRole('heading', { name: 'Tarot' });
    expect(headingElement).toBeInTheDocument();
  });

  it('should render the description', () => {
    render(<Card data={mockService} index={0} />);
    const paragraphElement = screen.getByText(
      'Mystical Tarot readings help you to gain insight into the past, the present or the future, and can reveal the innermost truths of your higher self.'
    );
    expect(paragraphElement).toBeInTheDocument();
  });

  it('should render the image on left if even index', () => {
    render(<Card data={mockService} index={0} />);
    const imageElement = screen.getByTestId('image-left');
    expect(imageElement).toHaveClass('rounded-t-md');
  });

  it('should render the image on right if odd index', () => {
    render(<Card data={mockService} index={1} />);
    const imageElement = screen.getByTestId('image-right');
    expect(imageElement).toHaveClass('rounded-b-md');
  });
});
