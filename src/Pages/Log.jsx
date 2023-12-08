import React, { useContext } from "react";
import MyInput from "../component/UI/Input/MyInput";
import MyButton from "../component/UI/Button/MyButton";
import { AuthContext } from "../Context/Context";

const Log = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  };
  return (
    <div>
      <h3>Log In</h3>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Login" />
        <MyInput type="password" placeholder="Password" />
        <MyButton>Log In</MyButton>
      </form>
    </div>
  );
};

export default Log;
