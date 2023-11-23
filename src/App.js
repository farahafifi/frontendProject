import { Routes, Route } from "react-router-dom";
import "./App.css";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import SingleProduct from "./Pages/SingleProduct";
// import NavBar from './Components/NavBar';
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      {/* <Login/> */}
      {/* <Home/> */}
      {/* <NavBar/> */}
      {/* <SingleProduct/> */}

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="home/:id" element={<SingleProduct />} />

        <Route path="cart" element={<Cart />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Fragment>
  );
}

export default App;
