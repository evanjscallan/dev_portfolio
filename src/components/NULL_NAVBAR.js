import React from 'react';

import './../css/styles.css'
import NavFull from './Nav.js'
import Hamburger from './../img/Hamburger.svg'


function NavBar(props){
	return(
		<nav className='top-box'>
			<img 
			src={Hamburger} 
			alt='Nav hamburger' 
			className='hamburger row align-left'
			onClick={props.handleNav}
			/>
		</nav>
		
		)
}


export default NavBar