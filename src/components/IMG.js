import React from 'react'
import "./../css/styles.css";





const IMG = (props) => {
	return(
		<React.Fragment>
		<img 
		className='work-background-image'
		src={props.bgImage} 
		alt={props.bgAltText}>
		</img>
		
		</React.Fragment>
		)
}


export default IMG