import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Input from '../../../utils/input/Input'
import { API_URL2 } from '../../../config'
import '../../../styles/Chat.css'

const ChatWS = () => {
	const userInfo = useSelector(state => state.user.currentUser)
	const [messages, setMessages] = useState([])
	const [connected, setConnected] = useState(false)
	const [content, setContent] = useState('')
	const socket = useRef()

	useEffect(() => {
		connect()
	}, [])

	const connect = () => {
		socket.current = new WebSocket(`${API_URL2}websocket`)

		socket.current.onopen = () => {
			setConnected(true)
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
			setMessages(prev => [message, ...prev])
		}
		socket.current.onclose = () => {
			setConnected(false)
			console.log('Socket is closed')
		}
		socket.current.onerror = () => {
			console.log('Socket error 1')
		}
	}

	const sendMessage = async () => {
		const message = {
			event: 'message',
			username: userInfo.nickname,
			message: content,
			date: new Date(Date.now()),
			id: Date.now(),
		}
		socket.current.send(JSON.stringify(message))
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
						Web Socket without{' '}
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

export default ChatWS
