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
            stdGenre: 'Action, Adventure',
            stdTime: '134 min',
            stdId:1,
            
        },
        {
            stdTitle: 'Harry Potter and the Sorcerers Stone',
            stdOpeningText: 'Harry Potter and the Philosopher Stone is a 2001 fantasy film directed by Chris Columbus and produced by David Heyman, from a screenplay by Steve Kloves, based on the 1997 novel of the same name by J. K. Rowling. It is the first instalment in the Harry Potter film series. The film stars Daniel Radcliffe as Harry Potter, with Rupert Grint as Ron Weasley, and Emma Watson as Hermione Granger. Its story follows Harry first year at Hogwarts School of Witchcraft and Wizardry as he discovers that he is a famous wizard and begins his formal wizarding education.',
            stdReleaseDate: '11-11-2001',
            stdImg: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Harry_Potter_and_the_Philosopher%27s_Stone_banner.jpg/320px-Harry_Potter_and_the_Philosopher%27s_Stone_banner.jpg',
            stdGenre: 'Action, Adventure, Sci-Fi',
            stdTime: '124 min',
            stdId:2,
            
        },
        {
            stdTitle: 'The Gray Man',
            stdOpeningText: 'The Gray Man is a 2022 American action thriller film directed by Anthony and Joe Russo, from a screenplay the latter co-wrote with Christopher Markus and Stephen McFeely, based on the 2009 novel of the same name by Mark Greaney. The film stars Ryan Gosling, Chris Evans, Ana de Armas, Jessica Henwick, Regé-Jean Page, Wagner Moura, Julia Butters, Dhanush, Alfre Woodard, and Billy Bob Thornton. Produced by the Russo brothers company, AGBO, it is the first film in a franchise based upon Greaneys Gray Man novels. The plot centers on CIA agent Sierra Six, who is on the run from sociopathic ex-CIA agent and mercenary Lloyd Hansen upon discovering corrupt secrets about his superior.',
            stdReleaseDate: '11-11-2022',
            stdImg: 'https://upload.wikimedia.org/wikipedia/en/5/59/The_Gray_Man_poster.png',
            stdGenre: 'Action, Adventure, Drama',
            stdTime: '100 min',
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