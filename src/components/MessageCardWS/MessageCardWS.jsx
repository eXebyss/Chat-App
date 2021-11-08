import React from 'react'
import '../../styles/MessageCard.css'
import avatar from '../../images/avatar-minion.png'

function MessageCardWS(props) {
	const isoDate = props.data.date
	const minutes = new Date(isoDate).getMinutes()
	const hours = new Date(isoDate).getHours()
	const day = new Date(isoDate).getDate()
	const month = new Date(isoDate).getMonth() + 1
	const year = new Date(isoDate).getFullYear()
	const date = `${hours}:${minutes < 10 ? '0' + minutes : minutes} ${month}/${day}/${year}`

	return (
		<div className='message-container'>
			<div className='logo-nickname'>
				<img src={avatar} alt='Avatar' />
				<h5 className='message-nickname'>{props.data.username}</h5>
			</div>
			<p className='message-content'>{props.data.message}</p>
			<span className='time-right'>{date}</span>
		</div>
	)
}

export default MessageCardWS
