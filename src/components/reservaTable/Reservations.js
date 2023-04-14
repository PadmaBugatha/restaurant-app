import React from "react";
import { useState } from "react";
import BasicInfo from "./BasicInfo";
import SignInDetails from "./SignInDetails";

const Reservations = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    seating: "Outdoor seating",
    date: "",
    timeslot: "",
    numofDiners: "",
    occasion: "",
    firstName: "",
    lastName: "",
    email: "",
    phnumber: "",
    textarea: "",
  });

  const FormTitle = ["reservations", "personal info"];
  const pageDisplayHandler = () => {
    if (page === 0) {
      return <BasicInfo formData={formData} setFormData={setFormData} />;
    } else
      return <SignInDetails formData={formData} setFormData={setFormData} />;
  };
  return (
    <div className="">
      <div>
        <div>{pageDisplayHandler()}</div>
        <div className="flex justify-center mt-6">
          <button
            className="bg-yellow-500 rounded-lg px-3  py-2 mx-1"
            disabled={page === 0}
            onClick={() => {
              setPage((currentPage) => currentPage - 1);
            }}
          >
            Prev step
          </button>

          <button
            className="bg-yellow-500 rounded-lg px-3  py-2 mx-1"
            onClick={() => {
              if (page === FormTitle.length - 1) {
                alert("Form Submitted");
              } else {
                setPage((currentPage) => currentPage + 1);
              }
            }}
          >
            {page === FormTitle.length - 1
              ? "Confirm Reservation "
              : "Reserve a Table"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reservations;
