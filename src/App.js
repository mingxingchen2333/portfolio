import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import MiUi from "./pages/MiUi";
import Redesign from "./pages/Redesign";
import MusicHunter from "./pages/MusicHunter";
import Kraftful from "./pages/Kraftful";



export default class App extends Component {

  render() {
    return (
        <header>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/#/about" component={About}/>
                <Route exact path="/#/miui" component={MiUi}/>
                <Route exact path="/redesign" component={Redesign}/>
                <Route exact path="/music" component={MusicHunter}/>
                <Route exact path="/kraftful" component={Kraftful}/>
            </Switch>
        </header>
    );
  }
}