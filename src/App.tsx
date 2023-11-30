import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from './Component/Search/Search';
import Navbar from './Component/Navbar/Navbar';
import Movies from './Component/Movies/Movies';
import MovieType from './Interface/Movie';

function App() {

  const [allMovies, setAllMovies] = useState<MovieType[]>([]);

  const handleMoviesChange = (movies: MovieType[]) => {
    console.log('New movies:', movies);
    setAllMovies(movies);
  };
  
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Movies onMoviesChange={handleMoviesChange}/>} />
        <Route  path="/search" element={<Search movies={allMovies}/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
