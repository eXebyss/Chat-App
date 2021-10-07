import React from 'react'

const Input = props => {
	return (
		<input
			className={props.className}
			id={props.id}
			onChange={event => props.setValue(event.target.value)}
			value={props.value}
			type={props.type}
			aria-describedby={props.ariaDescribed}
			placeholder={props.placeholder}
		/>
	)
}

export default Input
