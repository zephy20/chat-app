import React, { Component } from 'react';
import Chat from './chat'
import {subscribeToTimer} from './api';


class App extends Component {

constructor(props) {
	super(props);

	subscribeToTimer((err, timestamp)=>this.setState({
		timestamp
	}));
}

state = {
	timestamp: 'no timestamp yet'
};

  render() {
    return (
      <div>
            <Chat />
            <p>
            	This is a timer value: {this.state.timestamp}
            </p>
      </div>
    );
  }
}

export default App;
