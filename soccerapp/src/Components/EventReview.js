// Show Form for review
import _ from "lodash";
import React from 'react';
import {connect} from 'react-redux';
import formFields from './formFields';
import {
  Card,
  CardBody,
  CardTitle,
  CardText
} from 'mdbreact';


const EventFormReview = ({ onCancel, eventFormValues }) => {
  const reviewEventFields = _.map(formFields, 
  ({ name, label })=>{
    return (

      < CardBody key = {name} >
        < CardTitle > { label } < /CardTitle>
        <CardText > 
          {
            eventFormValues[name]
          }
        </CardText>  
      </CardBody>


  
    );
  });
  return (
    <div>
      < Card cascade >
        <h5> Review Message Before Submitting </h5>
        { reviewEventFields }
        <button className = "warning" onClick={onCancel}>
            Cancel
        </button>
      < /Card>
    </div>
  );
};

function mapStateToProps(state){
  return {  
    eventFormValues: state.form.eventForm.values  
  }
}

export default connect(mapStateToProps)(EventFormReview);
