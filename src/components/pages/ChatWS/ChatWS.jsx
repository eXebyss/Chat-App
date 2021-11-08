import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { connect, sendMessage } from '../../../actions/messageWS.action'
import MessageListWS from '../../messageListWS/MessageListWS'
import Input from '../../../utils/input/Input'
import { API_URL2 } from '../../../config'
import '../../../styles/Chat.css'

const ChatWS = () => {
	const userInfo = useSelector(state => state.user.currentUser)
	const messagesWS = useSelector(state => state.messagesWS.currentMessagesWS)
	const connected = useSelector(state => state.messagesWS.connected)
	const [content, setContent] = useState('')
	const dispatch = useDispatch()

	const socket = new WebSocket(`${API_URL2}ws`)

	useEffect(() => {
		dispatch(connect(socket, userInfo.nickname))
	}, [])

	const handleClickToCreateMessagesWS = () => {
		sendMessage(socket, userInfo.nickname, content)
		setContent('')
	}

	if (!connected) {
		return (
			<div className='center'>
				<div className='form'>
					<button onClick={dispatch(connect(socket, userInfo.nickname))}>
						Login
					</button>
				</div>
			</div>
		)
	}

	return (
		<div className='messages'>
			<div className='create-message'>
				<div className='mb-3'>
					<h5>Web Socket</h5>
					<label className='form-label'>New Message</label>
					<Input
						value={content}
						setValue={setContent}
						type='text'
						className='form-control'
						placeholder='Enter your message...'
					/>
				</div>
				<button
					type='button'
					className='btn btn-primary'
					onClick={handleClickToCreateMessagesWS}>
					Send
				</button>
			</div>
			<div className='message-list'>
				<MessageListWS messages={messagesWS} />
			</div>
		</div>
	)
}

export default ChatWS
