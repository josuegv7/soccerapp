import React, {Component} from 'react';

export default class ProfileInfo extends Component {
  render() {
    return (
        <div class="row">
            <div class="col-md-3">
                <ul class="nav  md-pills pills-primary flex-column " role="tablist">
                    <li class="nav-item">
                        <i class="fa fa-trophy fa-3x amber-text d-inline" aria-hidden="true"></i>
                        <a class="nav-link active d-inline">Rank</a>
                    </li>
                    <li class="nav-item">
                        <i class="fa fa-futbol-o fa-3x d-inline" aria-hidden="true"></i>
                        <a class="nav-link d-inline">Game Created</a>
                    </li>
                    <li class="nav-item">
                        <i class="fa fa-calendar fa-3x d-inline" aria-hidden="true"></i>
                        <a class="nav-link d-inline">Games Attended</a>
                    </li>
                </ul>
            </div>
        </div>
    )
  }
}
