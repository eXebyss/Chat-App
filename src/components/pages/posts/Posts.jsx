import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { allPosts, createPost } from '../../../actions/post.action'
import PostList from '../../postList/PostList'
import Input from '../../../utils/input/Input'
import './Post.css'

const Posts = () => {
	const userInfo = useSelector(state => state.user.currentUser)
	const posts = useSelector(state => state.posts.currentPosts)
	const postsActive = useSelector(state => state.posts.isActive)
	const [content, setContent] = useState('')
	const dispatch = useDispatch()

	useEffect(() => {
		console.log('posts:')
		dispatch(allPosts())
	}, [])

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
					onClick={() => createPost(userInfo.nickname, content)}>
					Post
				</button>
			</div>
			<div className='posts-all'>
				<button
					type='button'
					className='btn btn-primary'
					onClick={() => dispatch(allPosts())}>
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
