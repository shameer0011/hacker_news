import React from "react";
import Form from "../forms/form";

const login = ({ formValuesToMain }) => {
  const onSubmit = values => {
    formValuesToMain(values);
  };

  return (
    <div>
      <Form onSubmit={onSubmit} />
    </div>
  );
};
export default login;
