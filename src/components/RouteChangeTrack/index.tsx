import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Nprogress from 'nprogress';

const RouteChangeTrack = () => {

    const location = useLocation();
    Nprogress.configure({ showSpinner: false });

    useEffect(() => {
        
        Nprogress.start();

        Nprogress.done();

    }, [location]);

    return null;
}

export default RouteChangeTrack;