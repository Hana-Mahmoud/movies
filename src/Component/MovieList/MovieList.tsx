import React, { useState } from 'react';
import Styles from './MovieList.module.scss';

const MovieList = (props: any) => {
  const { movie, handleDelete, handleEdit, handleCategoryChange } = props;
  const [isEditing, setEditing] = useState(false);
  const [editedMovie, setEditedMovie] = useState({ ...movie });
  const [newCategory, setNewCategory] = useState('');

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    handleEdit(editedMovie);

    setEditing(false);
  };

  const handleCancelClick = () => {
    setEditedMovie({ ...movie });
    setEditing(false);
  };

  const handleInputChange = (e: any) => {
    setEditedMovie({
      ...editedMovie,
      [e.target.name]: e.target.value,
    });
  };

  const handleMovieDelete = () => {
    handleDelete(movie.stdId);
  };

  const handleCategory = (e: any) => {
    const selectedCategory = e.target.value;
    setNewCategory(selectedCategory);
    handleCategoryChange(movie.stdId, selectedCategory);
  };
  
  return (
    <>
      <div className={Styles.movie_card}>
        <div className={Styles.movie_card__section}>
          <div className={Styles.movie_card__section__header}>
            <img className={Styles.movie_card__section__header__image} src={editedMovie.stdImg} alt='' />
            <h1>
              {isEditing ? (
                <input
                  type="text"
                  name="stdTitle"
                  value={editedMovie.stdTitle}
                  onChange={handleInputChange}
                />
              ) : (
                editedMovie.stdTitle
              )}
            </h1>
            <h4>
              {isEditing ? (
                <input
                  type="text"
                  name="stdReleaseDate"
                  value={editedMovie.stdReleaseDate}
                  onChange={handleInputChange}
                />
              ) : (
                editedMovie.stdReleaseDate
              )}
            </h4>
            <span className={Styles.movie_card__section__header__minutes}>
              {isEditing ? (
                <input
                  type="text"
                  name="stdTime"
                  value={editedMovie.stdTime}
                  onChange={handleInputChange}
                />
              ) : (
                editedMovie.stdTime
              )}
            </span>
            <p className={Styles.movie_card__section__header__type}>
              {isEditing ? (
                <input
                  type="text"
                  name="stdGenre"
                  value={editedMovie.stdGenre}
                  onChange={handleInputChange}
                />
              ) : (
                editedMovie.stdGenre
              )}
            </p>
          </div>
          <div className={Styles.movie_card__section__desc}>
            {isEditing ? (
              <textarea
                className={Styles.movie_card__section__desc__text}
                name="stdOpeningText"
                value={editedMovie.stdOpeningText}
                onChange={handleInputChange}
              />
            ) : (
              <p className={Styles.movie_card__section__desc__text}>{editedMovie.stdOpeningText}</p>
            )}
          </div>
        </div>
        <div className={Styles.movie_card__category}>
        <select value={newCategory} onChange={handleCategory} className={Styles.movie_card__category__select}>
          <option value="" disabled>
            Move to other category...
          </option>
          <option value="Watched">Watched</option>
          <option value="Want to Watch">Want to Watch</option>
          <option value="Currently Watching">Currently Watching</option>
        </select>
        </div>
        <div>
          {isEditing ? (
            <div>
              <button className={Styles.movie_card__button__edit} onClick={handleSaveClick}>
                Save
              </button>
              <button className={Styles.movie_card__button__edit} onClick={handleCancelClick}>
                Cancel
              </button>
            </div>
          ) : (
            <button className={Styles.movie_card__button__edit} onClick={handleEditClick}>
              Edit Movie
            </button>
          )}
        </div>
        <button className={Styles.movie_card__button} onClick={handleMovieDelete}>
          Delete Movie
        </button>
      </div>
    </>
  );
};

export default MovieList;