import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { login } from '../../actions/auth'
import { event } from 'jquery'

const Login = ({ history }) => {

    // позволяет диспатчить акшны в стор
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    
    const [credentials, SetCredentials] = useState({
        email: "",
        password: "",
    })

    useEffect(()=>{
        if(auth.isAuthenticated) {
            history.push('/')
        }
    }, [auth])

    const changeHandler = (event) => {
        SetCredentials({ ...credentials, [event.target.name]: event.target.value });
      };

    const LoginFunction = event=> {
        // Чтобы страница не перезагружалась
        event.preventDefault()        

        dispatch(login(credentials))
    }

    return (
        <div className="container">
            <div className="col-md-5 mx-auto">
                <div className="myform form ">
                    <div className="logo mb-3">
                        <div className="col-md-12 text-center">
                            <h1>Login</h1>
                        </div>
                    </div>
                    <form onSubmit={LoginFunction} method="post" name="login">
                        <div className="form-group">
                            <label htmlFor="Email">Email address</label>
                            <input 
                                className="form-control" 
                                placeholder="Enter email"
                                type="email" 
                                name="email"  
                                onChange={changeHandler}                            
                            />                                              
                        </div>  
                        <div className="form-group">
                            <label htmlFor="Password">Password</label> 
                            <input
                                className="form-control"
                                placeholder="Enter Password"
                                type="password" 
                                name="password"  
                                onChange={changeHandler}  
                            />                                                                                       
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

export default Login;

// // функция передает auth в пропсы
// const mapStateToProps = (state) => ({ auth: state.auth })
  
// // теперь в поле props компонента будет функция login и обьект auth
// export default connect(mapStateToProps, { login })(Login)

































