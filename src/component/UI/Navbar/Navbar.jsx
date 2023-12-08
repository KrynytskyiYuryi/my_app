import React from "react";
import cl from "./Navbar.module.css";
import { Link } from "react-router-dom";
import MyButton from "../Button/MyButton";
import { useContext } from "react";
import { AuthContext } from "../../../Context/Context";

const Navbar = () => {
  const { setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };
  return (
    <div className={cl.navbar}>
      <MyButton onClick={logout}>Log Out</MyButton>
      <div className={cl.navbar__links}>
        <Link style={{ margin: "0 15px" }} to="/about">
          About
        </Link>
        <Link to="/posts">Posts</Link>
      </div>
    </div>
  );
};

export default Navbar;
