import React from "react";
import { connect } from "react-redux";

const Test = props => {
  console.log(props.popularMovieses.length, "in test");
  return <div>haii</div>;
};

// const connectedMovieList = connect(state => {
//   return {
//     movieList: state.movie,
//   };
// })(Test);
// export default connectedMovieList;

const mapStateToProps = (state, props) => {
  return {
    popularMovieses: state.movie,
    loginUsername: state.login,
  };
};
export default connect(mapStateToProps)(Test);
