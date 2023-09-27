import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {clearCart} from "../actions/action";

const Header = () => {
  const dispatch=useDispatch();
  const cartCount = useSelector((state) => state.count.cartCount);

  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <h2>Shop by using react redux my cartttttt count is {cartCount} </h2>
      </div>
      
      <button onClick={()=>dispatch(clearCart())}>Clear all cart items</button>
    </div>
  );
};

export default Header;
