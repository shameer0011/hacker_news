import axios from 'axios';
export const getMovies = async (url) => {
    const response = await axios.get(url);
    let popularMovie = response.data.results;
    return popularMovie;
  };
