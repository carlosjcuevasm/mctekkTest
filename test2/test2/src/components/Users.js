// Contact.js

import React, { Component } from 'react';
import {getAllUsers} from '../api/repository'

import {Redirect} from 'react-router-dom'


class Users extends Component {

  state={
    token: "",
    users:[],
    redirect: false
  }

  constructor(props){
    super(props) 

    //Updated, using local storage.
    //This try chatch could be removed, but stable so wont. Finished for now.
    try{ 
    let to = this.props.location.state.token;
    this.state = {
      token: to,
      users: []
    }}catch(err){}

    this.getAllUsers = getAllUsers.bind(this)
    this.getAllUsers();

  }

  

  render() {
    if(this.state.redirect){
      return <Redirect to={{pathname:'/', state:{token:this.state.token}}}/>
    }

    return (
        <div>
          <p>{this.state.users}</p>
        </div>
        
    );
  }
}

export default Users;