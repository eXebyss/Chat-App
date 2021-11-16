import React, { useEffect } from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../../actions/user.action'
import Registration from '../auth/Registration'
import Login from '../auth/Login'
import Home from '../pages/home/Home'
import Navbar from '../navbar/Navbar'
import ChatLP from '../pages/ChatLP/ChatLP'
import ChatWS from '../pages/ChatWS/ChatWS'
import Chat2WS from '../pages/Chat2WS/Chat2WS'
import ChatSocketIO from '../pages/ChatSocketIO/ChatSocketIO'
import ChatSocketIO2 from '../pages/ChatSocketIO2/ChatSocketIO2'
import '../../styles/App.css'

function App() {
	const isAuth = useSelector(state => state.user.isAuth)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(auth())
	}, [])

	return (
		<BrowserRouter>
			<div className='App container'>
				<Navbar />
				<div className='routes container'>
					{!isAuth ? (
						<Switch>
							<Route path='/registration' component={Registration} />
							<Route path='/login' component={Login} />
							<Redirect to='/login' />
						</Switch>
					) : (
						<Switch>
							<Route path='/login' component={Home} />
							<Route path='/chat-lp' component={ChatLP} />
							<Route path='/chat-ws' component={ChatWS} />
							<Route path='/chat2-ws' component={Chat2WS} />
							<Route path='/chat-socket-io' component={ChatSocketIO} />
							<Route path='/chat2-socket-io' component={ChatSocketIO2} />
						</Switch>
					)}
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App
