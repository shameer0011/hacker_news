import { combineReducers, createStore } from "redux";
// CREATE REDUCER
//...............

const PopularMovieReducersDefaultValue = [];

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
const loginReducerDefaultValue = [];

const loginReducer = (state = loginReducerDefaultValue, action) => {
  console.log(action.loginValues?.name);
  console.log(action.loginValues?.password);
  console.log(state)
  switch (action.type) {
    case "ADD-LOGIN-VALUES":
        return  [...state,{...action.loginValues }]
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
export const createLogin = values => {
  return {
    type: "ADD-LOGIN-VALUES",
    loginValues: {
      name: values.name,
      password: values.password,
    },
  };
};

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
