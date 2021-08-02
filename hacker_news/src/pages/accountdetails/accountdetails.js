import React from "react";
import Cards from "../../components/card/card";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeMoviesToAccount } from "../../actions/savemovie";
import { Grid, Button } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useStyles } from "./account_details_style";
import {useHistory} from 'react-router-dom';

const Accountdetails = (props) => {
  const history = useHistory()
  const classes = useStyles();
  const { movies, name, loginUsername } = props;

  const onClick = (e) => {};

  const addMovieListButton = (item) => {};

  const removeMovie = (movie) => {
    props.dispatch(removeMoviesToAccount(movie.id));
  };
  const homePage =()=>{
    history.push('/home')
  }
  return (
    <div className={classes.bodyColor}>
      <span>Account details page of {props.match.params.name}</span>
      <div className={classes.accountHeader}>
        <div>
          {loginUsername.length === 1 &&
            loginUsername.map((name) => (
              <Link to="" style={{ textDecoration: "none" }}>
                <Button size="small" color="primary">
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
export default connect(mapStateToProps)(Accountdetails);
