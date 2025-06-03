import { render } from "@testing-library/react"
import Movie from "."

describe('Movie component', () => {

    it('Should render movie component', () => {

        const movie = {
            id: 1,
            title: 'Batman',
            poster_path: '/img.jpg',
            backdrop_path: '/img.jpg',
            vote_average: 8.1,
            overview: 'Sinopse',
            genres: [{0: 'Ação'}],
            release_date: '2025'

        }

        render(<Movie movie={ movie } />)

    })

})