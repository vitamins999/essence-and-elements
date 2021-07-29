/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import ReaderCard from '../../components/ReaderCard';

const mockReader = {
  name: 'Gloria McSpiggy',
  shortDetails:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, ipsa dolores voluptates fugit repellendus molestias dignissimos. Dolores molestiae eos odio!',
  longDetails:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur error, voluptate dignissimos esse culpa necessitatibus, veniam exercitationem vero repellendus eveniet illo numquam? Error adipisci, tenetur veniam repellendus mollitia molestiae, praesentium sed optio quod fuga aliquid cumque explicabo modi temporibus nobis laborum accusamus voluptatem autem incidunt nostrum voluptates hic? Nesciunt eum, velit nihil eligendi dolore magni aspernatur aliquid. Ullam, dicta itaque!',
  imagePath: '/mcspiggy-gloria.png',
  reiki: true,
  tarot: true,
  crystalHealing: false,
};

describe('Reader Carad Component', () => {
  it('should render the image', () => {
    render(<ReaderCard data={mockReader} />);
    const imageElement = screen.getByTestId('image');
    expect(imageElement).toHaveAttribute('alt', 'Gloria McSpiggy');
  });

  it('should render the name', () => {
    render(<ReaderCard data={mockReader} />);
    const headingElement = screen.getByTestId('heading-name');
    expect(headingElement.textContent).toBe('Gloria McSpiggy');
  });

  it('should render the short details', () => {
    render(<ReaderCard data={mockReader} />);
    const paragraphElement = screen.getByTestId('paragraph-short-details');
    expect(paragraphElement.textContent).toBe(
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, ipsa dolores voluptates fugit repellendus molestias dignissimos. Dolores molestiae eos odio!'
    );
  });

  it('should render the long details', () => {
    render(<ReaderCard data={mockReader} />);
    const paragraphElement = screen.getByTestId('paragraph-long-details');
    expect(paragraphElement.textContent).toBe(
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur error, voluptate dignissimos esse culpa necessitatibus, veniam exercitationem vero repellendus eveniet illo numquam? Error adipisci, tenetur veniam repellendus mollitia molestiae, praesentium sed optio quod fuga aliquid cumque explicabo modi temporibus nobis laborum accusamus voluptatem autem incidunt nostrum voluptates hic? Nesciunt eum, velit nihil eligendi dolore magni aspernatur aliquid. Ullam, dicta itaque!'
    );
  });

  it('should render the tarot link', () => {
    render(<ReaderCard data={mockReader} tag={true} />);
    const linkElement = screen.getByTestId('link-tarot');
    expect(linkElement).toBeInTheDocument();
  });

  it('should render the reiki link', () => {
    render(<ReaderCard data={mockReader} tag={true} />);
    const linkElement = screen.getByTestId('link-reiki');
    expect(linkElement).toBeInTheDocument();
  });

  it('should not render the crystal healing link', () => {
    render(<ReaderCard data={mockReader} tag={true} />);
    const linkElement = screen.queryByTestId('link-crystal-healing');
    expect(linkElement).not.toBeInTheDocument();
  });
});
