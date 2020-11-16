// Contact.js

import React, { Component } from 'react';


class Users extends Component {

  state={
    token: ""
  }

  constructor(props){
    super(props) 
    try{ 
    let to = this.props.location.state.token;
    console.log(to)
    this.state = {
      token: to
    }}
    catch(err){
    }
  }



  render() {
    
    return (
        <div>
          <h2>Contact</h2>
          <p>{this.state.token}</p>
          <h1>hola</h1>
        </div>
        
    );
  }
}

export default Users;