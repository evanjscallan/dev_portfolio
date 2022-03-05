import React from 'react'


const Button = (props) => {
	return (
		<span 
		onClick={props.click} 
		className="learn-more">
		{props.text}
		</span>
		)
}

export default Button