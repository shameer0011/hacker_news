import React from "react";

const account = ({ username }) => {


  return (
    <div>
      <div>
        {username.map((name) => (
          <div style={{ color: "blue", float: "right" }}>{name.username}</div>
        ))}
      </div>
      
    </div>
  );
};
export default account;
