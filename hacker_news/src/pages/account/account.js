
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Cards from "../../components/card/card";
import { SEARCH_URL } from "../../constants";
import { Grid ,Button} from "@material-ui/core";
import {Link} from 'react-router-dom'
import { getMovies } from '../services/getmovies';
import { createPopularMovie, saveMovieToAccount } from '../../redux';
import Accountdetails from "../../components/account/accountdetails";
import Test from '../test'
const Account = (props) => {
   
      // console.log(props.saveMovies,"save redux")
    const { username } = props;
    const [searchTerm, setSearchTerm] = useState("");
    const [show,setshow]=useState(false)
    
  const [addMovieToAccount, setAddMovieToAccount] = useState(
    JSON.parse(localStorage.getItem("cartItems"))
    ? JSON.parse(localStorage.getItem("cartItems"))
    : []
  );
// const [addMovieToAccount, setAddMovieToAccount] = useState([])
  console.log(addMovieToAccount,"save movies")
  const saveItems = addMovieToAccount.slice();

  const onClick = (e) => {
  };

  const addMovieListButton = (movies) => {
    saveItems.push({ ...movies});
    setAddMovieToAccount([...addMovieToAccount, {...movies }]);
    localStorage.setItem("cartItems", JSON.stringify(saveItems));
    // props.dispatch(saveMovieToAccount(addMovieToAccount));
    addMovieToAccount.map((i) => props.dispatch(saveMovieToAccount(i)));
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

 
const DetailPage =(e)=>{
  setshow(true)
}

  return (
    <div>
        <div onClick={ DetailPage}>
        {username && username.map((name) => (
         <Link to ={name.username}> <div style={{ color: "blue", float: "right" }}>{name.username}</div></Link>
        ))}
      </div>
      {!show ?
      <>
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
      </>
       :
       <Accountdetails 
        movies={addMovieToAccount}
        name="shameer"
       />

          }
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
