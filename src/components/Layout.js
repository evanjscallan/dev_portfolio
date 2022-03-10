import React from "react";
import Index from "./Index";
import "./../css/styles.css";

const stickyClass = "header-about-2";

export default class Layout extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			navState: false,
			setNavState: false,
		};
		this.handleNav = this.handleNav.bind(this);
	}

	handleNav() {
		this.setState((prevState) => ({
			setNavState: !prevState.setNavState,
		}));
	}

	render() {
		const navState = this.state;
		return (
			<React.Fragment>
				<Index />
			</React.Fragment>
		);
	}
}
//<Projects/><About/><Contact/>

/*<NavFull status={this.state.setNavState} handleNav={this.handleNav.bind(this)}/>*/
//<NavBar handleNav={this.handleNav.bind(this)}/>
//<NavFull/>
//Index   //Nav
//Projects
//About
//Contact
