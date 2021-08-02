import { createStore, combineReducers } from "redux";
import PopularMovieReducers from '../Reducers/popularmovie';
import loginReducer from '../Reducers/login';
import saveMovieToAccountReducer from '../Reducers/savemovies';
const configureStore = () => {
  const store = createStore(
    combineReducers({
        movie: PopularMovieReducers,
        login: loginReducer,
        saveMovies:saveMovieToAccountReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
export default configureStore;

