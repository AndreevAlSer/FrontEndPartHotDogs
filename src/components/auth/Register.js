import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { register } from '../../actions/auth'

class Register extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }

    componentDidMount() {
        if(this.props.isAuthenticated) {
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

        this.props.register(this.state, this.props.history)

        // Очистка поля после введения данных
        this.setState({username:'', email:'', password:''})
    }

    render(){ 
        return (
            <div className="container">   
                <div className="col-md-5 mx-auto">
                    <div className="myform form ">
                        <div className="logo mb-3"/>
                        <div className="col-md-12 text-center">
                            <h1>Signup</h1>
                        </div>             
                        <form onSubmit={this.submitHandler} name="registration">
                            <div className="form-group">
                                <label htmlFor="User name">User name</label>
                                <input 
                                    type="text"  
                                    name="username" 
                                    className="form-control" 
                                    id="username" 
                                    value={this.state.username}
                                    placeholder="Enter Username"
                                    // pattern = ".{3, 16}"
                                    // required
                                    onChange={this.changeInputHandler}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Email">Email address</label>
                                <input 
                                    type="email" 
                                    name="email"  
                                    value={this.state.email}
                                    className="form-control" 
                                    id="email" 
                                    placeholder="Enter email"
                                    // pattern = ".{4, 30}"
                                    // required
                                    onChange={this.changeInputHandler}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Password">Password</label>
                                <input 
                                    type="password" 
                                    name="password" 
                                    id="password"  
                                    value={this.state.password}
                                    className="form-control" 
                                    placeholder="Enter Password"
                                    // pattern = ".{6, 32}"
                                    // required
                                    onChange={this.changeInputHandler}/>
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

// функция передает auth в пропсы
const mapStateToProps = (state) => ({ auth: state.auth })
  
// теперь в поле props компонента будет функция register и обьект auth
export default connect(mapStateToProps, { register })(Register)