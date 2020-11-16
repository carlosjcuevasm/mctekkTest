import { Component } from 'react';
import {createUser,loginUser,myChangeHandler,onSubmitHandler,onSubmitRegister} from '../api/repository'
import {Redirect} from 'react-router-dom'

class Register extends Component {

    state ={
        name:"",
        lname:"",
        email:"",
        password:"",
        vpassword:"",
        company:"",
        token: "",
        redirect: false
    }

    constructor(props){
        super(props);

        this.createUser = createUser.bind(this)
        this.loginUser = loginUser.bind(this)
        this.myChangeHandler = myChangeHandler.bind(this)
        this.onSubmitHandler = onSubmitHandler.bind(this)
        this.onSubmitRegister = onSubmitRegister.bind(this)
    }

  render() {
    if (this.state.redirect){
        return <Redirect to={{pathname:'/users', state:{token:this.state.token}}}/>
      }
    return (
        <div>
          <h2>Registrate</h2>
          <form onSubmit={this.onSubmitRegister}>
          <label>
                Name:
                <input type="text" name="name" onChange={this.myChangeHandler}/>
            </label>
            <label>
                Last name:
                <input type="text" name="lname" onChange={this.myChangeHandler}/>
            </label>  
            <label>
                Email:
                <input type="email" name="email" onChange={this.myChangeHandler}/>
            </label>
            <label>
                Pass:
                <input type="password" name="password" onChange={this.myChangeHandler}/>
            </label>
            <label>
                Verify-Password:
                <input type="password" name="vpassword" onChange={this.myChangeHandler}/>
            </label>
            <label>
                Company:
                <input type="text" name="company" onChange={this.myChangeHandler}/>
            </label>

            <input type="submit" value="Crear usuario"/>
            </form> 
        </div>
    );
  }
}

export default Register;