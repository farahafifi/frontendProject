import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Cart from "../Pages/Cart";
import Home from "../Pages/Home";
import SingleProduct from "../Pages/SingleProduct";
import Style from "./NavBar.module.css";
import Logo from "../Components/online-shopping-high-resolution-logo-transparent.png";
import { FaCartShopping } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";



const NavBar = () => {
  return (
    <Fragment>
      <div className={Style.navBar}>
        <div className={Style.container}>
          <img src={Logo} alt="Weak Network" />
        </div>
        <ul>
          <Link to="/home">Home <FaHome/></Link>
          <Link to="/cart"><FaCartShopping />
</Link>
        </ul>
      </div>
    </Fragment>
  );
};

export default NavBar;
