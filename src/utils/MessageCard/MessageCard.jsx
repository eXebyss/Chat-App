import React from 'react'
import './MessageCard.css'
import avatar from '../../images/avatar-minion.png'

function MessageCard(props) {
	const isoDate = props.data.date
	const date = new Date(isoDate).toLocaleString()

	return (
		<div className='message-container'>
			<img src={avatar} alt='Avatar' />
			<p className='message-content'>{props.data.content}</p>
			<h5 className='message-nickname'>{props.data.nickname}</h5>
			<span className='time-right'>{date}</span>
		</div>
	)
}

export default MessageCard
