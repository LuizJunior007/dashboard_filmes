import { fireEvent, render } from "@testing-library/react"
import { Navbar } from "react-bootstrap"
import { BrowserRouter } from "react-router-dom";

describe('Navbar component', () => {

    it('Should render navbar component', () => {
        
        render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        );  

        const logoLink = document.getElementById('logo-link');

        if(logoLink){

            fireEvent.click(logoLink);

        }
    })

})