import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	currentUser: {},
	isAuth: false,
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action) => {
			return { ...state, currentUser: action.payload, isAuth: true }
		},
		logout: (state, action) => {
			return { ...state, currentUser: {}, isAuth: false }
		},
	},
})

export const { setUser, logout } = userSlice.actions

export default userSlice.reducer
