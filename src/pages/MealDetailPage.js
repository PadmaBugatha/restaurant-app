import React from "react";
import { Link, useParams } from "react-router-dom";

const MealDetailPage = () => {
  const params = useParams();

  return (
    <>
      <h1>Meal Details</h1>
      <p>{params.productId}</p>
      <p className="border-s-violet-200 text-blue-900">
        <Link className="text-orange-600" to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
};

export default MealDetailPage;
