// import { setMessagesWS, setConnected } from '../reducers/messageWS.reducer.js'

// export const connect = (socket, userInfo) => {
// 	return dispatch => {
// 		socket.onopen = () => {
// 			dispatch(setConnected(true))
// 			const message = {
// 				event: 'connection',
// 				username: userInfo,
// 				id: Date.now(),
// 			}
// 			socket.send(JSON.stringify(message))
// 			console.log('Socket is opened')
// 		}
// 		socket.onmessage = event => {
// 			const message = JSON.parse(event.data)
// 			dispatch(setMessagesWS(message))
// 		}
// 		socket.onclose = () => {
// 			dispatch(setConnected(false))
// 			console.log('Socket is closed')
// 		}
// 		socket.onerror = () => {
// 			console.log('Socket error 1')
// 		}
// 	}
// }

// export const sendMessage = (socket, userInfo, content) => {
// 	const message = {
// 		event: 'message',
// 		username: userInfo,
// 		message: content,
// 		date: new Date(Date.now()),
// 		id: Date.now(),
// 	}
// 	socket.send(JSON.stringify(message))
// }
