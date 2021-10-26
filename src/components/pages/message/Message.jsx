import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
	getMessages,
	getMessagesLongPolling,
	createMessage,
} from '../../../actions/message.action'
import MessageList from '../../messageList/MessageList'
import Input from '../../../utils/input/Input'
import './Message.css'

const Message = () => {
	const userInfo = useSelector(state => state.user.currentUser)
	const messages = useSelector(state => state.messages.currentMessages)
	const messagesActive = useSelector(state => state.messages.isActive)
	const [content, setContent] = useState('')
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getMessages())
	}, [])

	useEffect(() => {
		subscribe()
	}, [])

	const subscribe = async () => {
		try {
			await dispatch(getMessagesLongPolling())
			subscribe()
		} catch (e) {
			console.log(e, 'Error in subscribe method 1!')
			setTimeout(() => {
				subscribe()
			}, 500)
		}
	}

	const handleClickToCreateMessages = () => {
		createMessage(userInfo.nickname, content)
		setContent('')
	}

	return (
		<div className='messages'>
			<div className='create-message'>
				<div className='mb-3'>
					<h5>Long Polling</h5>
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
					onClick={handleClickToCreateMessages}>
					Send
				</button>
			</div>
			<div className='messages-all'>
				<button
					type='button'
					className='btn btn-primary'
					onClick={() => dispatch(getMessages())}>
					Refresh Messages
				</button>
			</div>
			<div className='message-list'>
				{messagesActive ? <MessageList messages={messages} /> : ''}
			</div>
		</div>
	)
}

export default Message
