import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PhotoList from '..';

afterEach(cleanup);

describe('PhotoList is rendering', () => {
    it('renders', () => {
        render(<PhotoList/>)
    });

    it('renders the photos', () => {
        const { asFragment } = render(<PhotoList/>);
        expect(asFragment()).toMatchSnapshot();
    })
})