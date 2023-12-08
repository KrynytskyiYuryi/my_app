import React from "react";

const MyDiv = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "end",
        margin: "15px",
      }}
    >
      {children}
    </div>
  );
};

export default MyDiv;
