import React, { Component} from 'react';
import ProfileCard from './profilecard';
import EventList from './EventList';
import { Button } from 'mdbreact';
import { Link } from 'react-router-dom';


export default class  Profile extends Component {
  render() {
    const profile = {
      margin: '1.5rem auto'
    }
    const profileinfo ={
      margin: '0 0 0 2.5rem'
    }
    return (
      <div className="container fluid" style={profile}>
        <div className='row'>
          <div>
            <ProfileCard/>
          </div>
          <div style={profileinfo}>
            <Link to = "/game/check"> <Button > Create a Game </Button></Link>
          </div>
           < EventList / >
        </div>
      </div>
    );
  }
}
