// Show Form for review
import React from 'react';
import { connect } from 'react-redux';


const EventFormReview = ({ onCancel, eventFormValues }) => {
  return (
    <div>
      <h5> Review Message Before Submitting </h5>
      <div>
        <label>Date</label>
        <div>{eventFormValues.gamedate}</div>
      </div>
      <button
        className=""
        onClick={onCancel}
      >
          Cancel
      </button>
    </div>
  );
};

function mapStateToProps(state){
  return {  eventFormValues: state.form.eventForm.values  }
}

export default connect(mapStateToProps)(EventFormReview);
