export const saveMovieToAccount = (movie)=>{
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
  
  export const  removeMoviesToAccount =(id)=>{
    return {
      type:"REMOVE-MOVIE-TO-ACCOUNT",
      id: id,
     
    }
  }