
import axios from "axios";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Cards from "../../components/card/card";
import { API_URL, SEARCH_URL } from "../../constants";
import {createPopularMovie} from '../../actions/popularmovie';
import {createLogin} from '../../actions/login';
import { Button, Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Login from "../../components/login/login";
import Account from "../account/account";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useStyles } from "./home_style";
const Home = (props) => {
  const classes = useStyles();
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

  const addMovieListButton = (selectedMovie) => {};
  const onClick = (cardClick) => {};
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
    props.loginUsername.map((i)=>{
      if(i.username==values.name){
        setAccountPage(true);
        return  props.dispatch(createLogin(values.name));
      }
    })
  };

  return (
    <div>
      <div 
         className={classes.header}
      >
        {!loginPage && (
          <>
          <div>
          <Button style={{float:"right"}} size="small" onClick={loginPageHandler}>
            <AccountCircleIcon/>
              Login
            </Button>
          </div>
          <div className={classes.content}>
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
           
          </>
        )}
      </div>
      <div>
        {!accountPage ? (
          !loginPage ? (
            <Grid container >
              {props.popularMovieses &&
                props.popularMovieses?.map((movie, index) => (
                  <Grid item key={index} xs={4} style={{ marginTop: 14,backgroundColor:"#C0C0C0" }}>
                    <Cards
                      onClick={onClick}
                      item={movie}
                      index={index}
                      addMovieListButton={addMovieListButton}
                      buttonLabel="SAVE"
                      showSaveButton = {false}
                      showRemoveButton={false}
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
export default connect(mapStateToProps)(Home);
