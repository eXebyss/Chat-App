import axios from 'axios'
import { setMessages } from '../reducers/message.reducer.js'
import { API_URL } from '../config.js'

export const getMessages = () => {
	return async dispatch => {
		try {
			const response = await axios.get(`${API_URL}api/message/get-messages`)
			await dispatch(setMessages(response.data))
		} catch (e) {
			// alert(e.response.data.message)
			console.log(e.response.data.message, 'Message action err 1!')
		}
	}
}

export const getMessagesLongPolling = () => {
	return async dispatch => {
		try {
			const response = await axios.get(
				`${API_URL}api/message/get-messages-long-polling`
			)
			await dispatch(setMessages(response.data))
		} catch (e) {
			// alert(e.response.data.message)
			console.log(e.response.data.message, 'Message action err 2!')
		}
	}
}

export const createMessage = async (nickname, content) => {
	try {
		const response = await axios.post(`${API_URL}api/message/new-message`, {
			nickname,
			content,
		})
		console.log(response.data.message)
	} catch (e) {
		// alert(e.response.data.message)
		console.log(e.response.data.message, 'Message action err 3!')
	}
}
