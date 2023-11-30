import MovieType from "../Interface/Movie";
export const ADD_MOVIE = 'ADD_MOVIE';
export const EDIT_MOVIE = 'EDIT_MOVIE';
export const DELETE_MOVIE = 'DELETE_MOVIE';
export const INITIALIZE_MOVIES = 'INITIALIZE_MOVIES';


const moviesReducer = (state: MovieType[], action: any) => {
  switch (action.type) {
    case INITIALIZE_MOVIES:
      return action.payload;
    case ADD_MOVIE:
      return [...state, action.payload];
    case EDIT_MOVIE:
      return state.map((movie) =>
        movie.stdId === action.payload.stdId ? { ...movie, ...action.payload } : movie
      );
    case DELETE_MOVIE:
      return state.filter((movie) => movie.stdId !== action.payload);
    default:
      return state;
  }
};

export default moviesReducer;