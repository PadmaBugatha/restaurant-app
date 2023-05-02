import React, { useContext } from "react";
import CartContext from "../../cartStore/cartContext";
import MealItemForm from "../meals/MealItemForm";

const MenuItems = (props) => {
  const menuCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    menuCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  // const [quantity, setQuantity] = useState(1);

  // const handleIncreaseQuantity = () => {
  //   setQuantity(quantity + 1);
  // };

  // const handleDecreaseQuantity = () => {
  //   if (quantity > 1) {
  //     setQuantity(quantity - 1);
  //   }
  // };

  return (
    <div>
      <h3 className="font-semibold">{props.name}</h3>
      <div className="flex justify-between">
        <div className="flex flex-row items-center">
          <p className="text-gray-600 mr-8">${props.price}</p>
          <MealItemForm onAddToCart={addToCartHandler} />
          {/* <div className="inline-flex rounded-md border border-gray-400">
            <button
              className="text-gray-700 text-center w-8 font-medium border-2 border-solid active:border-emerald-700 rounded-md bg-transparent cursor-pointer  hover:text-white hover:bg-emerald-600 active:bg-emerald-700 focus:outline-none focus:ring focus:ring-emerald-300"
              onClick={handleDecreaseQuantity}
            >
              -
            </button>
            <input
              type="number"
              className="w-12 text-center"
              value={+quantity}
              readOnly
            />
            <button
              className="text-gray-700 text-center w-8 font-medium border-2 border-solid active:border-emerald-700 rounded-md bg-transparent cursor-pointer  hover:text-white hover:bg-emerald-600 active:bg-emerald-700 focus:outline-none focus:ring focus:ring-emerald-300"
              onClick={handleIncreaseQuantity}
            >
              +
            </button>
          </div> */}
        </div>
        <div>
          {props.isAdmin ? (
            <div>
              <button
                onClick={() => props.handleEdit(props.id)}
                className="bg-emerald-500 text-white py-1 px-2 rounded-lg mr-2 hover:bg-emerald-600"
              >
                Edit
              </button>
              <button
                onClick={() => props.handleDelete(props.id)}
                className="bg-red-500 text-white py-1 px-2 rounded-lg hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ) : (
            <button className="bg-green-500 text-white py-1 px-2 rounded-lg mx-2 hover:bg-green-600">
              Select
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
