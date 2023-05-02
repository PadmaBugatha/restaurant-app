import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/specials");
  }
  const navigateReservationsHandler = () => {
    navigate("/reservations");
  };
  return (
    <div>
      <section className="bg-center bg-no-repeat bg-[url('https://wallpapers.com/images/hd/classy-butter-chicken-platter-indian-food-s8a8b9aojk6kqoz0.jpg')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Perfect Ambience and Best Quality Food
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Delicious food delivered to you. Choose your favorite meal from our
            broad selection of available meals and enjoy a delicious lunch or
            dinner at our Restaurant.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <button
              onClick={navigateReservationsHandler}
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-blue-300"
            >
              Reserve a Table
            </button>
            <button
              onClick={navigateHandler}
              className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              Order Online
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
