import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../reducers/user.reducer'
import postsReducer from '../reducers/post.reducer'

export const store = configureStore({
	reducer: {
		user: userReducer,
		posts: postsReducer,
	},
})
