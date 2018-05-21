// Show Form for review
import _ from "lodash";
import React from 'react';
import {connect} from 'react-redux';
import formFields from './formFields';
import {withRouter} from 'react-router-dom';
import * as actions from '../actions/index';
import { Card, CardBody, CardTitle, CardText, Button } from 'mdbreact';


const EventFormReview = ({ onCancel, eventFormValues, submitEvent, history }) => {
  const reviewEventFields = _.map(formFields, 
  ({ name, label })=>{
    return (
      <CardBody key = {name}>
        <CardTitle> 
          { label } 
        </CardTitle>
        <CardText> 
          {eventFormValues[name]}
        </CardText>  
      </CardBody>
    );
  });
  return (
    <div className='container'>
      <Card>
        <h5> Review Message Before Submitting </h5>
        { reviewEventFields }
        <Button block color = "warning" size = "sm" onClick = {onCancel}>
          Cancel
        </Button>
        <Button block color = "info" size = "sm" onClick = {() => submitEvent(eventFormValues, history)}>
          Send 
        </Button>
      < /Card>
    </div>
  );
};

function mapStateToProps(state) {
  return ({ eventFormValues: state.form.eventForm.values })
}
export default connect(mapStateToProps, actions)(withRouter(EventFormReview))
