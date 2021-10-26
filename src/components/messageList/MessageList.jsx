import React from 'react'
import MessageCard from '../../utils/MessageCard/MessageCard'
import './MessageList.css'

function MessageList(props) {
	return (
		<div className='message-card'>
			{props.messages.map(data => {
				return <MessageCard key={data._id} data={data} />
			})}
		</div>
	)
}

export default MessageList
