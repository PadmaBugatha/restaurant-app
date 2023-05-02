import React, { useContext } from "react";
import CartContext from "../../cartStore/cartContext";
import CartItem from "./CartItem";

const CartCard = () => {
  const cartCtx = useContext(CartContext);
  // console.log(cartCtx);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItems = (
    <ul className="list-none m-0 p-0 max-h-80 overflow-auto">
      {/* <ul className="list-none m-0 p-0"> */}
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  // return <MealsCart cartItems={cartItems} />;
  return (
    <div className="flex justify-center">
      <div className="bg-green-100  mt-4 fixed z-30 p-2 rounded w-7/12  ">
        {cartItems}
        <div className="flex justify-between items-center font-bold text-2xl my-4">
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className="text-right">
          <button className="text-yellow-700">Close</button>
          {hasItems && (
            <button className="bg-orange-500 text-white">Order</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartCard;
