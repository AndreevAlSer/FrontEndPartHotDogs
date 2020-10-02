
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Header extends React.Component {
    render(){
        let links
        links = (
            <React.Fragment>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  <i className="fa fa-sign-in"></i>
                  Log In
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  <i className="fa fa-user-plus"></i>
                  Register
                </Link>
              </li>
            </React.Fragment>
          )
        return (
            <nav className="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
              <div className="container">
                <Link className="navbar-brand" to="/">Fastfood dishes</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
            </nav>
          )
    }
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(Header)