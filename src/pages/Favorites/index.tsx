import { useEffect, useState } from "react";
import Movies from "../../components/Movies";
import { MovieProps } from "../../components/Movie";

const Favorites = () => {

    const [ movies, setMovies ] = useState<MovieProps[]>([]);

    useEffect(() => {

        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

        setMovies(favorites);

    }, []);

    return(
        <>
            <h1>Favoritos</h1>
            <Movies movies={ movies } />
        </>
    );


}

export default Favorites;