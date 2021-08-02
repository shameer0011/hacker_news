import React from "react";
import Form from "../forms/form";

const login = ({ formValuesToMain,errorMessage }) => {
  const onSubmit = values => {
    formValuesToMain(values);
  };

  return (
    <div>
      <Form 
      onSubmits={onSubmit}
      errorMessage={errorMessage}
       />
    </div>
  );
};
export default login;
