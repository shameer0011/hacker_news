import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
const Order = ({ orderSubmit, editCard, editSubmission }) => {
  const [inputField, setInputField] = useState({
    title: editCard ? editCard.title : "",
    description: editCard ? editCard.description : "",
    price: editCard ? editCard.price : "",
    image: editCard ? editCard.image : "",
    size: editCard ? editCard.availableSizes : "",
  });
  useEffect(
    () => {
      if (editCard) {
        setInputField({
          id: editCard.id,
          title: editCard.title,
          description: editCard.description,
          price: editCard.price,
          image: editCard.image,
          size: editCard.availableSizes,
        });
      }
    },
    [editCard]
  );

  const changeDescription = e => {
    setInputField({ ...inputField, description: e.target.value });
  };

  const changePrice = e => {
    setInputField({ ...inputField, price: e.target.value });
  };

  const changeSize = e => {
    setInputField({ ...inputField, size: e.target.value });
  };
  const handleInputs = e => {
    setInputField({ ...inputField, title: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    orderSubmit([inputField]);
    setInputField({
      title: "",
      description: "",
      price: "",
      image: "",
      size: "",
    });
    document.getElementById("myFile").value = "";
  };
  const editSubmit = e => {
    e.preventDefault();
    editSubmission([inputField]);
    setInputField({
      title: "",
      description: "",
      price: "",
      image: "",
      size: "",
    });
    document.getElementById("myFile").value = "";
  };
  const handleChange = event => {
    setInputField({
      ...inputField,
      image: URL.createObjectURL(event.target.files[0]),
    });
  };

  const removeSubmit = e => {
    console.log("remove submit");
  };

  return (
    <div style={{ content: "", display: "table", clear: "both" }}>
      <form>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <label>title:</label>
          <input
            style={{ padding: "0.50rem", width: "15rem" }}
            name="title"
            type="text"
            value={inputField.title}
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
          <label>description:</label>
          <input
            style={{ padding: "0.50rem", width: "15rem" }}
            name="description"
            type="text"
            value={inputField.description}
            onChange={changeDescription}
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
          <label>price:</label>
          <input
            style={{
              padding: "0.50rem",
              width: "15rem",
            }}
            name="price"
            type="text"
            value={inputField.price}
            onChange={changePrice}
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
          <label>size:</label>
          <input
            style={{
              padding: "0.50rem",
              width: "15rem",
            }}
            name="size"
            type="text"
            value={inputField.size}
            onChange={changeSize}
            required
          />
        </div>

        <div>
          <input
            id="myFile"
            type="file"
            name="image"
            onChange={handleChange}
            defaultValue={inputField.image}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "0.25rem",
          }}
        >
          <Button
            color="primary"
            onClick={onSubmit}
            variant="outlined"
            type="submit"
          >
            Add Order
          </Button>
          <Button
            color="primary"
            onClick={editSubmit}
            variant="outlined"
            type="submit"
          >
            Edit Order
          </Button>
          <Button
            color="primary"
            onClick={removeSubmit}
            variant="outlined"
            type="submit"
          >
            Remove Order
          </Button>
        </div>
      </form>
    </div>
  );
};
export default Order;
