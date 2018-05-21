import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";

import validateEmails from "../utils/validateEmail";
import EventField from './EventField';
import formFields from './formFields';


class CreateEvent extends Component {
  renderFields() {
    return _.map(formFields, field => {
      return(
        <Field key = {field.name} 
        component = {EventField} 
        type = {field.type} 
        label = {field.label}
        name = {field.name}
        />
      )
    });
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-8">
            <div className="modal-dialog cascading-modal" role="document">
              <div className="modal-content">
                {/* Header */}
                <div className="modal-header info-color white-text">
                  <h4 className="title">
                    <i className="fa fa-pencil" />
                    Create a Game
                  </h4>
                </div>
                {/*Body*/}
                <div className="modal-body">
                  <form onSubmit={this.props.handleSubmit(this.props.onEventSubmit)} >
                   {this.renderFields()}
                    <br />
                    {/* BUTTONS */}
                    <div className="text-center mt-4 mb-2">
                      <Link to="/profile" className="btn btn-danger">
                        Cancel
                        <i className="fa fa-window-close-o" aria-hidden="true" />
                      </Link>
                      <button className="btn btn-info" type="submit">
                        Send
                        <i className="fa fa-send ml-2" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  errors.recipients = validateEmails(values.recipients || '');
  _.each(formFields, ({
    name
  }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value';
    }
  });
  return errors;
}

export default reduxForm({
  validate: validate,
  form: 'eventForm',
  destroyOnUnmount: false
})(CreateEvent);
