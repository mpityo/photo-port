import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('contact component', () => {
    it('renders', () => {
        render(<Contact />)
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<Contact />);
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('contact wordage', () => {
    it('displays contact in h1 tag', () =>{
        render(<Contact />);
        expect(screen.getByTestId('contact')).toHaveTextContent('Contact me');
    });

    it('displays submit on the button', () => {
        render(<Contact />);
        expect(screen.getByTestId('button')).toHaveTextContent('Submit');
    });
})