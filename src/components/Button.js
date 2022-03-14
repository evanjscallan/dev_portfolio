import React from 'react'
import "./../css/styles.css";


const Button = (props) => {
	return (
		<div 
		onClick={props.click} 
		className="learn-more">
		{props.text}
		</div>
		)
}

export default Button