import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './navbar';
import Landing from './Landing';
import Profile from './Profile';
import Game from './Event';
import CreateEvent from './EventCreate';




export default class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <NavBar/>
            <Route exact path="/" component={Landing} />
            <Route exact path="/game" component={Game} />
            <Route path="/profile" component={Profile} />
            <Route path="/game/new" component={CreateEvent} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
