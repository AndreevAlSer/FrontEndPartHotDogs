import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Login extends React.Component {
    render(){
        return (
            <div className="container">
                <div className="col-md-5 mx-auto">
                    <div className="myform form ">
                        <div className="logo mb-3">
                            <div className="col-md-12 text-center">
                                <h1>Login</h1>
                            </div>
                        </div>
                        <form action="" method="post" name="login">
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" name="email"  className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"></input>
                            </div>  
                            <div className="form-group">
                                <label for="exampleInputEmail1">Password</label>
                                <input type="password" name="password"  className="form-control" id="password" aria-describedby="emailHelp" placeholder="Enter Password"></input>
                            </div>   
                            <div className="col-md-12 text-center ">
                                <button type="submit" className=" btn btn-block mybtn btn-primary tx-tfm">Login</button>
                            </div>
                            <div className="col-md-12 ">
                                <div className="login-or">
                                    <hr className="hr-or"/>
                                    <span className="span-or">or</span>
                                </div>
                            </div>
                            <div className="form-group">
                                <p className="text-center">Don't have account? <Link to="/register" id="signup">Sign up here</Link></p>
                            </div>
                        </form>
                    </div>
                </div>              
            </div>            
          )
    }
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(Login)

