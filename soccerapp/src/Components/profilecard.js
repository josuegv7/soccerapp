import React, {Component} from 'react';
import { Card, CardBody, CardImage, CardTitle} from 'mdbreact';


export default class ProfileCard extends Component {
  render() {
    return (
      <Card cascade>
          <CardImage className="img-fluid-narrower" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" />
          <CardBody>
              <CardTitle>Name</CardTitle>
              <CardTitle>Location</CardTitle>
              <CardTitle><i class="fa fa-users" aria-hidden="true">Friends</i></CardTitle>
          </CardBody>
      </Card>
    );
  }


}
