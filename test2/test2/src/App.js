// App.js

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Users from './components/Users';


class App extends Component {

    // constructor(){
    //     super();
    // }

  render() {
    return (
    <Router>
        <div>
          <h2>Welcome to test2, authentication shenanigans</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Login </Link></li>
            <li><Link to={'/users'} className="nav-link">Users list</Link></li>
            <li><Link to={'/register'} className="nav-link">Create accout</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Login} />
              <Route path='/users' component={Users} />
              <Route path='/register' component={Register} />
          </Switch>
            </div>
      </Router>
    );
  }
}

export default App;