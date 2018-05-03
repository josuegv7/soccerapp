import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
// import _ from "lodash";
import validateEmails from "../utils/validateEmail";

class CreateEvent extends Component {
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
                  <form
                    onSubmit={(this.props.onEventSubmit)}
                  >
                    {/* DATE */}
                    <label>Date</label>
                    <Field
                      type="date"
                      name="gamedate"
                      component="input"
                      className="form-control form-control-sm"
                    />
                    <br />
                    {/* TIME */}
                    <label>Time</label>
                    <Field
                      type="time"
                      name="gametime"
                      component="input"
                      className="form-control form-control-sm"
                    />
                    <br />
                    {/* ADDRESS */}
                    <label>Location:</label>
                    <Field
                      type="text"
                      name="address"
                      component="input"
                      className="form-control form-control-sm"
                    />
                    <br />
                    {/* SEND TO */}
                    <label>To:</label>
                    <Field
                      type="text"
                      name="recipients"
                      component="input"
                      className="form-control form-control-sm"
                    />
                    <br />
                    {/* MESSAGE */}
                    <label>Your message</label>
                    <Field
                      type="textarea"
                      name="message"
                      component="input"
                      className="form-control form-control-sm"
                    />
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

// function validate(values){
//   const errors = {};
//  erros.recipients = validateEmails(values.recipients || '');
//
//   _.each(FIELDS, ({name}) => {
//     if (!values[name]){
//       errors[name] ='You must provide a value';
//     }
//   });
//
//   return errors;
// }

export default reduxForm({
  // validate: validate,
  form: 'eventForm',
  destoryOnUnmount: false
})(CreateEvent);
