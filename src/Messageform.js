import React, { Component } from 'react';


class Messageform extends Component {


	getInitialState(){
		return {text:''};
	}

	submitMessage(e){
		e.preventDefault();
		var message = {
			text : this.state.text
		}
		this.props.sendMessage(message);
		this.setState({
			text: ''
		});
	}

	changeHandler(e) {
		this.setState({
			text: e.target.value
		});
	}

	render(){
		return(
			<div>
				
			)
	}
}