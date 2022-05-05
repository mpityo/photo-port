import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

afterEach(cleanup);

const mockToggleModal = jest.fn();
const currentPhoto = {
    name: 'Grocery aisle',
    category: 'commercial',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
  };

describe('modal component', () => {
    it('renders', () => {
        render(<Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />);
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />);
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('click event', () => {
    it('calls onClose handler', () => {
        render(<Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />);
        fireEvent.click(screen.getByText('Close this modal'));
        expect(mockToggleModal).toHaveBeenCalledTimes(1);
    })
})