import React from 'react'
import MessageCardWS from '../MessageCardWS/MessageCardWS'
import '../../styles/MessageList.css'

function MessageListWS(props) {
	return (
		<div className='message-card'>
			{props.messages.map(mess => (
				<div className='message-card-ws' key={mess.id}>
					{mess.event === 'connection' ? (
						<div className='connection-message'>
							User{' '}
							<span
								style={{
									color: 'green',
									fontWeight: 'bold',
									fontSize: 'large',
								}}>
								{mess.username}
							</span>{' '}
							has joined the chat.
						</div>
					) : (
						<MessageCardWS data={mess} />
					)}
				</div>
			))}
		</div>
	)
}

export default MessageListWS
