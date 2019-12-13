import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";



export default class App extends Component {

  render() {
    return (
        <header>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
            </Switch>
        </header>
    );
  }
}