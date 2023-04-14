import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../cartStore/cartContext";

const MainNavigation = () => {
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <header className="m-auto p-4 border-b  border-emerald-900">
      <nav className=" flex flex-row justify-evenly">
        <div className="flex">
          <span className=" text-gray-700 font-bold text-lg">Restaurant</span>
        </div>
        <div className="">
          <ul className="flex justify-center gap-4">
            <li className="text-gray-600 font-semibold">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "bg-emerald-900 p-1 text-white rounded-md"
                    : undefined
                }
              >
                Home
              </NavLink>
            </li>
            <li className="text-gray-600 font-medium">
              <NavLink
                to="/meals"
                className={({ isActive }) =>
                  isActive
                    ? "bg-emerald-900 p-1 text-white rounded-md"
                    : undefined
                }
              >
                Menu
              </NavLink>
            </li>
            <li className="text-gray-600 font-medium">
              <NavLink
                to="/reservations"
                className={({ isActive }) =>
                  isActive
                    ? "bg-emerald-900 p-1 text-white rounded-md"
                    : undefined
                }
              >
                Reservations
              </NavLink>
            </li>
            <li className="text-gray-600 font-medium">
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive
                    ? "bg-emerald-900 p-1 text-white rounded-md"
                    : undefined
                }
              >
                Your Cart{" "}
                <button
                  className="rounded-lg
                px-2 bg-gray-200 border-red font-bold text-gray-700"
                >
                  {numberOfCartItems}
                </button>
              </NavLink>
            </li>
            <li className="text-gray-600 font-medium">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "bg-emerald-900 p-1 text-white rounded-md"
                    : undefined
                }
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default MainNavigation;
