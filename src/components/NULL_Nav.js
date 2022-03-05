import React, { useState } from "react";
import "./../css/styles.css";
import backButton from "./../img/circle_cross.svg";

import workImg from "./../img/work.jpg";
import contactImg from "./../img/contact.jpg";
import aboutImg from "./../img/evanscallan.png";

const navList = [
	{ id: "Projects", image: workImg },
	{ id: "About", image: aboutImg },
	{ id: "Contact", image: contactImg },
];

export default class NavFull extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isHovered: false,
			setIsHovered: false,
			imageStyle: workImg,
			
		};
		this.navHoverEnter = this.navHoverEnter.bind(this);

	}

	//hovered
	navHoverEnter(item) {
		this.setState({
			setIsHovered: true,
			imageStyle: item.image,
			goToItem: ''
		});
	}




	render(props) {
		return (

			<div className={this.props.status ? 'nav-visible' : 'nav-hidden'}>
				<div className="nav-top-box">
					<img
						src={backButton}
						alt="Back Button"
						className="back-symbol row align-left"
						onClick={this.props.handleNav}
					/>
				</div>
				<div className="nav-outer">
					
						<ul className="nav-list font-tertiary">
							{navList.map((item) => (
								<React.Fragment>
								
									<a 
									style={{'textDecoration':'none'}} 
									href={`#${item.id}`}
									onClick={this.props.handleNav}>
										<li
											key={item.id}
											onMouseEnter={(e) =>
												this.navHoverEnter(item)
											}
										>
											{item.id}
										</li>
									</a>
								
								</React.Fragment>
							))}

							<img
								className="nav-image"
								src={this.state.imageStyle}
							></img>
						</ul>
				
				</div>
			</div>
		);
	}
}

//onMouseEnter={this.navHoverEnter} 

//Goal:
//OnMouseEnter: 
	//Slight size increase of text
	//Change the bottom photo
//Could brute force this

//ideal operation: mapping list
