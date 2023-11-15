import React, { useState } from 'react';
import Styles from './Movies.module.scss';
import MovieList from '../MovieList/MovieList';
import CreateMovie from '../CreateMovie/CreateMovie';


const Movies = () => {
    const movies = [
        {
            stdTitle: 'Bad Boys for Life',
            stdOpeningText: 'Bad Boys for Life is a 2020 American buddy cop action comedy film directed by Adil & Bilall. It is the sequel to Bad Boys II (2003) and the third installment in the Bad Boys franchise. Will Smith, Martin Lawrence, Joe Pantoliano and Theresa Randle reprise their roles in the film and are joined by Paola Núñez, Vanessa Hudgens, Jacob Scipio, Alexander Ludwig, Charles Melton, Kate del Castillo and Nicky Jam. The film was produced by Smith, Jerry Bruckheimer, and Doug Belgrad, with a screenplay written by Chris Bremner, Peter Craig and Joe Carnahan. In Bad Boys for Life, Miami detectives Mike Lowrey and Marcus Burnett investigate a string of murders tied to Lowrey s troubled past.',
            stdReleaseDate: '11-11-2020',
            stdImg: 'https://upload.wikimedia.org/wikipedia/en/9/90/Bad_Boys_for_Life_poster.jpg',
            stdId:1,
            
        },
        {
            stdTitle: 'Black Panther',
            stdOpeningText: 'T Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider who was a childhood victim of T Challas fathers mistake.',
            stdReleaseDate: '11-11-2018',
            stdImg: 'https://mr.comingsoon.it/imgdb/locandine/235x336/53715.jpg',
            stdId:2,
            
        },
        {
            stdTitle: 'The Gray Man',
            stdOpeningText: 'The Gray Man is a 2022 American action thriller film directed by Anthony and Joe Russo, from a screenplay the latter co-wrote with Christopher Markus and Stephen McFeely, based on the 2009 novel of the same name by Mark Greaney. The film stars Ryan Gosling, Chris Evans, Ana de Armas, Jessica Henwick, Regé-Jean Page, Wagner Moura, Julia Butters, Dhanush, Alfre Woodard, and Billy Bob Thornton. Produced by the Russo brothers company, AGBO, it is the first film in a franchise based upon Greaneys Gray Man novels. The plot centers on CIA agent Sierra Six, who is on the run from sociopathic ex-CIA agent and mercenary Lloyd Hansen upon discovering corrupt secrets about his superior.',
            stdReleaseDate: '11-11-2022',
            stdImg: 'https://upload.wikimedia.org/wikipedia/en/5/59/The_Gray_Man_poster.png',
            stdId:3,
            
        },
    ]
    const [newMovies, setNewMovies] = useState(movies);

    const handleSubmitMovie = (movie:any) => {
        movie['stdId'] = newMovies.length + 1;
        const currMovies = [...newMovies];
        currMovies.push(movie);
        setNewMovies(currMovies);
       
      }

    const handleDeleteMovie = (id:any) => {
        const currentMovies = [...newMovies];
        const filteredMovies =  currentMovies.filter((movie)=>{
            return movie.stdId !== id;
        })
        setNewMovies(filteredMovies);
       
      }
    return (
        <>
        <div className={Styles.container}>

        { newMovies.map((movie)=>{
            return <MovieList movie={movie}  handleDelete={handleDeleteMovie} key={movie.stdId}/>
            })}
        </div>
             <CreateMovie handleSubmit={handleSubmitMovie}/>
             </>
    );
}
export default Movies;