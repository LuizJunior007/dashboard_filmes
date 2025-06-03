import { useParams } from "react-router-dom";
import { apiKey, baseUrl, siteName } from "../../config";
import { useEffect, useState } from "react";
import Movie, { MovieProps } from "../../components/Movie";
import { Spinner } from "react-bootstrap";

const MoviePage = () => {

    const { id } = useParams();
    const [ movie, setMovie ] = useState<MovieProps | null>(null);

    document.title = movie?.title + ' | ' + siteName;

    const getMovie = () => {

        fetch(baseUrl + `/movie/${id}?language=pt-BR&api_key=${apiKey}`)
        .then(res => res.json())
        .then(res => 
            setMovie(res), 
        )
        .catch(err => console.log(err))

    }

    useEffect(() => {   

        getMovie();

    }, [id]);

    if (!movie){

        return(
            <Spinner animation="border" role="status" variant="light" className="mt-3">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        );
    }

    return (
        <>
            <Movie movie={movie} />
        </>
    );

}

export default MoviePage;