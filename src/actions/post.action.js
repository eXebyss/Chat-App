import axios from 'axios'
import { setPosts } from '../reducers/post.reducer.js'
import { API_URL } from '../config.js'

export const allPosts = () => {
	return async dispatch => {
		try {
			const response = await axios.get(`${API_URL}api/post/get-posts`)
			console.log('Log1:', response.data)
			dispatch(setPosts(response.data))
		} catch (e) {
			alert(e.response.data.message)
		}
	}
}

export const createPost = async (nickname, content) => {
	try {
		const response = await axios.post(`${API_URL}api/post/create-post`, {
			nickname,
			content,
		})
		console.log(response.data.message)
	} catch (e) {
		alert(e.response.data.message)
	}
}
