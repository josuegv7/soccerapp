import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

import NavBar from './navbar';
import Landing from './Landing';
import Profile from './Profile';
import Game from './Event';
import CreateEvent from './EventCreate';
import EventReview from './EventReview';
import EventCheck from './EventCheck';



class App extends Component {
  componentDidMount(){
    this.props.getUser();
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <NavBar/>
            <Route exact path="/" component={Landing} />
            <Route exact path="/game" component={Game} />
            <Route path="/profile" component={Profile} />
            <Route path="/game/check" component={EventCheck} />
            {/* <Route path="/game/review" component={EventCheck} />             */}
            {/* <Route path="/game/new" component={CreateEvent} /> */}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
