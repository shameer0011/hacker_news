import React, { useState } from "react";
import { Button } from "@material-ui/core";
import {Link} from 'react-router-dom'
const Form = ({ onSubmit ,errorMessage}) => {
  const [inputField, setInputField] = useState({
    name: "",
    password: "",
  });
  const [error ,setError] =useState(false)
  const handleInputs = e => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };
  const onSubmitValues = e => {
    e.preventDefault();
    setError(true)
   
    const order = {
      name: inputField.name,
      password: inputField.password,
    };
    onSubmit(order);
    // setInputField({
    //   name:'',
    //   password:''
    //   })
  
  };
  return (
    <div>
    <div style={{ content: "", display: "table", clear: "both" }}>
      <form onSubmit={onSubmitValues}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <label>Name:</label>
          <input
            style={{ padding: "0.50rem", width: "15rem" }}
            name="name"
            type="name"
            value={inputField.name}
            onChange={handleInputs}
            // required
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <label>Password:</label>
          <input
            style={{ padding: "0.50rem", width: "15rem" }}
            name="password"
            type="password"
            value={inputField.password}
            onChange={handleInputs}
            // required
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "0.25rem",
          }}
        >
          <Button color="primary" variant="outlined" type="submit">
          Submit
          </Button>
        </div>
      </form>
    </div>
        <div> {errorMessage.length===0  ? 'Username and Password is incorrected':''}</div> 
          {
          error ? 
          inputField.name==="" ||  inputField.password==="" ? 'Username  or Password is empty':''
           : ''}
    </div>
  );
};
export default Form;
