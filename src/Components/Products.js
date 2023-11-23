import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Style from "./Products.module.css";
import img from "./copy.jpg";
import { useDispatch } from "react-redux";
import { cartSlice } from "../Redux/CartSlice";
const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const dispatch1 = useDispatch();
  const Added = (el) => {
    el.classList.add(`${Style.clicked}`);
  };
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((respond) => setProducts(respond.data));
  }, []);

  return (
    <Fragment>
      <img className={Style.img} src={img} alt="" />
      <div className={Style.psOverlay} id="psOverlay"></div>
      <div className={Style.card}>
        {products.map((el) => (
          <div className={Style.cards} key={el.id}>
            <img src={el.image} alt="Weak Internet" />
            <p>{el.title}</p>
            <p> price is {el.price}</p>
            <div className={Style.pbuttons}>
              <button
                className={Style.pbutton}
                onClick={() => navigate(`${el.id}`)}
              >
                View
              </button>
              <button
                className={Style.pbutton}
                onClick={(e) => {
                  dispatch1(cartSlice.actions.addtoCart(el));
                  Added(e.target);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Products;
