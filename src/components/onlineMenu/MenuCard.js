import React, { useState } from "react";
import MenuItems from "./MenuItems";

const MenuCard = (props) => {
  const {
    isAdmin,
    onLogout,
    foodItems,
    setFoodItems,
    handleDelete,
    // handleEdit,
  } = props;
  const [clickbtn, setClickbtn] = useState(false);
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState(0);

  const handleEdit = (id) => {
    const itemToEdit = foodItems.find((item) => item.id === id);
    setFoodItems((prevItems) => prevItems.filter((item) => item.id !== id));
    if (itemToEdit) {
      setClickbtn(true);
      setItemName(itemToEdit.name);
      setItemPrice(itemToEdit.price);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newId = Date.now();
    setFoodItems([
      { name: itemName, price: itemPrice, id: newId },
      ...foodItems,
    ]);
    setItemName("");
    setItemPrice("");
  };
  // const handleSelect = (id) => {
  //   // select logic
  //   console.log(`Selected food item ${id}`);
  // };

  return (
    <div className="flex justify-center items-center bg-gray-100">
      <div className="w-4/6 bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-xl font-bold mb-6">
          Welcome {isAdmin ? "Admin" : "User"}!
        </h2>
        <button
          onClick={onLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>

        {isAdmin && (
          <button
            onClick={() => setClickbtn(true)}
            className="block bg-emerald-500 text-base"
          >
            Add New Dish
          </button>
        )}

        <div>
          {isAdmin && clickbtn && (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="item-name" className="block font-medium mb-2">
                  Title
                </label>
                <input
                  id="item-name"
                  type="text"
                  className="border-gray-400 border-solid border-2 px-4 py-2 w-full rounded-md"
                  value={itemName}
                  onChange={(event) => setItemName(event.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="item-price" className="block font-medium mb-2">
                  Price
                </label>
                <input
                  id="item-price"
                  type="number"
                  className="border-gray-400 border-solid border-2 px-4 py-2 w-full rounded-md"
                  value={itemPrice}
                  onChange={(event) => setItemPrice(event.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-md"
              >
                Add Item
              </button>
              <button
                onClick={() => setClickbtn(false)}
                type="close"
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-md"
              >
                Close
              </button>
            </form>
          )}
        </div>
        <ul>
          {foodItems.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between mb-2 border-b-2"
            >
              <MenuItems
                id={item.id}
                name={item.name}
                price={item.price}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                isAdmin={isAdmin}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuCard;
