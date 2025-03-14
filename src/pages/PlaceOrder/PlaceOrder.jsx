import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../Context/StoreContext";

const PlaceOrder = () => {

  const {getTotalCartAmount}=useContext(StoreContext);
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery info</p>

        <div className="multi-fields">
          <input type="text" placeholder="first name" />

          <input type="text" placeholder="last name" />
        </div>
        <div className="multi-fields">
        <input type="email" placeholder="Email" />

        <input type="text" placeholder="address" />
        <div/>
        <div className="multi-fields">
        <input type="text" placeholder="city" />

        <input type="text" placeholder="state" />
        </div>

        <div className="multi-fields">
        <input type="text" placeholder="zip-code" />

        <input type="text" placeholder="country" />
        </div>
        <input type="text" placeholder="Phone"></input>
        </div>
      <div className="place-order-right">

      <div className="cart-total">

<h2>Cart Total</h2>
<div>

    <div className="cart-total-details"><p>

        Subtotal
    </p>
    <p>${getTotalCartAmount()}</p></div>
    <div className="cart-total-details"><p></p>
    <p>Delivery Fee</p>
    <p>${getTotalCartAmount()===0?0:2}</p></div>
    <hr/>
    <div className="cart-total-details">
<b>Total</b>
<b>${getTotalCartAmount()+getTotalCartAmount()===0?0:2}</b>

    </div>
    
</div>
<button > PROCEED TO PAYMENT</button>
        </div>
      </div>
     

      </div>
    </form>
  );
};

export default PlaceOrder;
