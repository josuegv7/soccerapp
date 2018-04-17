import React, { Component } from 'react';
import NavBar from './navbar';
import Profile from './Profile';
import Event from './Event';
import CreateEvent from './EventCreate';



class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        {/* <Profile/> */}
        {/* <Event/> */}
        <CreateEvent/>
      </div>
    );
  }
}

export default App;
