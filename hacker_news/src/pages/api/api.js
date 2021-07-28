import axios from "axios";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Cards from "../../components/card/card";
import { API_URL, SEARCH_URL } from "../../constants";
import {
  createPopularMovie,
  createLogin,
  removeLogin,
  store,
} from "../../redux";
import { Button, Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Login from "../../components/login/login";
import Account from "../account/account";

const Api = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState("");
  const [loginPage, setLoginPage] = useState(false);
  const [accountPage, setAccountPage] = useState(false);

  useEffect(() => {
    getMovies(API_URL, "movies");
  }, []);

  const getMovies = async (url, movies) => {
    const response = await axios.get(url);
    let popularMovie = response.data.results;
    setMovies(popularMovie);
    popularMovie.map((i) => props.dispatch(createPopularMovie(i)));
  };

  const addMovieListButton = (selectedMovie) => {
    // console.log(selectedMovie, "lll");
  };
  const onClick = (cardClick) => {
    // console.log(cardClick, "kkkk")
  };
  const changeHandler = (e) => {
    setSearchTerm(e.target.value);
  };
  const searchMovie = (e) => {
    e.preventDefault();
    getMovies(SEARCH_URL + searchTerm, "searchItem");
    setSearchTerm("");
  };
  const loginPageHandler = (e) => {
    e.preventDefault();
    setLoginPage(true);
  };

  const loginValues = (values) => {
    props.dispatch(createLogin(values.name));
    setAccountPage(true);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {!loginPage && (
          <>
            <input
              type="search"
              value={searchTerm}
              onChange={changeHandler}
              style={{ height: "40%" }}
            />
            <Button variant="outlined" size="small" onClick={searchMovie}>
              Search
            </Button>

            <Button variant="outlined" size="small" onClick={loginPageHandler}>
              Login
            </Button>
          </>
        )}
      </div>
      <div>
        {!accountPage ? (
          !loginPage ? (
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
                    />
                  </Grid>
                ))}
            </Grid>
          ) : (
            <div>
              <Login
                formValuesToMain={loginValues}
                errorMessage={props.loginUsername}
              />
            </div>
          )
        ) : props.loginUsername.length === 1 ? (
          <div>
            <Account username={props.loginUsername} />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state, props) => {
  return {
    popularMovieses: state.movie,
    loginUsername: state.login,
  };
};
export default connect(mapStateToProps)(Api);
