import React from "react";
import { useStyles } from "./headerStyle";
import Grid from "@material-ui/core/Grid";
const Header = ({ heading }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <div className={classes.gridContainer}>
        <header>{heading}</header>
      </div>
    </Grid>
  );
};
export default Header;
