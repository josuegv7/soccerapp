import React, {Component} from 'react';
import { Card, CardBody, CardImage } from 'mdbreact';
import profilepic from '../assets/profile.jpg';

export default class ProfileCard extends Component {
  render() {
    const pic = {
      margin: '1.7rem'
    }
    return (
      <Card reverse>
          <CardImage className="img-fluid" src={profilepic} style={pic}/>
          <CardBody>
              <h3>Name</h3>
          </CardBody>
      </Card>
    );
  }
}
