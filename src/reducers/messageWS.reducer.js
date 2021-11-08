import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	connected: false,
	currentMessagesWS: [],
}

const messageWSSlice = createSlice({
	name: 'messageWS',
	initialState,
	reducers: {
		setMessagesWS: (state, action) => {
			return {
				...state,
				currentMessagesWS: [...state.currentMessagesWS, action.payload],
			}
		},
		setConnected: (state, action) => {
			return { ...state, connected: action.payload }
		},
	},
})

export const { setMessagesWS, setConnected } = messageWSSlice.actions

export default messageWSSlice.reducer
