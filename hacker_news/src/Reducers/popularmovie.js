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
export default PopularMovieReducers;