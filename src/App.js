import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
// import setAuthToken from './utils/setAuthToken'
// import { setCurrentUser, logout } from './actions/auth'

// import Header from './components/layout/Header'
// import Footer from './components/layout/Footer'
import Login from './components/auth/Login'
import Register from './components/auth/Register'

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        {/* <Header /> */}
        <div className="container">
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
        </div>
        {/* <Footer /> */}
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
