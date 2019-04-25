import $ from 'jquery';
import './style.scss';
import React from 'react';
import {
  BrowserRouter as Router, Route, NavLink, Switch,
} from 'react-router-dom';
import ReactDOM from 'react-dom';

$('#main').html('Here we go!');

// Test counter for Starterpack extracted to function
function counter() {
  let num = 0;
  setInterval(() => {
    num += 1;
    $('#counter').html(`You've been on this page for ${num} seconds;`);
  }, 1000);
}
// Test Components for SA 5 Routing
const About = (props) => {
  return <div> All there is to know about me </div>;
};
const Welcome = (props) => {
  return <div>Welcome</div>;
};
const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" exact>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/test/id1">test id1</NavLink></li>
        <li><NavLink to="/test/id2">test id2</NavLink></li>
      </ul>
    </nav>
  );
};
const Test = (props) => {
  return <div> ID: {props.match.params.id} </div>;
};
const Fallback = (props) => {
  return <div>URL Not Found</div>;
};
const App = (props) => {
  counter();
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/about" component={About} />
          <Route exact path="/test/:id" component={Test} />
          <Route component={Fallback} />
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('main'));
