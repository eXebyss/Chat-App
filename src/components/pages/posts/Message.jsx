import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMessage, createMessage } from '../../../actions/message.action'
import PostList from '../../messageList/MessageList'
import Input from '../../../utils/input/Input'
import './Post.css'

const Posts = () => {
	const userInfo = useSelector(state => state.user.currentUser)
	const posts = useSelector(state => state.posts.currentPosts)
	const postsActive = useSelector(state => state.posts.isActive)
	const [content, setContent] = useState('')
	const dispatch = useDispatch()

	useEffect(() => {
		subscribe()
	}, [])

	const subscribe = async () => {
		console.log('Fetching and dispatching messages...')
		try {
			await dispatch(getMessage())
			subscribe()
		} catch (e) {
			console.log(e, 'Error in subscribe method 1!')
			setTimeout(() => {
				subscribe()
			}, 500)
		}
	}

	const handleClickToCreatePost = () => {
		createMessage(userInfo.nickname, content)
		setContent('')
	}

	return (
		<div className='posts'>
			<div className='create-post'>
				<div className='mb-3'>
					<label className='form-label'>New Message</label>
					<Input
						value={content}
						setValue={setContent}
						type='text'
						className='form-control'
						placeholder='Enter your message...'
					/>
				</div>
				<button
					type='button'
					className='btn btn-primary'
					onClick={handleClickToCreatePost}>
					Send
				</button>
			</div>
			<div className='posts-all'>
				<button
					type='button'
					className='btn btn-primary'
					onClick={() => dispatch(getMessage())}>
					Refresh Posts
				</button>
				<div className='posts-li'>
					{postsActive ? <PostList posts={posts} /> : ''}
				</div>
			</div>
		</div>
	)
}

export default Posts
