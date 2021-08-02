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