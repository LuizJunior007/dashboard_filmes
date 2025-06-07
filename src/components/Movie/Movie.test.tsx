import { fireEvent, render } from "@testing-library/react";
import Movie from ".";

describe('Movie component', () => {

    const mockProps = {
        id: 1,
        title: 'Filme',
        poster_path: 'img/poster.png',
        backdrop_path: 'img/backdrop.png',
        vote_average: 8.1,
        overview: 'Sinopse',
        genres: [],
        release_date: '08/02/2025'
    }

    beforeEach(() => {
        localStorage.clear();
    })

    it('should render movie component', ()  => {

        render( <Movie movie={ mockProps } />);
        const backdrop = document.querySelector('.backdrop');
        const img = document.querySelector('img');
        const title = document.getElementById('movieTitle');
        const overview = document.getElementById('overview');
        const genres = document.getElementById('genres');
        const date = document.getElementById('date');

        expect(backdrop).toBeInTheDocument();
        expect(img).toBeInTheDocument();
        expect(title).toBeInTheDocument();
        expect(overview).toBeInTheDocument();
        expect(genres).toBeInTheDocument();
        expect(date).toBeInTheDocument();

    });

    it('Should add favorites in localstorage', () => {

        render(<Movie movie={ mockProps } />);

        const btn = document.getElementById('btnAddFavorite');
        expect(btn).toBeInTheDocument();

        // Adiciona
        if(btn){

            fireEvent.click(btn);
        }

        const storedFavorite = JSON.parse(localStorage.getItem('favorites') || '[]');
        expect(storedFavorite).toHaveLength(1);

        // Remove
        if(btn){

            fireEvent.click(btn);
        }

        const updatedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        expect(updatedFavorites).toHaveLength(0);
    })
    
});