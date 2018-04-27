import React, {Component} from 'react';
import { Card, CardBody, CardImage, CardTitle} from 'mdbreact';
import profilepic from '../assets/profile.jpg'

export default class ProfileCard extends Component {
  render() {
    const pic = {
      margin: '1.7rem'
    }
    return (
      <Card reverse>
          <CardImage className="img-fluid" src={profilepic} style={pic} />
          <CardBody>
              <h3>Name</h3>
              <h5>Location</h5>
              <h5><i class="fa fa-users" aria-hidden="true">Friends</i></h5>
          </CardBody>
      </Card>
    );
  }
}
