import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './polyfills.jsx';
import App from '../../views/app.jsx';

// ReactDOM.render(
//   <Demo />,
//   document.getElementById('root'),
// );

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

// ReactDOM.render((
//   <Router>
//     <Route component={Layout}>
//       <Route path="/" component={Demo} />
//       <Route path="/login" component={Login} />
//     </Route>
//     {/* <Route component={EmptyLayout}>
//       <Route path="/sign-in" component={SignIn} />
//     </Route>
//     <Route path="*" component={NotFound}/> */}
//   </Router>
// ), document.getElementById('root'));
