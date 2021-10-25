import React from 'react'
import './MessageCard.css'

function MessageCard(props) {
	return (
		<div className='message-container'>
			<h5 className='message-nickname'>{props.data.nickname}:</h5>
			{/* <img src='./avatar.jpg' /> */}
			<p className='message-content'>{props.data.content}</p>
			<span className='time-right'>{props.data.date}</span>
		</div>
	)
}

export default MessageCard
