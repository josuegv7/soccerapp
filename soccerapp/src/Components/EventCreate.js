import React, {Component} from 'react';

export default class CreateEvent extends Component {
  render() {
    return(
      <div class="container-fluid">
        <div class="row">
            <div class="col-12 col-sm-6 col-lg-8">
                    <div class="modal-dialog cascading-modal" role="document">
                        <div class="modal-content">

                            {/* Header */}
                            <div class="modal-header info-color white-text">
                                <h4 class="title">
                                    <i class="fa fa-pencil"></i>Create Event</h4>
                            </div>
                            {/*Body*/}
                            <div class="modal-body">
                                {/* DATE */}
                                <label for="defaultFormNameModalEx">Date</label>
                                <input type="date" id="defaultFormNameModalEx" class="form-control form-control-sm"/>
                                <br/>
                                {/* TIME */}
                                <label for="defaultFormNameModalEx">Time</label>
                                <input type="time" id="defaultFormNameModalEx" class="form-control form-control-sm"/>
                                <br/>
                                {/* ADDRESS */}
                                <label for="defaultFormEmailModalEx">Location:</label>
                                <input type="address" id="defaultFormEmailModalEx" class="form-control form-control-sm"/>
                                <br/>
                                {/* SEND TO */}
                                <label for="defaultFormEmailModalEx">To:</label>
                                <input type="email" id="defaultFormEmailModalEx" class="form-control form-control-sm"/>
                                <br/>

                                {/* MESSAGE */}
                                <label for="defaultFormMessageModalEx">Your message</label>
                                <textarea type="text" id="defaultFormMessageModalEx" class="md-textarea form-control"></textarea>
                                <div class="text-center mt-4 mb-2">
                                    <button class="btn btn-info">Send
                                        <i class="fa fa-send ml-2"></i>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
            </div>

        </div>
      </div>
    );
  }
}
