import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Register extends React.Component {
    render(){
        return (
            <div className="container">   
                <div class="col-md-5 mx-auto">
                    <div className="myform form ">
                        <div className="logo mb-3"/>
                        <div className="col-md-12 text-center">
                            <h1 >Signup</h1>
                        </div>             
                        <form action="#" name="registration">
                            <div className="form-group">
                                <label for="exampleInputEmail1">User name</label>
                                <input type="text"  name="lastname" className="form-control" id="lastname" aria-describedby="emailHelp" placeholder="Enter Lastname"/>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" name="email"  className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Password</label>
                                <input type="password" name="password" id="password"  className="form-control" aria-describedby="emailHelp" placeholder="Enter Password"/>
                            </div>
                            <div className="col-md-12 text-center mb-3">
                                <button type="submit" className=" btn btn-block mybtn btn-primary tx-tfm">Get Started</button>
                            </div>
                            <div className="col-md-12 ">
                                <div className="form-group">
                                    <p className="text-center"><Link to="/login" id="signin">Already have an account?</Link></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>         
            </div>            
          )
    }
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(Register)