import { combineReducers, createStore } from "redux";
// CREATE REDUCER
//...............

const users = [
  {
      "id":1,
      "username":"user1",
      "email":"user@hotmail.com",
      "password":"1234"
  },
  {
      "id":2,
      "username":"user2",
      "email":"user2@hotmail.com",
      "password":"12345"
  }
  ];
const PopularMovieReducersDefaultValue = []
const PopularMovieReducers = (
  state = PopularMovieReducersDefaultValue,
  action
) => {
  switch (action.type) {
    case "ADD-POPULAR-MOVIES":
      return [...state, { ...action.movies }];
      break;
    default:
      return state;
      break;
  }
};

const loginReducerDefaultValue =users;
const loginReducer = (state = loginReducerDefaultValue, action) => {
console.log(state)
  switch (action.type) {
    case "ADD-LOGIN-VALUES":
      console.log(action.username)
   return [...state.filter(user => user.username === action.username)];
  // state.filter(user =>{
  //       if(user.username===action.username) {
  //         console.log('sss')
  //        return [...state,...user]
  //       }else{

  //         console.log('else')
  //         return [...state]
  //       }
  //  })
      break;
    case 'REMOVE_LOGIN':
        return state.filter(({ username }) => username !== action.username);

    default:
      return state;
      break;
  }
};

const saveMovieToAccountReducersDefaultValue = []
const saveMovieToAccountReducer = (
  state = saveMovieToAccountReducersDefaultValue,
  action
) => {
 
  switch (action.type) {
    case "SAVE-MOVIE-TO-ACCOUNT":
      return [...state, {...action.movies }];
      break;
    default:
      return state;
      break;
  }
};

// REDUCER STORE
//...............

export const store = createStore(
  combineReducers({
    movie: PopularMovieReducers,
    login: loginReducer,
    saveMovies:saveMovieToAccountReducer
    // filt: filtersReducers,
  })
);

// GET REDUX STORE
store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});

// CALL ACTIONS
//...............

export const createPopularMovie = movie => {
  const { id, original_title, overview, popularity, poster_path } = movie;

  return {
    type: "ADD-POPULAR-MOVIES",
    movies: {
      id: id,
      original_title: original_title,
      overview: overview,
      popularity: popularity,
      poster_path: poster_path,
    },
  };
};
export const createLogin = username => {
 
  return {
    type: "ADD-LOGIN-VALUES",
    username
  };
};


export const removeLogin = ({ name,password } = {}) => ({
  type: 'REMOVE_LOGIN',
  name:name,
  password:password
});

export const saveMovieToAccount = (movie)=>{
  console.log(movie,"action save movies")
  return {
    type :"SAVE-MOVIE-TO-ACCOUNT",
    movies: {
      id: movie.id,
      original_title: movie.original_title,
      overview: movie.overview,
      popularity: movie.popularity,
      poster_path: movie.poster_path,
    },

  }
}

// export const editOrder = (
//   id = "",
//   { description = "", title = "", image = "", price = "", size = "" } = {}
// ) => {
//   return {
//     type: "EDIT-ORDER",
//     id: id,
//     description: description,
//     title: title,
//     image: image,
//     price: price,
//     availableSizes: size,
//   };
// };
// export const removeOrder = ({ id }) => {
//   return {
//     type: "REMOVE-ORDER",
//     id: id,
//   };
// };

// const setPriceOrder = price => {
//   return {
//     type: "SET-PRICE-ORDER",
//     //describe code actions
//     price: price,
//   };
// };

// const setSortBySize = availableSizes => {
//   return {
//     type: "SET-SORT-BY-SIZE",
//     //describe code actions
//     availableSizes: availableSizes,
//   };
// };

// CALL ACTION FUNCTION
//...............
// store.dispatch(setPriceOrder(availableSizes));
// store.dispatch(setSortBySize(price));

// store.dispatch(createOrder(products));
