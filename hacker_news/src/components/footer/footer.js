import React from "react";
import { useStyles } from "./footerStyle";
const Footer = ({ title }) => {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <footer>{title}</footer>
    </div>
  );
};

export default Footer;
