import React from "react";
import cl from "./MyButton.module.css";

const MyButton = ({ children, ...props }) => {
  return (
    <button {...props} type="submit" className={cl.my__button}>
      {children}
    </button>
  );
};

export default MyButton;
