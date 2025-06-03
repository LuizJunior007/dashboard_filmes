import { useEffect, useState } from "react";
import { apiKey, baseUrl, siteName } from "../../config";
import Movies from "../../components/Movies";
import { MovieProps } from "../../components/Movie";
import { Spinner } from "react-bootstrap";

const Home = () => {

    const [ movies, setMovies ] = useState<MovieProps[]>([]);
    const [ page, setPage ] = useState(1);
    const [ loading, setLoading ] = useState(false);

    document.title = 'Home | ' + siteName;

    const loadMoreMovies = () => {

        setPage(prev => prev + 1);

    }

    useEffect(() => {

        setLoading(true);

        fetch(baseUrl + `/movie/popular?language=pt-BR&page=${page}&api_key=${apiKey}`)
        .then(res => res.json())
        .then(res => {

            const results = res.results.slice(0, 18);

            setMovies(prev => (page === 1 ? results : [...prev, ...results]))
            setLoading(false)
        }
            
        )
        .catch(err => console.log(err))

    }, [page]);

    return(

        <>
            <h1>Populares</h1>
            <Movies movies={ movies } />
            <div className="text-center mt-5">
                <button type="button" className="btn btn-danger" title="Carregar mais" onClick={loadMoreMovies}>
                    {
                        loading
                        ? 
                            <Spinner variant="light" size="sm">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        :
                            <i className="bi bi-arrow-clockwise"></i>
                    }
                </button>
            </div>
        </>

    );
            
}

export default Home;