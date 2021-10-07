import React, { useState } from 'react'
import Input from '../../utils/input/Input'
import { registration } from '../../actions/user.action'

const Registration = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	return (
		<div className='authorization'>
			<div className='authorization_header'>Registration</div>
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
				</div>
				<button
					type='button'
					className='btn btn-primary'
					onClick={() => registration(email, password)}>
					Register
				</button>
			</form>
		</div>
	)
}

export default Registration
