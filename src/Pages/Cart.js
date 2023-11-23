import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Style from "./cart.module.css";
import NavBar from "../Components/NavBar";
import OrderSummary from "../Components/orderSummary";
import { cartSlice } from "../Redux/CartSlice";
import { FaCartShopping } from "react-icons/fa6";

const Cart = () => {
  const productData = useSelector((state) => state?.cart?.items);
  const dontrepeat = productData.filter(
    (value, index, self) => index === self.findIndex((t) => t.id === value.id)
  );
  const dispatch = useDispatch();
  return (
    <div>
      <NavBar />
      <p className={Style.myCart}> My Cart <FaCartShopping/> </p>
      <div className={Style.firstContainer}>
        <div className={Style.mainCConatiner}>
          {productData.length === 0 ? (
            <p>Cart is Empty</p>
            
          ) : (
            dontrepeat?.map((el) => (
              <div className={Style.Ccontainer}>
                <div className={Style.cCard}>
                  <div className={Style.img}>
                    <img src={el.image} alt="Weak Internet" />
                  </div>

                  <div className={Style.cText}>
                    <p className={Style.cTitle}>{el.title}</p>

                    <p>Description : {el.description}</p>

                    <p>Category : {el.category}</p>

                    <p> price : {el.price}</p>
                    <button
                      className={Style.cButton}
                      onClick={() =>
                        dispatch(cartSlice.actions.removefromCart(el))
                      }
                    >
                      Remove from Cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
         
        </div>
        <div className={Style.break}></div>
        <OrderSummary />

      </div>
    </div>
  );
};

export default Cart;
