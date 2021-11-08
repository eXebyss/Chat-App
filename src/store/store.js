import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../reducers/user.reducer'
import messagesReducer from '../reducers/message.reducer'
import messagesWSReducer from '../reducers/messageWS.reducer'

export const store = configureStore({
	reducer: {
		user: userReducer,
		messages: messagesReducer,
		messagesWS: messagesWSReducer
	},
})
