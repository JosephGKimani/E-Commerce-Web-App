import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";
import PlaceOrder from "../PlaceOrder/PlaceOrder";


const Cart = () => {
  const { cartItem, food_list, removeFromCart,getTotalCartAmount } = useContext(StoreContext);
const navigate=useNavigate();
  return (
    <div>
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br/>
        <hr/>
        {food_list.map((item, index) => {
          if (cartItem[item._id] > 0) {
            return (
              <div className="cart-items-title cart-items-item">
                

                <img src={item.image} alt=""></img>
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItem[item._id]}</p>
                <p>${item.price*cartItem [item._id] }</p>
                <p className="cross" onClick={()=>removeFromCart(item._id)}>X</p>
                <hr/>
              </div>
            );
          }
        })}
      </div>
    </div>
    <div className="cart-bottom">


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
<b>${getTotalCartAmount()+2}</b>

    </div>
    
</div>
<button onClick={()=>navigate('/PlaceOrder')}> PROCEED TO CART</button>
        </div>
        <div className="cart-promocode">


            <div>

                <p>If you have promo code please put down below</p>
                <div className="cart-promocode-input">


                    <input type="text" placeholder="promocode"></input>

                    <button>SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
};

export default Cart;
