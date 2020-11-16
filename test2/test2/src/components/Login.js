// Home.js
import React, { Component } from 'react';
import {loginUser,myChangeHandler,onSubmitHandler} from '../api/repository'

class Login extends Component {

  state = {
    comments: [],
    token : "",
    email:"",
    password:""
}



constructor(props){
  super(props);

  this.onSubmitHandler = onSubmitHandler.bind(this);
  this.myChangeHandler = myChangeHandler.bind(this);
  this.loginUser = loginUser.bind(this)
  
}


  render() {
    return (
        <div>
          <h2>Bienvenido, inicia sesion</h2>
          <form onSubmit={this.onSubmitHandler}>
            <label>
                Name:
                <input type="email" name="email" onChange={this.myChangeHandler}/>
            </label>
            <label>
                Pass:
                <input type="password" name="password" onChange={this.myChangeHandler}/>
            </label>
            <input type="submit" value="Iniciar sesion"/>
            </form>
            <h1>Hola, tu correo es {this.state.email}</h1>
            <h1>Hola, tu pass es {this.state.password}</h1>
            <button onClick={onSubmitHandler}>HOLA</button>
            
        </div>
        
    );
  }
}

export default Login;