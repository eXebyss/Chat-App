import React, { useEffect } from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../../actions/user.action'
import Registration from '../auth/Registration'
import Login from '../auth/Login'
import Home from '../pages/home/Home'
import Navbar from '../navbar/Navbar'
import Posts from '../pages/posts/Posts'
import './App.css'

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
				<div className='routes'>
					{!isAuth ? (
						<Switch>
							<Route path='/registration' component={Registration} />
							<Route path='/login' component={Login} />
							<Redirect to='/login' />
						</Switch>
					) : (
						<Switch>
							<Route path='/login' component={Home} />
							<Route path='/posts' component={Posts} />
						</Switch>
					)}
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App
