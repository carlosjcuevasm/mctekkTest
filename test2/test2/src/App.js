// App.js

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import About from './components/About';
import Users from './components/Users';

import axios from 'axios'

const api = axios.create({
    baseURL: 'https://apidev.kanvas.dev/v1/'
})

class App extends Component {

    state = {
        comments: [],
        token : "",
        email:"",
        password:""
    }

    // constructor(){
    //     super();
    // }

    getComment = async () =>{
      try{
        let data = await api.get('/users').then(({ data }) => data);
        this.setState({comments: data})       
      } catch (err){
        alert("Fallo en conseguir comentarios")
      }
    }
    
   //Usada de prueba. Obligado necesita parametros
    
    loginUser = async(mail,pass) =>{
        try{
            let res = await api.post('/auth',{
                email: mail,
                password: pass
            },
            )
            this.setState({token: res.data.token})
        } catch (err){
            console.log(err)
            console.log ("Error en el inicio de sesion")
        }
    }

    createUser = async (first,last,mail,pass,veripass,company) =>{
        try{
            let res = await api.post('/users',{
                firstname: "Mauricio",
                lastname: "Perez",
                email: "mauricio@email.com",
                password: "mauricio123",
                verify_password: "mauricio123",
                default_company: "Bodega srl"}
                )            
            console.log(res)
            this.loginUser(mail,pass)
        } catch (err){
            console.log(err)
            console.log("Error en creacion de usuario")
        }
    }

  render() {
    return (
    <Router>
        <div>
          <h2>Welcome to test2, authentication shenanigans</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Login </Link></li>
            <li><Link to={'/contact'} className="nav-link">Users list</Link></li>
            <li><Link to={'/about'} className="nav-link">Create accout</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Login} />
              <Route path='/contact' component={Users} />
              <Route path='/about' component={About} />
          </Switch>
            </div>
      </Router>
    );
  }
}

export default App;