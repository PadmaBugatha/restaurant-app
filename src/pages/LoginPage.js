import React, { useState } from "react";
import MenuCard from "../components/onlineMenu/MenuCard";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const [foodItems, setFoodItems] = useState([
    { id: "m1", name: "Pizza", price: 12.99 },
    { id: "m2", name: "Burger", price: 8.99 },
    { id: "m3", name: "Taco", price: 6.99 },
    { id: "m4", name: "Sushi", price: 15.99 },
  ]);

  const handleDelete = (id) => {
    const updatedFoodItems = foodItems.filter((item) => item.id !== id);
    setFoodItems(updatedFoodItems);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoggedIn(true);
  };

  return (
    <div>
      {loggedIn ? (
        <MenuCard
          foodItems={foodItems}
          setFoodItems={setFoodItems}
          isAdmin={isAdmin}
          handleDelete={handleDelete}
          // handleEdit={handleEdit}
          onLogout={() => setLoggedIn(false)}
        />
      ) : (
        <div className="flex justify-center items-center pt-8 bg-gray-100">
          <div className="w-96 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-xl font-bold mb-6">Log in</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label htmlFor="username" className="block font-medium mb-2">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  className="w-full border-gray-300 border-2 px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-emerald-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full border-gray-300 border-2 px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-emerald-500"
                />
              </div>
              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  id="isAdmin"
                  name="isAdmin"
                  checked={isAdmin}
                  onChange={(e) => setIsAdmin(e.target.checked)}
                  className="mr-2 accent-emerald-700"
                />
                <label
                  htmlFor="isAdmin"
                  className="text-sm font-medium relative cursor-pointer select-none"
                >
                  Log in as admin
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-500 text-white py-2 px-4 rounded-lg hover:bg-emerald-600"
              >
                Log in
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
