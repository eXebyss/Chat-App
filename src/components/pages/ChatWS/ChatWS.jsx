import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MessageListWS from '../../messageListWS/MessageListWS'
import Input from '../../../utils/input/Input'
import { API_URL2 } from '../../../config'
import {
	setMessagesWS,
	setConnected,
} from '../../../reducers/messageWS.reducer'
import '../../../styles/Chat.css'

const ChatWS = () => {
	const userInfo = useSelector(state => state.user.currentUser)
	const messagesWS = useSelector(state => state.messagesWS.currentMessagesWS)
	const connected = useSelector(state => state.messagesWS.connected)
	const [content, setContent] = useState('')
	const socket = useRef()
	const dispatch = useDispatch()

	useEffect(() => {
		connect()
	}, [])

	const connect = () => {
		socket.current = new WebSocket(`${API_URL2}websocket`)

		socket.current.onopen = () => {
			dispatch(setConnected(true))
			const message = {
				event: 'connection',
				username: userInfo.nickname,
				id: Date.now(),
			}
			socket.current.send(JSON.stringify(message))
			console.log('Socket is opened')
		}
		socket.current.onmessage = event => {
			const message = JSON.parse(event.data)
			dispatch(setMessagesWS(message))
		}
		socket.current.onclose = () => {
			dispatch(setConnected(false))
			console.log('Socket is closed')
		}
		socket.current.onerror = () => {
			console.log('Socket error 1')
		}
	}

	const sendMessage = () => {
		const message = {
			event: 'message',
			username: userInfo.nickname,
			message: content,
			date: new Date(Date.now()),
			id: Date.now(),
		}
		socket.current.send(JSON.stringify(message))
	}

	const handleClickToCreateMessagesWS = () => {
		sendMessage()
		setContent('')
	}

	if (!connected) {
		return (
			<div className='messages'>
				<button className='btn btn-primary' onClick={connect}>
					Login
				</button>
			</div>
		)
	}

	return (
		<div className='messages'>
			<div className='create-message'>
				<div className='mb-3'>
					<h5>
						Web Socket with{' '}
						<span
							style={{
								color: 'indigo',
								fontWeight: 'bold',
							}}>
							Redux
						</span>
					</h5>
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
