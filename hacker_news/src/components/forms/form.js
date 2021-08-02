import React from "react";
import {
  Button,
  TextField,
  Grid,
  Paper,
  AppBar,
  Typography,
  Toolbar,
  Link,
} from "@material-ui/core";
import { useState } from "react";
import { useStyles } from "./formStyle";
const Form = ({ onSubmits, errorMessage }) => {
  const [inputField, setInputField] = useState({
    name: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const [errorFromStore, setErrorFromStore] = useState(false);
  const [show, setShow] = useState(false);
  const classes = useStyles();
  const handleInputs = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };

  const onSubmitValues = (e) => {
    e.preventDefault();

    const order = {
      name: inputField.name,
      password: inputField.password,
    };
    if (order.name == "" || order.password == "") {
      setError(true);
      setShow(false);
      setErrorFromStore(false);
    }
    if (order.name && order.password) {
      errorMessage.map((i) => {
        if (i.username !== order.name) {
          setErrorFromStore(true);
        } else {
          onSubmits(order);
        }
      });
    }
  };

  return (
    <div>
      <AppBar position="static" alignitems="center" color="primary">
        <Toolbar>
          <Grid container justify="center" wrap="wrap">
            <Grid item>
              <Typography variant="h6">HACKER NEWS</Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Grid container spacing={0} justify="center" direction="row">
        <Grid item>
          <Grid
            container
            direction="column"
            justify="center"
            spacing={2}
            className={classes.loginForm}
          >
            <Paper
              variant="elevation"
              elevation={4}
              className={classes.loginBackground}
            >
              <Grid item>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
              </Grid>
              <Grid item>
                <form onSubmit={onSubmitValues}>
                  <Grid container direction="column" spacing={2}>
                    <Grid item>
                      <TextField
                        type="name"
                        placeholder="Email"
                        fullWidth
                        name="name"
                        variant="outlined"
                        value={inputField.name}
                        onChange={handleInputs}
                        // required
                        autoFocus
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        type="password"
                        placeholder="Password"
                        fullWidth
                        name="password"
                        variant="outlined"
                        value={inputField.password}
                        onChange={handleInputs}
                        // required
                      />
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        className={classes.buttonBlock}
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  Forgot Password?
                </Link>
              </Grid>
            </Paper>
          </Grid>
          <div>
            <div>
              {show && errorMessage.length === 0
                ? <span style={{color:"red"}}>Username and Password is incorrected</span>
                : ""}
            </div>
            <div>
              {error
                ? inputField.name === "" || inputField.password === ""
                  ? <span style={{color:"red"}}> Username  or Password is empty</span>
                  : ""
                : ""}
              <div>
                {errorFromStore && <span style={{color:"red"}}>Username and Password is incorrected</span>}
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default Form;
