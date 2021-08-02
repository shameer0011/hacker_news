const saveMovieToAccountReducersDefaultValue = []
const saveMovieToAccountReducer = (
  state = saveMovieToAccountReducersDefaultValue,
  action
) => {
 
  switch (action.type) {
    case "SAVE-MOVIE-TO-ACCOUNT":
      return [...state, {...action.movies }];
      break;

    case "REMOVE-MOVIE-TO-ACCOUNT":
      if(action.id){
        return [...state.filter((movie)=>movie.id!==action.id)]
      }

    default:
      return state;
      break;
  }
};
export default saveMovieToAccountReducer;