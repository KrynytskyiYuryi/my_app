import React from "react";

const MyGrid = ({ children }) => {
  return (
    <div style={{ display: "grid", gridTemplate: "1fr/ 30% 70%" }}>
      {children}
    </div>
  );
};
export default MyGrid;
