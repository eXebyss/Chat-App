import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	currentMessages: [],
	isActive: false,
}

const messageSlice = createSlice({
	name: 'message',
	initialState,
	reducers: {
		setMessages: (state, action) => {
			return { ...state, currentMessages: action.payload, isActive: true }
		},
	},
})

export const { setMessages } = messageSlice.actions

export default messageSlice.reducer
