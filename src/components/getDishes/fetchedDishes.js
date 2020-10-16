import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDishes } from "../../actions/fetch_dishes";
import { Dish } from "./Dish";
import { Loader } from "../helpers/Loader";

const Dishes = () => {
  const flexStyle = {
    // переделать стили
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    className: "col-md-4",
  };

  // позволяет диспатчить акшны в стор
  const dispatch = useDispatch();
  const dishes = useSelector((state) => state.dishes.fetchDishes);
  const loading = useSelector((state) => state.app.loading);

  useEffect(() => dispatch(fetchDishes()), []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div style={flexStyle}>
      {dishes.map((dish) => (
        <Dish dish={dish} key={dish.id}></Dish>
      ))}
    </div>
  );
};

export default Dishes;
