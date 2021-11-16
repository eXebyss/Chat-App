import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { io } from 'socket.io-client'
import Input from '../../../utils/input/Input'
import { API_URL3 } from '../../../config'
import '../../../styles/Chat.css'

const ChatSocketIO = () => {
	const userInfo = useSelector(state => state.user.currentUser)
	const [messages, setMessages] = useState([])
	const [connected, setConnected] = useState(false)
	const [content, setContent] = useState('')
	const socket = useRef()

	useEffect(() => {
		connect()
	}, [])

	const connect = () => {
		socket.current = io(`${API_URL3}`)

		socket.current.on('connect', () => {
			setConnected(true)
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
			setMessages(prev => [message, ...prev])
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
						Socket.IO(WebSocket) without{' '}
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
				<button type='button' className='btn btn-primary' onClick={sendMessage}>
					Send
				</button>
			</div>
			<div className='messages message-list'>
				{messages.map(mess => (
					<div key={mess.id}>
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
								is connected
							</div>
						) : (
							<div className='message'>
								<span
									style={{
										fontWeight: 'bold',
										fontSize: 'large',
									}}>
									{mess.username}
								</span>{' '}
								: {mess.message}
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	)
}

export default ChatSocketIO
