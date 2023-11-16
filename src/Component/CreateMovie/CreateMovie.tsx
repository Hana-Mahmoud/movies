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
        <div className={Styles.form_container__field}>
        <label  className={Styles.form_container__field__label}>Movie poster:</label>
        <input 
          type="text" 
          className={Styles.form_container__field__input}
          required 
          value={stdImg}
          onChange={(e) => setImage(e.target.value)}
        />
        </div>
        <div className={Styles.form_container__field}>
        <label  className={Styles.form_container__field__label}>Movie title:</label>
        <input 
          type="text" 
          className={Styles.form_container__field__input}
          required 
         value={stdTitle}
         onChange={(e) => setTitle(e.target.value)}
        />
        </div>
        <div className={Styles.form_container__field}>
        <label  className={Styles.form_container__field__label}>Movie opening text:</label>
        <textarea
          required
          className={Styles.form_container__field__input}
         value={stdOpeningText}
         onChange={(e) => setText(e.target.value)}
        ></textarea>
        </div>
        <div className={Styles.form_container__field}>
        <label  className={Styles.form_container__field__label}>Movie release date:</label>
        <input 
          type="text" 
          className={Styles.form_container__field__input}
          required 
         value={stdReleaseDate}
         onChange={(e) => setDate(e.target.value)}
        />
        </div>
        <button className={Styles.form_container__button}>Add Movie</button>
      </form>
    </div>
    </>
);
}
export default CreateMovie;