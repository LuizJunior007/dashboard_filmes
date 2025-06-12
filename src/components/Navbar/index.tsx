import { Container, FormControl, Nav, Navbar, NavbarCollapse, NavbarToggle } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { apiKey, baseUrl, siteName } from "../../config";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { MovieProps } from "../Movie";

const Appbar = () => {

    const [ query, setQuery ] = useState('');
    const [ movies, setMovies ] = useState<MovieProps[]>([]);
    const [debouncedQuery] = useDebounce(query, 500);
    const location = useLocation();

    useEffect(() => {

        if(debouncedQuery === ''){

            return setMovies([]);

        } 

        fetch(baseUrl + `/search/movie?query=${debouncedQuery}&language=pt-BR&api_key=${apiKey}`)
        .then(res => res.json())
        .then(res => setMovies(res.results))
        .catch(err => console.log(err))

    }, [debouncedQuery]);
    
    useEffect(() => {

        setQuery('');
        setMovies([]);

    }, [location]);

    return(
        <header className="sticky-top">
            <Navbar className="navbar-dark shadow" expand="md">
                <Container>
                    <Link to="/" className="navbar-brand" id="logo-link">
                        <div className="logo">
                            <img src="/logo.png" alt="logo" className="me-2" />
                            { siteName }
                        </div>
                    </Link>

                    <NavbarToggle aria-controls="responsive-navbar-nav" />

                    <NavbarCollapse id="responsive-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <div className="nav-link">
                                <div className="posters">
                                    <FormControl type="text" placeholder="Buscar filme" value={query} onChange={(e) => setQuery(e.target.value)} />
                                        {movies.length > 0 && 
                                            <div className="posters-list">
                                                {movies.map((m, i) => 
                                                    
                                                    <Link to={`/movie/${m.id}`} key={i}>
                                                        {m.title}
                                                    </Link>
                                                    
                                                )}
                                            </div>
                                        }
                                </div>
                            </div>

                            
                            <Link to={`/favorites`} className="nav-link">Favoritos</Link>
                            
                        </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Appbar;