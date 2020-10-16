import React from "react";
import { useSelector } from "react-redux";
import Dishes from "./fetchedDishes";

const AllDishes = () => {
  const auth = useSelector((state) => state.auth);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          {auth.isAuthenticated}
          <Dishes />
        </div>
      </div>
    </div>
  );
};

export default AllDishes;
