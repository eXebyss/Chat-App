import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MessageListWS from '../../messageListWS/MessageListWS'
import { io } from 'socket.io-client'
import {
	setMessagesWS,
	setConnected,
} from '../../../reducers/messageWS.reducer'
import Input from '../../../utils/input/Input'
import { API_URL3 } from '../../../config'
import '../../../styles/Chat.css'

const ChatSocketIO2 = () => {
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
		socket.current = io(`${API_URL3}`)

		socket.current.on('connect', () => {
			dispatch(setConnected(true))
			console.log(
				'Socket is opened'
				// `Statement is: ${socket.current.connected},`,
				// `current id: ${socket.current.id}`
			)
			const message = {
				event: 'connection',
				username: userInfo.nickname,
				id: Date.now(),
			}
			socket.current.emit('chat-message', JSON.stringify(message))
		})

		socket.current.on('chat-message', data => {
			const message = JSON.parse(data)
			// console.log(message)
			dispatch(setMessagesWS(message))
		})

		socket.current.on('close', reason => {
			console.log(reason)
		})

		socket.current.on('error', error => {
			console.log(error)
		})
	}

	const sendMessage = async () => {
		const message = {
			event: 'message',
			username: userInfo.nickname,
			message: content,
			date: new Date(Date.now()),
			id: Date.now(),
		}
		socket.current.emit('chat-message', JSON.stringify(message))
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
						Socket.IO(WebSocket) with{' '}
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

export default ChatSocketIO2
