import React, { useState } from 'react'
import Input from '../../utils/input/Input'
import { useDispatch } from 'react-redux'
import { login } from '../../actions/user.action'

const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const dispatch = useDispatch()

	return (
		<div className='authorization'>
			<div className='authorization_header'>Login</div>
			<form>
				<div className='mb-3'>
					<label className='form-label'>Email address</label>
					<Input
						value={email}
						setValue={setEmail}
						type='email'
						className='form-control'
						id='exampleInputEmail1'
						aria-describedby='emailHelp'
						placeholder='Input your email address...'
					/>
					<div id='emailHelp' className='form-text'>
						We'll never share your email with anyone else.
					</div>
				</div>
				<div className='mb-3'>
					<label className='form-label'>Password</label>
					<Input
						value={password}
						setValue={setPassword}
						type='password'
						className='form-control'
						id='exampleInputPassword1'
						placeholder='Enter your password...'
					/>
					<div id='emailHelp' className='form-text'>
						Password must be min: 3 max: 16 characters.
					</div>
				</div>
				<button
					type='button'
					className='btn btn-primary'
					onClick={() => dispatch(login(email, password))}>
					Login
				</button>
			</form>
		</div>
	)
}

export default Login
