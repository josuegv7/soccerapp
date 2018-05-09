import React, {Component} from 'react';
import { reduxForm } from 'redux-form';
import CreateEvent from './EventCreate';
import EventReview from './EventReview';


class EventCheck extends Component {
  state = { showEventReview: false};

  renderContent() {
    if (this.state.showEventReview === true){
      return <EventReview
        onCancel={() => this.setState({ showEventReview: false})}
      />
    }
    return <CreateEvent 
            onEventSubmit = { () => this.setState({showEventReview: true}) }
    />;
  }

  render(){
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}


export default reduxForm({
  form:'eventForm'
})(EventCheck);
 