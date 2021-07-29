import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Cards from "../../components/card/card";
import { SEARCH_URL } from "../../constants";
import { Grid ,Button} from "@material-ui/core";
import { getMovies } from '../services/getmovies';
import { createPopularMovie, saveMovieToAccount } from '../../redux';

const Account = (props) => {
      console.log(props.saveMovies,"save redux")
    const { username } = props;
    const [searchTerm, setSearchTerm] = useState("");

  const [addMovieToAccount, setAddMovieToAccount] = useState(
    JSON.parse(localStorage.getItem("cartItems"))
    ? JSON.parse(localStorage.getItem("cartItems"))
    : []
  );
// const [addMovieToAccount, setAddMovieToAccount] = useState([])
  console.log(addMovieToAccount,"save movies")

  const onClick = (e) => {
  };

  const addMovieListButton = (movies) => {
    console.log(movies); 
    const saveItems = addMovieToAccount.slice();
    saveItems.push({ ...movies});
    setAddMovieToAccount([...addMovieToAccount, {...movies }]);
    localStorage.setItem("cartItems", JSON.stringify(saveItems));
    props.dispatch(saveMovieToAccount(movies));
  };


  const searchMovie = async(e) => {
    e.preventDefault();
    const searchMovies= await (getMovies(SEARCH_URL + searchTerm));
    searchMovies.map((i) => props.dispatch(createPopularMovie(i)));
    setSearchTerm("");
  };
  const changeHandler = (e) => {
    setSearchTerm(e.target.value);
  };

    // Two way to set get item..
  // First way

  // second way
  // const [addToCart, setAddToCart] = useState([]);

//   useEffect(() => {
//     const localRepoItems = localStorage.getItem("cartItems");
//     if (localRepoItems) {
//         setAddMovieToAccount(JSON.parse(localRepoItems));
//     }
//   }, []);




 

  return (
    <div>
         <div>
        {username.map((name) => (
          <div style={{ color: "blue", float: "right" }}>{name.username}</div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          type="search"
          value={searchTerm}
          onChange={changeHandler}
          style={{ height: "40%" }}
        />
        <Button variant="outlined" size="small" onClick={searchMovie}>
          Search
        </Button>

      </div>
     
      <Grid container>
        {props.popularMovieses &&
          props.popularMovieses?.map((movie, index) => (
            <Grid item key={index} xs={4} style={{ marginBottom: 12 }}>
              <Cards
                onClick={onClick}
                item={movie}
                index={index}
                addMovieListButton={addMovieListButton}
                buttonLabel="SAVE"
                showSaveButton={true}
                showRemoveButton={false}
              />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    popularMovieses: state.movie,
    loginUsername: state.login,
    saveMovies:state.saveMovies,
  };
};
export default connect(mapStateToProps)(Account);
