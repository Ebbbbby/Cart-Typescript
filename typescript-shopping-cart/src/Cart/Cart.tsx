import React from "react";
import CartItem from "../CartItem/CartItem";
import { Wrapper } from "./cart.styles";
import { CartItemType } from "../App";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const calculatTotal = (items: CartItemType[]) =>
    items.reduce((acc, item) => acc + item.amount * item.price, 0);
  return (
    <Wrapper>
      <h2>Your Cart</h2>
      {cartItems?.length === 0 ? <p>No item in the cart</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total : ${calculatTotal(cartItems).toFixed(2)}</h2>
    </Wrapper>
  );
};

export default Cart;
