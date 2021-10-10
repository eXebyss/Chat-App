import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
	const userInfo = useSelector(state => state.user.currentUser)

	return (
		<div className='some_text container'>
			<p>
				Hello and welcome,{' '}
				<span style={{ color: 'green', fontWeight: 'bold', fontSize: 'large' }}>
					{userInfo.nickname}!
				</span>
			</p>
			<p>This MERN stack repo can be found here:</p>
			<ul className='list-group'>
				<li className='list-group'>
					<a
						href='https://github.com/eXebyss/client'
						rel='noreferrer'
						target='_blank'>
						CLIENT side
					</a>
				</li>
				<li className='list-group'>
					<a
						href='https://github.com/eXebyss/server'
						rel='noreferrer'
						target='_blank'>
						SERVER side
					</a>
				</li>
				<li className='list-group'>
					<a
						href='https://www.mongodb.com/mern-stack'
						rel='noreferrer'
						target='_blank'>
						What is <span style={{ color: 'green' }}>MERN</span> Stack?
					</a>
				</li>
			</ul>
			<p>Thank you for testing! Happy hacking!</p>
		</div>
	)
}

export default Profile
