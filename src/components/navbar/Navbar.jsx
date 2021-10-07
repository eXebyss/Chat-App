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
								<NavLink to='/login'>Login</NavLink>
							</div>
						)}
					</li>
					<li className='nav-item'>
						{!isAuth && (
							<div className='nav-link'>
								<NavLink to='/registration'>Registration</NavLink>
							</div>
						)}
					</li>
					<li className='nav-link'>
						{isAuth && (
							<button
								className='btn btn-danger'
								onClick={() => dispatch(logout())}>
								Logout
							</button>
						)}
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Navbar
