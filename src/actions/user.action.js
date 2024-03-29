import axios from 'axios'
import { setUser } from '../reducers/user.reducer'
import { API_URL } from '../config.js'

export const registration = async (email, nickname, password) => {
	try {
		const response = await axios.post(`${API_URL}api/auth/registration`, {
			email,
			nickname,
			password,
		})
		alert(response.data.message)
	} catch (e) {
		alert(e.response.data.message)
	}
}

export const login = (email, password) => {
	return async dispatch => {
		try {
			const response = await axios.post(`${API_URL}api/auth/login`, {
				email,
				password,
			})
			dispatch(setUser(response.data.user))
			localStorage.setItem('token', response.data.token)
		} catch (e) {
			alert(e.response.data.message)
		}
	}
}

export const auth = () => {
	return async dispatch => {
		try {
			const response = await axios.get(`${API_URL}api/auth/auth`, {
				headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
			})
			dispatch(setUser(response.data.user))
			localStorage.setItem('token', response.data.token)
		} catch (e) {
			console.log(e.response.data.message)
			localStorage.removeItem('token')
		}
	}
}
