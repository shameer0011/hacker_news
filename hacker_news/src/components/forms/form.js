import React, { useState } from "react";
import { Button } from "@material-ui/core";
const Form = ({ onSubmit }) => {
  const [inputField, setInputField] = useState({
    name: "",
    password: "",
  });
  const handleInputs = e => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };
  const onSubmitValues = e => {
    e.preventDefault();
    const order = {
      name: inputField.name,
      password: inputField.password,
    };
    onSubmit(order);
  };
  return (
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
            required
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
            required
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
  );
};
export default Form;
