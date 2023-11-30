import React, { useEffect, useReducer } from 'react';
import Styles from './Movies.module.scss';
import MovieList from '../MovieList/MovieList';
import CreateMovie from '../CreateMovie/CreateMovie';
import MovieType from '../../Interface/Movie';
import moviesReducer, { ADD_MOVIE, EDIT_MOVIE, DELETE_MOVIE, INITIALIZE_MOVIES } from '../../Reducer/moviesReducer';


const Movies = (props: any ) => {
    const {onMoviesChange} = props
   
    const [newMovies, dispatch] = useReducer(moviesReducer, []);

  useEffect(() => {
    const movies: MovieType[] = [
        {
            stdTitle: 'Bad Boys for Life',
            stdOpeningText: 'Bad Boys for Life is a 2020 American buddy cop action comedy film directed by Adil & Bilall. It is the sequel to Bad Boys II (2003) and the third installment in the Bad Boys franchise. Will Smith, Martin Lawrence, Joe Pantoliano and Theresa Randle reprise their roles in the film and are joined by Paola Núñez, Vanessa Hudgens, Jacob Scipio, Alexander Ludwig, Charles Melton, Kate del Castillo and Nicky Jam. The film was produced by Smith, Jerry Bruckheimer, and Doug Belgrad, with a screenplay written by Chris Bremner, Peter Craig and Joe Carnahan. In Bad Boys for Life, Miami detectives Mike Lowrey and Marcus Burnett investigate a string of murders tied to Lowrey s troubled past.',
            stdReleaseDate: '11-11-2020',
            stdImg: 'https://upload.wikimedia.org/wikipedia/en/9/90/Bad_Boys_for_Life_poster.jpg',
            stdGenre: 'Action, Adventure',
            stdTime: '134 min',
            stdCategory: 'Watched',
            stdId:1,
            
        },
        {
            stdTitle: 'Harry Potter and the Sorcerers Stone',
            stdOpeningText: 'Harry Potter and the Philosopher Stone is a 2001 fantasy film directed by Chris Columbus and produced by David Heyman, from a screenplay by Steve Kloves, based on the 1997 novel of the same name by J. K. Rowling. It is the first instalment in the Harry Potter film series. The film stars Daniel Radcliffe as Harry Potter, with Rupert Grint as Ron Weasley, and Emma Watson as Hermione Granger. Its story follows Harry first year at Hogwarts School of Witchcraft and Wizardry as he discovers that he is a famous wizard and begins his formal wizarding education.',
            stdReleaseDate: '11-11-2001',
            stdImg: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Harry_Potter_and_the_Philosopher%27s_Stone_banner.jpg/320px-Harry_Potter_and_the_Philosopher%27s_Stone_banner.jpg',
            stdGenre: 'Action, Adventure, Sci-Fi',
            stdTime: '124 min',
            stdCategory: 'Currently Watching',
            stdId:2,
            
        },
        {
            stdTitle: 'The Gray Man',
            stdOpeningText: 'The Gray Man is a 2022 American action thriller film directed by Anthony and Joe Russo, from a screenplay the latter co-wrote with Christopher Markus and Stephen McFeely, based on the 2009 novel of the same name by Mark Greaney. The film stars Ryan Gosling, Chris Evans, Ana de Armas, Jessica Henwick, Regé-Jean Page, Wagner Moura, Julia Butters, Dhanush, Alfre Woodard, and Billy Bob Thornton. Produced by the Russo brothers company, AGBO, it is the first film in a franchise based upon Greaneys Gray Man novels. The plot centers on CIA agent Sierra Six, who is on the run from sociopathic ex-CIA agent and mercenary Lloyd Hansen upon discovering corrupt secrets about his superior.',
            stdReleaseDate: '11-11-2022',
            stdImg: 'https://upload.wikimedia.org/wikipedia/en/5/59/The_Gray_Man_poster.png',
            stdGenre: 'Action, Adventure, Drama',
            stdTime: '100 min',
            stdCategory: 'Want to Watch',
            stdId:3,
            
        },
    ]
    if (newMovies.length === 0) {
        dispatch({ type: INITIALIZE_MOVIES, payload: movies });
      }
    }, [newMovies]);
  
    useEffect(() => {
      onMoviesChange(newMovies);
    }, [newMovies, onMoviesChange]);


    const handleSubmitMovie = (movie:any) => {
        const maxId = newMovies.reduce((accumulator: number, currentMovie: MovieType) => (currentMovie.stdId > accumulator ? currentMovie.stdId : accumulator), 0);

        dispatch({ type: ADD_MOVIE, payload: { ...movie, stdId: maxId + 1 } });
      }

    const handleEditMovie = (editedMovie: MovieType) => {
        dispatch({ type: EDIT_MOVIE, payload: editedMovie });
      }
    const handleDeleteMovie = (id:any) => {
        dispatch({ type: DELETE_MOVIE, payload: id });
       
      }
    const handleCategoryChange = (movieId: any, newCategory: string) => {
        dispatch({ type: EDIT_MOVIE, payload: { stdId: movieId, stdCategory: newCategory } });
      }; 

    // Separate movies into categories
    const watchedMovies = newMovies.filter((movie: MovieType) => movie.stdCategory === 'Watched');
    const wantToWatchMovies = newMovies.filter((movie: MovieType) => movie.stdCategory === 'Want to Watch');
    const currentlyWatchingMovies = newMovies.filter((movie: MovieType) => movie.stdCategory === 'Currently Watching');
 
      
    return (
        <>
        <div>
          <h1>Watched</h1>
          <div className={Styles.MoviesCards}>
          {watchedMovies.length> 0 ? (watchedMovies.map((movie: MovieType) => (
            <MovieList key={movie.stdId} movie={movie} handleEdit={handleEditMovie}  handleCategoryChange={handleCategoryChange}  handleDelete={handleDeleteMovie} />
          ))) : (<h3>There is no Watched movies yet</h3> )}
        </div>
        </div>
        <div>
          <h1>Want to Watch</h1>
          <div className={Styles.MoviesCards}>
          { wantToWatchMovies.length> 0 ? (wantToWatchMovies.map((movie: MovieType) => (
            <MovieList key={movie.stdId} movie={movie} handleEdit={handleEditMovie}  handleCategoryChange={handleCategoryChange}  handleDelete={handleDeleteMovie} />
          ))) : (<h3>There is no movies you want to watch yet</h3>) }
        </div>
        </div>

        <div>
          <h1>Currently Watching</h1>
          <div className={Styles.MoviesCards}>
          {currentlyWatchingMovies.length> 0 ? (currentlyWatchingMovies.map((movie: MovieType) => (
            <MovieList key={movie.stdId} movie={movie} handleEdit={handleEditMovie}  handleCategoryChange={handleCategoryChange} handleDelete={handleDeleteMovie} />
          ))) : (<h3>There is no movies you are Currently Watching</h3>) }
        </div>
        </div>
             <CreateMovie handleSubmit={handleSubmitMovie}/>
             </>
    );
}
export default Movies;