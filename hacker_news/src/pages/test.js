import React from "react";
import { connect } from "react-redux";

const Test = props => {
  console.log(props.movieList.length, "in test");
  return <div>haii</div>;
};

const connectedMovieList = connect(state => {
  return {
    movieList: state.movie,
  };
})(Test);
export default connectedMovieList;
