import { fireEvent, render } from "@testing-library/react";
import Movies from ".";
import { BrowserRouter } from "react-router-dom";

describe('Movies component', () => {

    it('Should render movies component and click in card, go to movie page', () => {

        const moviesProps = [
            {
                id: 1,
                title: 'Vingadores',
                poster_path: '/img.jpg',
                backdrop_path: '/img.jpg',
                vote_average: 9.0,
                overview: 'sinopse',
                genres: [],
                release_date: '08/06/2025'
            }
        ];

        render(
            <BrowserRouter>
                <Movies movies={ moviesProps } />
            </BrowserRouter>
        );

        const movieEl = document.getElementById('card-movie');
        expect(movieEl).toBeInTheDocument();

        moviesProps.forEach((i) => {

            const movieLink = document.getElementById(`link-movie-${i}`);
            expect(movieLink).toBeInTheDocument();

            if(movieLink){

                fireEvent.click(movieLink);
            }

        });
        
        

    });

})