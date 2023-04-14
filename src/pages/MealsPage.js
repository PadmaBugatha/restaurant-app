import React from "react";
import MealCard from "../components/meals/MealCard";

const DUMMY_MEALS = [
  {
    id: "m1",
    image: "../../imagesUsed/assets/salad.jpg",
    title: "Greek Salad",
    price: 12.99,
    description:
      "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with rosemary croutons.",
  },
  {
    id: "m2",
    image: "imagesUsed/assets/bruschetta1.jpg",
    title: "Bruschetta",
    price: 5.99,
    description:
      "Dish is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil; made perfect for an evening dinner.",
  },
  {
    id: "m3",
    image: "../imagesUsed/assets/creme.jpg",
    title: "Lemon Dessert",
    price: 5.2,
    description:
      "This comes straight from Grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];
const MealsPage = () => {
  return (
    <>
      <div className="flex flex-row justify-between px-14 pt-8 ">
        <h1 className="text-3xl font-bold text-center">
          FAVOURITES THIS WEEK!
        </h1>
        <button className="bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-pink-500 hover:to-yellow-500 px-4 py-2 rounded-lg hover:text-white ">
          Online Menu
        </button>
      </div>
      <ul className="p-12 flex gap-8">
        {DUMMY_MEALS.map((prod) => (
          <li key={prod.id}>
            {/* <Link to={`/products/${prod.id}`}>{prod.title}</Link> */}
            <MealCard meal={prod} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default MealsPage;
