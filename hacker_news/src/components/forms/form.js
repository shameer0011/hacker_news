import React, { useState } from "react";
import { Button } from "@material-ui/core";
const Form = ({ checkoutForm }) => {
  const [inputField, setInputField] = useState({
    name: "",
    address: "",
    email: "",
  });
  const handleInputs = e => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };
  const onSubmit = e => {
    e.preventDefault();
    const order = {
      Name: inputField.name,
      Address: inputField.address,
      Email: inputField.email,
    };
    checkoutForm(order);
  };
  return (
    <div style={{ content: "", display: "table", clear: "both" }}>
      <form onSubmit={onSubmit}>
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
          <label>Address:</label>
          <input
            style={{ padding: "0.50rem", width: "15rem" }}
            name="address"
            type="text"
            value={inputField.address}
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
          s
        >
          <label>Email:</label>
          <input
            style={{
              padding: "0.50rem",
              width: "15rem",
            }}
            name="email"
            type="email"
            value={inputField.email}
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
            Checkout
          </Button>
        </div>
      </form>
    </div>
  );
};
export default Form;
