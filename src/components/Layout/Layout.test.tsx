import { render } from "@testing-library/react"
import Layout from "."
import Appbar from "../Navbar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

describe('Layout component', () => {

    it('Should render layout component', () => {

        render(
            <BrowserRouter>
                <Layout>

                <Appbar />

                <div>
                    Hello world
                </div>
                </Layout>
            </BrowserRouter>
        );

        const header = document.querySelector('header');
        const el = document.querySelector('div');

        expect(el).toBeInTheDocument();
        expect(header).toBeInTheDocument();
    })

})