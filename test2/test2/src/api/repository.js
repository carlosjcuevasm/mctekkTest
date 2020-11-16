import axios from 'axios'
import { Component } from 'react'

const api = axios.create({
    baseURL: 'https://apidev.kanvas.dev/v1/'
})
        
export  async function  loginUser(mail,pass) {
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


    export function myChangeHandler (event)  {
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
export function  onSubmitHandler (event) 
    {   
        let mail = this.state.email
        let pass = this.state.password
        event.preventDefault();
        this.loginUser(mail, pass)
    }
    