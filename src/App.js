// import React from "react";
// import { BrowserRouter, Route } from "react-router-dom";
// import jwtDecode from "jwt-decode";
// import setAuthToken from "./utils/setAuthToken";
// import { setCurrentUser, logout } from "./actions/auth";
// import store from "./store";

// import Header from "./components/layout/Header";
// import Footer from "./components/layout/Footer";
// import Login from "./components/auth/Login";
// import Register from "./components/auth/Register";
// import AllDishes from "./components/getDishes/AllDishes";

// if (localStorage.access_token) {
//   const { access_token } = localStorage;
//   setAuthToken(access_token);
//   const decoded = jwtDecode(access_token, { header: true });
//   store.dispatch(setCurrentUser(decoded));
//   const currentTime = Date.now() / 1000;
//   if (decoded.exp < currentTime) {
//     store.dispatch(logout());
//     window.location.href = "/login";
//   }
// }

// export default function App() {
//   return (
//     <BrowserRouter>
//       <React.Fragment>
//         <Header />
//         <div className="container">
//           <Route path="/register" component={Register} />
//           <Route path="/login" component={Login} />
//           <Route path="/" component={AllDishes} />
//         </div>
//         <Footer />
//       </React.Fragment>
//     </BrowserRouter>
//   );
// }

import React from "react";
import { BrowserRouter } from "react-router-dom";
import jwtDecode from "jwt-decode";

import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logout } from "./actions/auth";
import useRoutes from "./routes";

import store from "./store";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

if (localStorage.access_token) {
  const { access_token } = localStorage;
  setAuthToken(access_token);
  const decoded = jwtDecode(access_token, { header: true });
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logout());
    window.location.href = "/login";
  }
}

function App() {
  const routes = useRoutes();
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header></Header>
        <div className="container">{routes}</div>
        <Footer></Footer>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
