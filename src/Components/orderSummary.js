import React from "react";
import { useSelector } from "react-redux";
import Style1 from "./orderSummary.module.css";

const OrderSummary = () => {
  const orderSummary = useSelector((state) => state.cart.items);
  const dontrepeat = orderSummary.filter((value, index, self) => 
    index === self.findIndex((t) => (
    t.id === value.id
  )));
    return (
      <div className={Style1.mainConatiner}>
          Order Summary
      <div className={Style1.conatiner}>
        {dontrepeat?.map((el) => (
          <div className={Style1.oTitle}>
            <p>
              {el.title}
            </p>
            <p>
              {el.price}
            </p>
          </div>
        ))}
            </div>
            <p>Total: </p>
        <button className={Style1.oButton}>Confirm</button>
    </div>
  );
};

export default OrderSummary;
