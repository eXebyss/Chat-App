import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../reducers/user.reducer'

const Navbar = () => {
	const isAuth = useSelector(state => state.user.isAuth)
	const dispatch = useDispatch()

	return (
		<div className='container'>
			<span className='mb-0 h1'>MERN</span>
			<nav className='navbar navbar-expand-lg navbar-light bg-light justify-content-center'>
				<ul className='nav'>
					<li className='nav-item'>
						{!isAuth && (
							<div className='nav-link'>
								<NavLink to='/login'>
									<span style={{ fontWeight: 'bold', fontSize: 'large' }}>
										Login
									</span>
								</NavLink>
							</div>
						)}
					</li>
					<li className='nav-item'>
						{!isAuth && (
							<div className='nav-link'>
								<NavLink to='/registration'>
									<span style={{ fontWeight: 'bold', fontSize: 'large' }}>
										Registration
									</span>
								</NavLink>
							</div>
						)}
					</li>
					<li className='nav-item'>
						{isAuth && (
							<div className='nav-link'>
								<NavLink to='/login'>
									<span style={{ fontWeight: 'bold', fontSize: 'large' }}>
										Home
									</span>
								</NavLink>
							</div>
						)}
					</li>
					<li className='nav-item'>
						{isAuth && (
							<div className='nav-link'>
								<NavLink to='/chat-lp'>
									<span style={{ fontWeight: 'bold', fontSize: 'large' }}>
										Chat(LP)
									</span>
								</NavLink>
							</div>
						)}
					</li>
					<li className='nav-item'>
						{isAuth && (
							<div className='nav-link'>
								<NavLink to='/chat-ws'>
									<span style={{ fontWeight: 'bold', fontSize: 'large' }}>
										Chat(WS)
									</span>
								</NavLink>
							</div>
						)}
					</li>
					<li className='nav-item'>
						{isAuth && (
							<div className='nav-link'>
								<NavLink to='/chat2-ws'>
									<span style={{ fontWeight: 'bold', fontSize: 'large' }}>
										Chat2(WS)
									</span>
								</NavLink>
							</div>
						)}
					</li>
					<li className='nav-item'>
						{isAuth && (
							<div className='nav-link'>
								<NavLink to='/chat-socket-io'>
									<span style={{ fontWeight: 'bold', fontSize: 'large' }}>
										Chat(SocketIO)
									</span>
								</NavLink>
							</div>
						)}
					</li>
					{isAuth && (
						<li className='nav-link'>
							<button
								className='btn btn-danger'
								onClick={() => dispatch(logout())}>
								Logout
							</button>
						</li>
					)}
				</ul>
			</nav>
		</div>
	)
}

export default Navbar
