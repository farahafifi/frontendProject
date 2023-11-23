import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Login.module.css";
import icon from "../Components/wavy-black-white-background_23-2150530922.jpg"
import icon1 from "../Components/online-shopping-high-resolution-logo-transparent.png";

const Login = () => {
  const [users, setUsers] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/users")
      .then((respond) => setUsers(respond.data));
  }, []);

  const Login = () => {
    users.filter((r) => {
      if (r.email === email) {
        if (r.password === password) {
          navigate("/home");
        }
      } else {
        document.getElementById("wrong").innerHTML = `Wrong Email or Password`;
      }
      return r;
    });
  };
  return (
    <Fragment>
      <img className={style.icon1} src={icon1} alt="weak internet" />
      <img className={style.icon} src={icon} alt="weak internet" />
      <div className={style.Loverlay}></div>
      <div className={style.Lmain}>
        <div className={style.Lcontainer}>
          <p className={style.Lp}>Email</p>
          <input
            type="text"
            className={style.email}
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className={style.Lp}>Password</p>
          <input
            type="password"
            className={style.password}
            placeholder="Enter Paassword"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p id="wrong" className={style.llp}></p>
            <button className={style.Lbutton} onClick={() => Login()}>
              LogIn
            </button>
          {/* <div>
          </div> */}
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
