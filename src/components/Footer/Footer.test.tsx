import Footer from ".";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Footer component', () => {

    it('Should render footer component', () => {

        render(<Footer />);
        const el = document.querySelector('footer');

        expect(el).toBeInTheDocument();
    
    })

})