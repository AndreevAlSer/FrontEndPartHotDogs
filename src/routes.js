import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import AllDishes from "./components/getDishes/AllDishes";

const useRoutes = () => {
  const auth = useSelector((state) => state.auth);
  if (auth.isAuthenticated) {
    return (
      <Switch>
        <Route path="/" exact>
          <AllDishes />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/register" exact>
        <Register />
      </Route>
      <Redirect to="/login" />
    </Switch>
  );
};

export default useRoutes;
