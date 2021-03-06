import React, { Component } from 'react';
import {loginUser,myChangeHandler,onSubmitHandler} from '../api/repository'
import {Redirect} from 'react-router-dom'



class Login extends Component {

  state = {
    comments: [],
    token : "",
    email:"",
    password:"",
    redirect:false
}



constructor(props){
  super(props);

  this.onSubmitHandler = onSubmitHandler.bind(this);
  this.myChangeHandler = myChangeHandler.bind(this);
  this.loginUser = loginUser.bind(this)
  
}


  render() {
    if (this.state.redirect){
      return <Redirect to={{pathname:'/users', state:{token:this.state.token}}}/>
    }
    return (
        <div>
          <h2>Bienvenido, inicia sesion</h2>
          <form onSubmit={this.onSubmitHandler}>
            <label>
                email:
                <input type="email" name="email" onChange={this.myChangeHandler}/>
            </label>
            <label>
                Pass:
                <input type="password" name="password" onChange={this.myChangeHandler}/>
            </label>
            <input type="submit" value="Iniciar sesion"/>
            </form> 
        </div>
        
    );
  }
}

export default Login;