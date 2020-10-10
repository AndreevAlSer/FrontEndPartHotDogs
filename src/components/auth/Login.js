import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { login } from '../../actions/auth'

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }
    
    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
          this.props.history.push('/')
        }
      }

    // один обработчик на все инпуты. Этот будет обрабатывать все changes
    // Универсальный способ обработки инпутов
    // Если у них будет 1 title и 1 обработчик, то 1 метод будет все это изменять
    changeInputHandler = event => {
        event.persist()
        // если хотим вернуть обьект, то его нужно обернуть в круглые скобки
        this.setState(prev => ({...prev, ...{
            // создание динамического ключа
            // новый обьект конкатенируется с предыдущим стейтом
            [event.target.name]: event.target.value
        }}))
    }

    // стрелочная функция
    submitHandler = event => {
        // Чтобы страница не перезагружалась
        event.preventDefault()

        // if(!title.trim()){
        //     return this.props.showAlert('Название поста не установлено')
        // }

        this.props.login(this.state)

        // Очистка поля после введения данных
        this.setState({email:'', password:''})
    }
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
                        <form onSubmit={this.submitHandler} method="post" name="login">
                            <div className="form-group">
                                <label htmlFor="Email">Email address</label>
                                <input 
                                    className="form-control" 
                                    placeholder="Enter email"
                                    type="email" 
                                    name="email"  
                                    value={this.state.email}
                                    onChange={this.changeInputHandler}                                      
                                    // pattern = ".{4, 30}"
                                    // required
                                />                                              
                            </div>  
                            <div className="form-group">
                                <label htmlFor="Password">Password</label> 
                                <input
                                    className="form-control"
                                    placeholder="Enter Password"
                                    type="password" 
                                    name="password"  
                                    value={this.state.password}
                                    onChange={this.changeInputHandler}
                                    // pattern = ".{6, 32}"
                                    // required 
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
}

// функция передает auth в пропсы
const mapStateToProps = (state) => ({ auth: state.auth })
  
// теперь в поле props компонента будет функция login и обьект auth
export default connect(mapStateToProps, { login })(Login)

