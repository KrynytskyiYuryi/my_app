import React, { useContext } from "react";
import MyInput from "../component/UI/Input/MyInput";
import MyButton from "../component/UI/Button/MyButton";
import { AuthContext } from "../Context/Context";
import "../styles/styles.css";

const Log = () => {
  const { setIsAuth } = useContext(AuthContext);
  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  };
  return (
    <div className="login_block">
      <h3 className="login_block title">Log In</h3>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Login" />
        <MyInput type="password" placeholder="Password" />
        <MyButton>Log In</MyButton>
      </form>
    </div>
  );
};

export default Log;
