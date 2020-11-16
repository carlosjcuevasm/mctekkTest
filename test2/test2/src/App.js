// App.js

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import axios from 'axios'

const api = axios.create({
    baseURL: 'https://apidev.kanvas.dev/v1/'
})

class App extends Component {

    state = {
        comments: [],
        token : ""
    }

    constructor(){
        super();
        
        
    }

    getComment = async () =>{
      try{
        let data = await api.get('/users').then(({ data }) => data);
        this.setState({comments: data})       
      } catch (err){
        alert("Fallo en conseguir comentarios")
      }
    }
    
   
    loginUser = async() =>{
        try{
            let res = await api.post('/auth',{
                email: "mauricio@email.com",
                password:"mauricio123"
            },
            )
            console.log(res)
            console.log(res.data.token)
            this.setState({token: res.data.token})
            console.log(this.state.token)

            
        } catch (err){
            console.log(err)
        }
    }
    loginUser = async(email,password) =>{
        try{
            let res = await api.post('/auth',{
                email: "mauricio@email.com",
                password:"mauricio123"
            },
            )
            console.log(res)
            console.log(res.data.token)
            this.setState({token: res.data.token})
            console.log(this.state.token)

            
        } catch (err){
            console.log(err)
        }
    }

    getAllUsers = async() =>{
        try{
            let res = await api.get('/users',{
                
            headers:{
                'Authorization': this.state.token
            }
            }
            )
        }
        catch(err){
            console.log(err)
        }
    }

    createUser = async () =>{
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
        } catch (err){
            console.log(err)
        }
    }

  render() {
    return (
    <Router>
        <div>
          <h2>Welcome to React Router Tutorial</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} />
          </Switch>
          {this.state.comments.map(comments => <h1 key ={comments.id}>{comments.body}</h1>)}
          <button onClick={this.createUser}>Crear usuario</button>
          <button onClick={this.loginUser}>Iniciar Sesion</button>
          <button onClick={this.getAllUsers}>Listar Usuarios</button>
        </div>
      </Router>
    );
  }
}

export default App;