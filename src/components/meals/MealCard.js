import React, { useContext } from "react";
import CartContext from "../../cartStore/cartContext";
import MealItemForm from "./MealItemForm";

const MealCard = ({ meal }) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: meal.id,
      name: meal.title,
      amount: amount,
      price: meal.price,
    });
  };
  return (
    <div>
      <div className="bg-white border border-gray-200 rounded-lg shadow">
        <img className="rounded-t-lg h-52 w-full" src={meal.image} alt="" />

        <div className="p-5">
          <div className="flex justify-between">
            <h5 className=" mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              {meal.title}
            </h5>
            <div
              className="px-3 py-2 space-x-1
           text-lg font-bold  text-orange-400"
            >
              ${meal.price}
            </div>
          </div>

          <p className="mb-3 font-normal text-gray-700">{meal.description}</p>
          <div className="flex justify-between">
            {/* <button
              onClick={addToCartHandler}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              Order Now
            </button> */}
          </div>
          <div>
            <MealItemForm onAddToCart={addToCartHandler} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
