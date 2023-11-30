import React, { useState } from 'react';
import MovieType from '../../Interface/Movie';
import MovieList from '../MovieList/MovieList';
import {DebounceInput} from 'react-debounce-input';
import Styles from './Search.module.scss';

const Search = (props: { movies: MovieType[] }) => {
  const { movies } = props;
  console.log('Received movies:', props.movies);
  
  const [filteredMovies, filterMovies] = useState(movies);
  const searchBook = (e: any)=> {
    const moviesfiltered = movies.filter((movie: MovieType)=> movie.stdTitle.toLowerCase().includes(e.target.value));
    filterMovies(moviesfiltered);
  }

  
  return (
    <>
        <h2 className={Styles.search__title}>Search Movies</h2>
          <DebounceInput debounceTimeout={1000} className={Styles.search__input} onChange={searchBook} type="text" placeholder='search by movie name..'></DebounceInput>
          <div className={Styles.search__movieList}>
          {filteredMovies.map((movie: MovieType) => (
            <MovieList key={movie.stdId} movie={movie}/>
          ))}
          </div>
    </>
  );

}

export default Search;