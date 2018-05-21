import _ from "lodash";
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getUser } from '../actions/index';
import {Card, CardBody, CardImage} from 'mdbreact';
import profilepic from '../assets/avatar.png';

class ProfileCard extends Component {
  componentDidMount(){
     this.props.getUser()
  }
  renderUser(){
    return _.map(this.props.auth, user => {
      return (
          < CardBody key={user} >
            <p> {user.Name} </p>
          </CardBody>
      );
    })
  }
  render() {
    // console.log("looking for this",this.props.user)
    const pic = {margin: '1.7rem'}
    return (
      < Card reverse>
         < CardImage className = "img-fluid" src = {profilepic} style={pic}/>
        {this.renderUser()}
      </Card>
    );
  }
}

function mapStateToProps(state){
  return {
    auth: state.auth
  }
};

export default connect(mapStateToProps, 
  {getUser})(ProfileCard)
