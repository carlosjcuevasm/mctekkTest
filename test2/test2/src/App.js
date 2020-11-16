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
        token : "",
        email:"",
        password:""
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
    
   //Usada de prueba. Obligado necesita parametros
    loginUser = async() =>{
        try{
            alert(document.getElementById("mail"))
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

    myChangeHandler = (event) => {
        switch(event.target.name){
            case "email":
                this.setState({email: event.target.value}); 
                break;
            case "password":
                this.setState({password: event.target.value}); 
                break;
            default:

        }
    }
    onSubmitHandler = (event) =>
    {   
        let mail = this.state.email
        let pass = this.state.password
        event.preventDefault();
        alert(this.state.email + '\n'+ this.state.password)
        this.loginUser(mail, pass)
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
            </div>
      </Router>
    );
  }
}

export default App;