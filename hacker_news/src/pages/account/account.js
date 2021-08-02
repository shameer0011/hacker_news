import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Cards from "../../components/card/card";
import { SEARCH_URL } from "../../constants";
import { Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { getMovies } from "../api/getmovies";
import { createPopularMovie } from "../../actions/popularmovie";
import { saveMovieToAccount } from "../../actions/savemovie";
import Test from "../test";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Accountdetails from '../accountdetails/accountdetails';
import { useStyles } from "./account_style";
import {useHistory} from 'react-router-dom';
const Account = (props) => {
  const history = useHistory()
  const classes = useStyles();
  const { username } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const [show, setshow] = useState(false);
  const [addMovieToAccount, setAddMovieToAccount] = useState(
    JSON.parse(localStorage.getItem("cartItems"))
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );
  // const [addMovieToAccount, setAddMovieToAccount] = useState([])
  const saveItems = addMovieToAccount.slice();

  const onClick = (e) => {};
  const addMovieListButton = (movies) => {
    saveItems.push({ ...movies });
    setAddMovieToAccount([...addMovieToAccount, { ...movies }]);
    localStorage.setItem("cartItems", JSON.stringify(saveItems));
    // props.dispatch(saveMovieToAccount(addMovieToAccount));
    //props.dispatch(saveMovieToAccount(movies));
    addMovieToAccount.map((i) => props.dispatch(saveMovieToAccount(i)));
  };

  const searchMovie = async (e) => {
    e.preventDefault();
    const searchMovies = await getMovies(SEARCH_URL + searchTerm);
    searchMovies.map((i) => props.dispatch(createPopularMovie(i)));
    setSearchTerm("");
  };

  const changeHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  const DetailPage = (e) => {
    setshow(true);
  };
  const homePage =()=>{
    history.push('/home')
  }
  return (
    <div>
      <div
       className={classes.accountHeader}>
        <div>
          {username &&
            username.map((name) => (
              <Link to={name.username}  className={classes.textDecorationCancel}>
                <Button size="small" color="primary" onClick={DetailPage}>
                  {name.username}
                </Button>
              </Link>
            ))}
        </div>
        <div>
          <Button size="small" color="primary" onClick={homePage}>
            LOGOUT
            <ExitToAppIcon />
          </Button>
        </div>
      </div>
      {!show ? (
        <>
          <div className={classes.accountBodySetup}>
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
                <Grid item key={index} xs={4} style={{ marginTop: 14,backgroundColor:"#C0C0C0" }}>
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
        </>
      ) : (
        <Accountdetails movies={addMovieToAccount} name="shameer" />
      )}
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
export default connect(mapStateToProps)(Account);
