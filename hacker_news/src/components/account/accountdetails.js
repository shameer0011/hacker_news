import React from "react";
import Cards from "../card/card";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeMoviesToAccount } from "../../redux";
const accountdetails = (props) => {
  const { movies, name, loginUsername } = props;
  console.log(name)
  const onClick = (e) => {};

  const addMovieListButton = (item) => {};
  const removeMovie = (movie) => {
    props.dispatch(removeMoviesToAccount(movie.id));
  };
  return (
    <div>
      Account details page of {props.match.params.name}
      <div>
        {loginUsername.length === 1 &&
          loginUsername.map((name) => (
            <Link to="">
              {" "}
              <div style={{ color: "blue", float: "right" }}>
                {name.username}
              </div>
            </Link>
          ))}
      </div>
      <Grid container>
        {props.saveMovies &&
          props.saveMovies?.map((movie, index) => (
            <Grid item key={index} xs={4} style={{ marginBottom: 12 }}>
              <Cards
                onClick={onClick}
                item={movie}
                index={index}
                addMovieListButton={addMovieListButton}
                removeCard={removeMovie}
                buttonLabel="REMOVE"
                showSaveButton={false}
                showRemoveButton={true}
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
    saveMovies: state.saveMovies,
  };
};
export default connect(mapStateToProps)(accountdetails);
