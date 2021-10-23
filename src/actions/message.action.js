import axios from 'axios'
import { setMessages } from '../reducers/message.reducer.js'
import { API_URL } from '../config.js'

export const getMessage = () => {
	return async dispatch => {
		try {
			const response = await axios.get(`${API_URL}api/message/get-messages`)			
			await dispatch(setMessages(response.data))
		} catch (e) {
			alert(e.response.data.message)
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
		alert(e.response.data.message)
	}
}
