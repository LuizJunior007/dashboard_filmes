import { Col, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MovieProps } from "../Movie";
import { getFullYear } from "../../utils/utils";

type MoviesProps = {
    movies: MovieProps[];
}

const Movies = ({ movies }: MoviesProps) => {

    if(movies.length === 0){

        return(
            <Spinner animation="border" role="status" variant="light" className="mt-3">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        );
    }

    return(

        <>
            <Row className="g-2 mt-3">
                { movies.map((m, i) => 
                    <Col xs="6" sm="6" md="4" lg="2" key={ i }>
                        <Link to={`/movie/${m.id}`} id={`link-movie-${i}`}>
                            <div className="card-movie" id="card-movie">
                                <img src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${m.poster_path}`} alt="poster" />
                                <div className="overlay"></div>
                                <div className="date">{getFullYear(m.release_date)}</div>
                                <div className="icon-play">
                                    <img src="/play.png" alt="botão play" />
                                </div>
                            </div>
                        </Link>
                    </Col>
                ) }
            </Row>
        </>

    );

}

export default Movies;