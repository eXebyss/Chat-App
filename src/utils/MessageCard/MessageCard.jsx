import React from 'react'
import './MessageCard.css'
import avatar from '../../images/avatar-minion.png'

function MessageCard(props) {
	const isoDate = props.data.date
	const minutes = new Date(isoDate).getMinutes()
	const hours = new Date(isoDate).getHours()
	const day = new Date(isoDate).getDate()
	const month = new Date(isoDate).getMonth() + 1
	const year = new Date(isoDate).getFullYear()
	const date = `${hours}:${minutes} ${month}/${day}/${year}`

	return (
		<div className='message-container'>
			<div className='logo-nickname'>
				<img src={avatar} alt='Avatar' />
				<h5 className='message-nickname'>{props.data.nickname}</h5>
			</div>
			<p className='message-content'>{props.data.content}</p>
			<span className='time-right'>{date}</span>
		</div>
	)
}

export default MessageCard
