import React from 'react'

function PostCard(props) {
	return (
		<li className='list-group-item d-flex justify-content-between align-items-start'>
			<div className='ms-2 me-auto card bg-info'>
				<span style={{ color: 'green', fontWeight: 'bold', fontSize: 'large' }}>
					{props.data.nickname}:
				</span>
				<div className='fw-bold card-body'>{props.data.content}</div>
			</div>
		</li>
	)
}

export default PostCard
