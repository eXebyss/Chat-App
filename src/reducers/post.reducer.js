import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	currentPosts: [],
	isActive: false,
}

const postSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {
		setPosts: (state, action) => {
			return { ...state, currentPosts: action.payload, isActive: true }
		},
	},
})

export const { setPosts } = postSlice.actions

export default postSlice.reducer
