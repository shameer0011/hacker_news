import axios from "axios";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Cards from "../../components/card/card";
import { API_URL, SEARCH_URL } from "../../constants";
import { createPopularMovie, createLogin } from '../../redux';
import { Button, Grid } from "@material-ui/core";
import {useHistory} from 'react-router-dom'
import Login from '../../components/login/login';

const Api = props => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies,setMovies] = useState('')
  const [loginPage,setLoginPage]=useState(false)

  useEffect(() => {
    getMovies(API_URL,"movies");
  }, []);

  const getMovies = async (url,movies) => {
    const response = await axios.get(url);
    let popularMovie = response.data.results;
    setMovies(popularMovie)
    
  };

  const addMovieListButton = selectedMovie => {
    // console.log(selectedMovie, "lll");
  };
  const onClick = cardClick => {
    // console.log(cardClick, "kkkk")
  };
  const changeHandler = e => {
    setSearchTerm(e.target.value);
  };
  const searchMovie = e => {
    e.preventDefault();
    getMovies(SEARCH_URL + searchTerm,"searchItem");
    setSearchTerm("");
  };
  const loginPageHandler =(e)=>{
    e.preventDefault();
    setLoginPage(true)
  }

  const loginValues = (values)=>{
    props.dispatch(createLogin(values))
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {!loginPage &&
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
        }
       
      </div>
      <Grid container>
        {!loginPage ? 
        movies &&
         movies?.map((movie, index) => (
            <Grid item key={index} xs={4} style={{ marginBottom: 12 }}>
              <Cards
                onClick={onClick}
                item={movie}
                index={index}
                addMovieListButton={addMovieListButton}
                buttonLabel="SAVE"
              />
             
            </Grid>
          ))
          : 
          <Login
          formValuesToMain={loginValues}
          />
         }
      </Grid>
      
    </div>
  );
};

const mapStateToProps = (state, props) => {
  console.log(state.login)
  return {
    popularMovieses: state.movie,
    loginUsername:state.login
  };
};

export default connect(mapStateToProps)(Api);
