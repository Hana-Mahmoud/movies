import React, { useState } from 'react';
import Styles from './CreateMovie.module.scss';
import MovieType from '../../Interface/Movie';

const CreateMovie = (props:any) => {
    const {handleSubmit} = props;
    const [stdTitle, setTitle] = useState('');
    const [stdOpeningText, setText] = useState('');
    const [stdImg, setImage] = useState('');
    const [stdReleaseDate, setDate] = useState('');

    const handleMovieSubmit = (e: any) => {
        e.preventDefault();
        const newMovie = { stdTitle, stdOpeningText, stdImg, stdReleaseDate };  
        handleSubmit(newMovie);
      }
return (
    <>
    <div className={Styles.form_container}>
      <h2>Add a New Movie</h2>
      <form onSubmit={handleMovieSubmit}>
        <div className={Styles.form_container__input}>
        <label  className={Styles.form_container__input__label}>Movie poster:</label>
        <input 
          type="text" 
          required 
          value={stdImg}
          onChange={(e) => setImage(e.target.value)}
        />
        </div>
        <div className={Styles.form_container__input}>
        <label  className={Styles.form_container__input__label}>Movie title:</label>
        <input 
          type="text" 
          required 
         value={stdTitle}
         onChange={(e) => setTitle(e.target.value)}
        />
        </div>
        <div className={Styles.form_container__input}>
        <label  className={Styles.form_container__input__label}>Movie opening text:</label>
        <textarea
          required
         value={stdOpeningText}
         onChange={(e) => setText(e.target.value)}
        ></textarea>
        </div>
        <div className={Styles.form_container__input}>
        <label  className={Styles.form_container__input__label}>Movie release date:</label>
        <input 
          type="text" 
          required 
         value={stdReleaseDate}
         onChange={(e) => setDate(e.target.value)}
        />
        </div>
        <button>Add Movie</button>
      </form>
    </div>
    </>
);
}
export default CreateMovie;