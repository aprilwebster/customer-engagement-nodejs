import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Demo from './demo.jsx';
import Login from './login.jsx';

const App = () =>
  <Router>
    <div>
      <h2>Welcome to React Router Tutorial</h2>
      <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/login'}>Login</Link></li>
      </ul>
      <hr />
      <Switch>
        <Route exact path="/" component={Demo} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  </Router>;

export default App;
