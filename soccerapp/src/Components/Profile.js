import React, { Component} from 'react';
import ProfileCard from './profilecard';
import ProfileInfo from './profileinfo';


export default class  Profile extends Component {
  render() {
    return (
      <div class="container fluid">
        <div class='row'>
          <div class='col-12 col-sm-6 col-lg-8'>
            <ProfileCard/>
          </div>
          <div class="col-6 col-lg-4">
            <ProfileInfo/>
          </div>
        </div>
      </div>
    );
  }
}
