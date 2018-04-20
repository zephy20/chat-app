import React, { Component } from 'react';
//import io from "socket.io-client"
import './App.css';
import fire from './fire';
import Message from './Message';
import Messagelist from './Messagelist'
import {socket} from 'socket.io';




class Chat extends Component{


	constructor(props){
		super(props);

		this.state = {
			newMessage:"",
			messages:[]
		};

		
	}

	componentDidMount(){
		socket.on('send:message',this.getMessage);

	}


	getMessage(message){
	var {messages} = this.state;
	messages.push(message);
	this.setState({messages});
	}



	submitMessage(message) {
		var {messages} = this.state;
		messages.push(message);
		this.setState({messages});
		socket.emit('send:message', message);
	}

	render(){
		return(
			<div className="container">
				<div className="row">
					<div className="col-4">
						<div className="card">
							<div className="card-body">
								<div className="card-title">Chat App</div>
								<hr/>
								<div className="messages">
									<Messagelist
										messages={this.state.messages}
									/>
									
								</div>
							</div>
							<div className="card-footer">
								{/*<input type ="text" placeholder="Username" className="form-control" />
								<br/>
								<input type ="text" placeholder="Message" className="form-control" />
								<br/>*/}
								<input type="text" placeholder ="Type here.." class = "form-control" />
								<br/>
								<button className="btn btn-primary form-control" onClick={()=>{
									this.submitMessage();
									}}>Send</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			);
	}
}

export default Chat;