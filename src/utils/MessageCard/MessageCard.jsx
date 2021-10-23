import React from 'react'

function MessageCard(props) {
	return (
		<li className='message-card list-group-item'>
			<div className='ms-2 bg-info'>
				<span style={{ color: 'green', fontWeight: 'bold', fontSize: 'large' }}>
					{props.data.nickname}:
				</span>
				<div className='fw-bold'>{props.data.content}</div>
			</div>
		</li>
	)
}

export default MessageCard
