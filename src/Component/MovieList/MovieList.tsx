import React from 'react';
import Styles from './MovieList.module.scss';
import MovieType from '../../Interface/Movie';

const MovieList = (props: any) => {
    const {movie , handleDelete } = props;
    const handleMovieDelete = () => {
        handleDelete(movie.stdId);
        console.log('ooo bravo',movie.stdId);
        
    };
return (
    <>
<div className={Styles.movie_card}>
  <div className={Styles.movie_card__section}>
    <div className={Styles.movie_card__section__header}>
      <img className={Styles.movie_card__section__header__image} src={movie.stdImg} alt=''/>
      <h1>{movie.stdTitle}</h1>
      <h4>{movie.stdReleaseDate}</h4>
      <span className={Styles.movie_card__section__header__minutes}>134 min</span>
      <p className={Styles.movie_card__section__header__type}>Action, Adventure, Sci-Fi</p>
    </div>
    <div className={Styles.movie_card__section__desc}>
      <p className={Styles.movie_card__section__desc__text}>
        {movie.stdOpeningText} 
      </p>

    </div>
  </div>
  <button className={Styles.movie_card__button} onClick={handleMovieDelete}> Delete Movie </button>
</div>
    </>
);
}
export default MovieList;

