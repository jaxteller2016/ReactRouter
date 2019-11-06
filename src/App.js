import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route, NavLink} from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <ul className="Header">
            <li><NavLink activeClassName="active" exact to="/">Home</NavLink></li>
            <li><NavLink activeClassName="active" to="/users">Users</NavLink></li>
            <li><NavLink activeClassName="active" to="/contact">Contact</NavLink></li>
        </ul>
        <Switch>
             <Route exact path="/" component={Home}/>
             <Route path="/users" component={Users}/>
             <Route path="/contact" component={Contact}/>
        </Switch>
      </div>)
}
    class Home extends React.Component{
        render() {
            return <div>
                <h1>Hello World1!</h1>
                <p>This is my first React Component.</p>
            </div>
        }
    }
    class Users extends React.Component{
        render() {
            return <div>
                <h1>Hello World2!</h1>
                <p>This is my second React Component.</p>
            </div>
        }
    }
    class Contact extends React.Component{
        render() {
            return <div>
                <h1>Hello World3!</h1>
                <p>This is my third React Component.</p>
            </div>
        }
    }

export default App;
