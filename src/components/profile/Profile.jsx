import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
	const userInfo = useSelector(state => state.user.currentUser)

	return (
		<div className='some_text container'>
			<p>
				Hello and welcome <b>{userInfo.nickname}!</b>
			</p>
			<p>This MERN stack repo can be found here:</p>
			<ul className='list-group'>
				<li className='list-group'>
					<a href='https://github.com/eXebyss/client'>CLIENT side</a>
				</li>
				<li className='list-group'>
					<a href='https://github.com/eXebyss/server'>SERVER side</a>
				</li>
			</ul>
			<p>Thank you for testing! Happy hacking!</p>
		</div>
	)
}

export default Profile
