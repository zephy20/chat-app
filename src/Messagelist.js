import React, { Component } from 'react';
import Message from './Message'


class Messagelist extends Component{
	render(){
		return(
				<div>
					{
						this.props.messages.map((message,i)=>{
							return(
									<Message
										key = {i}
										text = {message.text}
									/>
								)
						})
					}
				</div>
			);
	}
}

export default Messagelist;