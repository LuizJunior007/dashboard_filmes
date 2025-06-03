import { useEffect, useState } from "react";
import { getFullYear } from "../../utils/utils";
import { Toast, ToastBody } from "react-bootstrap";

type genre = {
    id: number;
    name: string;
}

export type MovieProps = {
    id: number | undefined;
    title: string;
    poster_path: string;
    backdrop_path: string;
    vote_average: number;
    overview: string;
    genres: genre[];
    release_date: string;
}

const Movie = ({ movie }: { movie: MovieProps }) => {

    const [ myfavorites, setmyFavorites ] = useState<MovieProps[]>(JSON.parse(localStorage.getItem('favorites') || '[]'));
    const [ favoriteId, setFavoriteId ] = useState<Number | undefined>(undefined);
    const [ toast, setToast ] = useState({
        show: false,
        msg: ''
    });
    
    useEffect(() => {

        const found = myfavorites.find((m) => m.id === movie.id);

        if(found){

            setFavoriteId(found.id);

        } else{

            setFavoriteId(undefined);
        }

    }, []);

    const handleAddFavorite = () => {

        const favorites: MovieProps[] = JSON.parse(localStorage.getItem('favorites') || '[]');
        setmyFavorites(favorites);

        const index = favorites.findIndex((m) => m.id === movie.id)

        if(index !== -1){

            favorites.splice(index, 1);
            setFavoriteId(undefined);
            setToast({
                show: true,
                msg: 'Removido dos favoritos'
            });

        } else{

            setFavoriteId(movie.id);
            favorites.unshift(movie);
            setToast({
                show: true,
                msg: 'Adicionado aos favoritos'
            });

        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
        
    }

    return(
        <>
            <div className="backdrop">
                <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="" />
                <div className="info mt-4">
                    <h2>{movie.title}</h2>

                    <div className="sinopse mt-4">
                        {movie.overview}
                    </div>

                    <div className="mt-4">
                        <div className="genres">
                            {movie.genres.map((g, i) => {
                                return <span key={i}>{g.name} {i + 1 !== movie.genres.length ? ' | ' : ''} </span>
                            })}
                        </div>

                        <div className="infos mt-4">
                            <span className="date"><i className="bi bi-calendar"></i> {getFullYear(movie.release_date)} | </span>
                            <span className="vote"><i className="bi bi-star-half"></i> {movie.vote_average.toFixed(1)}</span>
                            <span className="text-light"> | </span>
                            <span className="btnAddFavorite" onClick={ handleAddFavorite } title={`${favoriteId !== undefined ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}`}>
                                {
                                    favoriteId === movie.id
                                    ?
                                    <i className="bi bi-heart-fill text-danger"></i>
                                    :
                                    <i className="bi bi-heart text-danger"></i>
                                }
                            </span>
                        </div>
                    </div>
                </div>
                <div className="overlay-backdrop"></div>
            </div>
            <Toast className="bg-success text-light fw-bold" onClose={() => setToast({show: false, msg: '-'})} show={toast.show} delay={1000} autohide>
                <ToastBody className="text-center">
                    { toast.msg }
                </ToastBody>
            </Toast>
        </>
    );

}

export default Movie;