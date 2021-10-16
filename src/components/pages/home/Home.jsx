import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { allPosts } from '../../../actions/post.action'
// import PostList from '../../postList/PostList'
// import Posts from '../posts/Posts'

const Home = () => {
	const userInfo = useSelector(state => state.user.currentUser)
	// const posts = useSelector(state => state.posts.currentPosts)
	// const postsActive = useSelector(state => state.posts.isActive)
	// const dispatch = useDispatch()

	// useEffect(() => {
	// 	console.log('posts:')
	// 	const fetchData = async () => {
	// 		const result = await allPosts()
	// 		console.log('Log2:', result.data[1].content)
	// 	}
	// 	fetchData()
	// }, [])

	// useEffect(() => {
	// 	console.log('posts:')
	// 	dispatch(allPosts())
	// }, [])

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

export default Home
