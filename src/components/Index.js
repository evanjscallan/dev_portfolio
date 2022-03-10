import React from "react";
import Photo from "./../img/prflio.png";
import "./../css/styles.css";
import indexImg from "./../img/evanscallan.jpg";
import Contact from './Contact'
import Work from "./Work";
import About from './About'
import Button from './Button'





export default class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			workVisible: true,
			setWorkVisible: true,
			aboutVisible: true,
			setAboutVisible: true,
			setContactVisible: false,
		};
		this.handleClick = this.handleClick.bind(this);
		this.handleAbout = this.handleAbout.bind(this);
		this.handleContact = this.handleContact.bind(this);
	}

	handleClick(e) {
		this.setState((prevState) => ({
			setWorkVisible: !prevState.setWorkVisible,
		}));
	}

	handleAbout(event) {
		this.setState((prevState2)=> ({
			setAboutVisible: !prevState2.setAboutVisible
		}));
	}

	handleContact(event2) {
		console.log('clicked')
		this.setState((prevState3)=> ({
			setContactVisible: !prevState3.setContactVisible
		}));
	}



	//Make hover color change in CSS for each card
	render(props) {
		let setWorkVisible = this.state.setWorkVisible;
		let setAboutVisible = this.state.setAboutVisible;
		let setContactVisible = this.state.setContactVisible;
		
		return (
			<div>
				<Contact contactState={setContactVisible} backBtn={this.handleContact.bind(this)}/>
				<About backBtn={this.handleAbout.bind(this)}/>
				<div
				className={setAboutVisible ? "index-outer" : 'index-outer-none'}>
				<Work backBtn={this.handleClick.bind(this)} workState={setWorkVisible}/>
				
					<span className={setContactVisible ? "hidden" : "index-top"}>
						<span className="nav-container-l">
							<a onClick={(e) => this.handleClick()}>WORK</a>
						</span>
						<span className="nav-container-r">
							<a onClick={(event) => this.handleAbout()}>ABOUT</a>
							<a className='contact-btn' onClick={(event2) => this.handleContact()}>CONTACT</a>
						</span>
					</span>

					<div className={setContactVisible ? "hidden" : "index-middle"}>
						<h1 className="font-primary title-text ">
							Evan Scallan is a web developer who makes
							smooth-running, responsive web applications.
						</h1>
						<img className="index-img" src={indexImg} alt=""/>
						<Button text="VIEW MORE" click={this.handleClick.bind(this)}/>
					</div>
					<div className="index-bottom"></div>

				</div>
			</div>
		);
	}
}

/*<img className='profile-photo' src={Photo} alt='profile photo'></img>*/
/*<a className='view-more font-secondary'>View My Work</a>*/

/*		<nav className='top-box'>
					<img 
					src={Hamburger} 
					alt='Nav hamburger' 
					className='hamburger row align-left'
					onClick={this.props.handleNav}
					/>
				</nav>*/

/*<a className='view-more font-secondary'>View My Work</a>*/
