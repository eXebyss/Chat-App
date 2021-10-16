import React from 'react'
import './PostCard.css'

function PostCard(props) {
	return (
		<li className='post-card list-group-item'>
			<div className='ms-2 bg-info'>
				<span style={{ color: 'green', fontWeight: 'bold', fontSize: 'large' }}>
					{props.data.nickname}:
				</span>
				<div className='fw-bold'>{props.data.content}</div>
			</div>
		</li>
	)
}

export default PostCard
