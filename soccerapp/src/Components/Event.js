import React, { Component } from "react";

export default class Event extends Component {
  render() {
    return (
      <div class="d-flex justify-content-center align-self-center">
        <div class="row">
          <div class="col-md-8">
            <div class="btn-group col-md-8" data-toggle="buttons">
              <label class="btn btn-default form-check-label">
                <input
                  class="form-check-input"
                  type="radio"
                  autocomplete="off"
                />{" "}
                Going
              </label>
              <label class="btn btn-default form-check-label ml-3">
                <input
                  class="form-check-input"
                  type="radio"
                  autocomplete="off"
                />{" "}
                Not Going
              </label>
              <button type="button" class="btn btn-info btn-rounded ml-3  ">
                Submit
              </button>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="card">
                  <div class="card-header success-color lighten-1 white-text">
                    Attending
                  </div>
                  <div class="card-body">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">Buffon</li>
                      <li class="list-group-item">Cannavaro</li>
                      <li class="list-group-item">Pirlo</li>
                      <li class="list-group-item">Del Piero</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card">
                  <div class="card-header danger-color lighten-1 white-text">
                    Not Attending
                  </div>
                  <div class="card-body">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">Cech</li>
                      <li class="list-group-item">Nesta</li>
                      <li class="list-group-item">Ramsey</li>
                      <li class="list-group-item"> ME </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">GOOGLE MAP</div>
        </div>
      </div>
    );
  }
}
