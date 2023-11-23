import axios from "axios";
import { useState, useEffect, Fragment } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import Style2 from "./SingleP.module.css";
import NavBar from "../Components/NavBar";
import { useDispatch } from "react-redux";
import { cartSlice } from "../Redux/CartSlice";
const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  const id = params.id;

  const dispatch = useDispatch();
  const Added = (el) => {
    el.classList.add(`${Style2.clicked}`);
  };
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((respond) => setProduct(respond.data))
      .catch((err) => console.log(err));
  },);
  return (
    <Fragment>
      <NavBar />

      <div className={Style2.pCard}>
        <div className={Style2.img}>
          <img src={product.image} alt="Weak Internet" />
        </div>

        <div className={Style2.pText}>
          <p className={Style2.pTitle}>{product.title}</p>

          <p>Description : {product.description}</p>

          <p>Category : {product.category}</p>

          <p> price : {product.price}</p>

          <button
            className={Style2.pButton}
            id="pButton"
            onClick={(e) => {
              
              dispatch(cartSlice.actions.addtoCart(product))

              Added(e.target);
            }
            }
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default SingleProduct;
