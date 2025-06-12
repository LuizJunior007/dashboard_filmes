import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MoviePage from './pages/MoviePage';
import 'nprogress/nprogress.css';
import RouteChangeTrack from './components/RouteChangeTrack';
import Favorites from './pages/Favorites';
import NotFound from './pages/NotFound';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      
      <BrowserRouter>
        <RouteChangeTrack />
        <Layout>
          <Routes>
            <Route path='/' Component={ Home } />
            <Route path='/movie/:id' Component={ MoviePage } />
            <Route path='/favorites' Component={ Favorites } />
            <Route path='*' Component={ NotFound } />
          </Routes>
        </Layout>
      </BrowserRouter>
      
  </StrictMode>,
)
