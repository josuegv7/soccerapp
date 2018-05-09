import React, {Component} from 'react';

export default class ProfileInfo extends Component {
  render() {
    return (
        <div className="row">
            <div className="col-md-4">
                <ul className="nav  md-pills pills-primary flex-column " role="tablist">
                    <li className="nav-item">
                        <i className="fa fa-trophy fa-3x amber-text d-inline" aria-hidden="true"></i>
                        <a className="nav-link active d-inline">Rank</a>
                    </li>
                    <li className="nav-item">
                        <i className="fa fa-futbol-o fa-3x d-inline" aria-hidden="true"></i>
                        <a className="nav-link d-inline">Game Created</a>
                    </li>
                    <li className="nav-item">
                        <i className="fa fa-calendar fa-3x d-inline" aria-hidden="true"></i>
                        <a className="nav-link d-inline">Games Attended</a>
                    </li>
                </ul>
            </div>
        </div>
    )
  }
}
