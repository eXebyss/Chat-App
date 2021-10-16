import React from 'react'
import PostCard from '../../utils/PostCard/PostCard'
import './PostList.css'

function PostList(props) {
	return (
		<div className='post'>
			<ul className='list-group'>
				{props.posts.map(data => {
					return <PostCard key={data._id} data={data} />
				})}
			</ul>
		</div>
	)
}

export default PostList
