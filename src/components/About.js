import React from "react";

import Button from "./Button";
import "./../css/styles.css";

import aboutImg from "./../img/ejs-transparent.png";
import snekImg from "./../img/8bitskills/python.gif";
import reactImg from "./../img/8bitskills/react.gif";
import javascriptImg from "./../img/8bitskills/javascript.gif";
import flaskImg from "./../img/8bitskills/flask.gif";
import SQLImg from "./../img/8bitskills/SQL.gif";

import Draggable, { DraggableCore } from "react-draggable"; // Both at the same time

const skills = [
	{ skillAtt: "Javascript", skillLvl: "80%" },
	{ skillAtt: "Python", skillLvl: "70%" },
	{ skillAtt: "React", skillLvl: "80%" },
	{ skillAtt: "Javascript", skillLvl: "75%" },
	{ skillAtt: "API Integration", skillLvl: "50%" },
	{ skillAtt: "SASS/CSS", skillLvl: "80%" },
	{ skillAtt: "Flask", skillLvl: "55%" },
	{ skillAtt: "SQLite", skillLvl: "65%" },
];

export default class About extends React.Component {
	constructor(props, skills) {
		super(props);
	}
	render(props) {
		const backBtn = this.props.backBtn;
		const setAboutVisible = this.props.aboutState;
		return (
			<div className="about-outer">
				<span className="about-top">
					<nav className="nav-container-l"></nav>
					<nav className="nav-container-r">
						<p onClick={backBtn}>return</p>
					</nav>
				</span>
				<div className="about-middle">
					<img
						className="about-img"
						src={aboutImg}
						alt="Evan playing piano in an 8-bit universe."
					/>
					<div className="about-p flex-ctr-col prim">
						<p>
							City assault tower urban silent youtube disposable
							franchise. Face forwards singularity geodesic
							sensory post-render-farm knife rifle tanto concrete
							apophenia tube-ware BASE jump. Free-market wonton
							soup systema semiotics.
						</p>
						<p>
							Kowloon math-tanto computer. Market pistol Legba
							narrative skyscraper grenade physical bicycle tower
							katana chrome denim military-grade. Sensory advert
							chrome marketing uplink man tower.
						</p>
					</div>
				</div>
				<div className="about-bottom">
					<Draggable
						axis="y"
						handle=".handle"
						defaultPosition={{ x: 0, y: 0 }}
						position={null}
						scale={1}
						onStart={this.handleStart}
						onDrag={this.handleDrag}
						onStop={this.handleStop}
					>
						<div className="handle">
							<div className="skills-page">
								<h2 className="prim">SKILLS (CLICK + DRAG)</h2>
								<ul className="skills-list">
									<span className="list-ind">
										<p>Javascript</p>
										<div className="skill-bar-outer">
											<div
												style={{
													width: skills[0].skillLvl,
												}}
												className="skill-bar-inner"
											>
												<p>{skills[0].skillLvl}</p>
											</div>
										</div>
									</span>

									<span className="list-ind">
										<p>Python</p>
										<div className="skill-bar-outer">
											<div
												style={{
													width: skills[1].skillLvl,
												}}
												className="skill-bar-inner"
											>
												<p>{skills[1].skillLvl}</p>
											</div>
										</div>
									</span>

									<span className="list-ind">
										<p>React</p>
										<div className="skill-bar-outer">
											<div
												style={{
													width: skills[2].skillLvl,
												}}
												className="skill-bar-inner"
											>
												<p>{skills[2].skillLvl}</p>
											</div>
										</div>
									</span>

									<span className="list-ind">
										<p>API Integration</p>
										<div className="skill-bar-outer">
											<div
												style={{
													width: skills[3].skillLvl,
												}}
												className="skill-bar-inner"
											>
												<p>{skills[3].skillLvl}</p>
											</div>
										</div>
									</span>

									<span className="list-ind">
										<p>SASS/CSS</p>
										<div className="skill-bar-outer">
											<div
												style={{
													width: skills[4].skillLvl,
												}}
												className="skill-bar-inner"
											>
												<p>{skills[4].skillLvl}</p>
											</div>
										</div>
									</span>

									<span className="list-ind">
										<p>Flask</p>
										<div className="skill-bar-outer">
											<div
												style={{
													width: skills[5].skillLvl,
												}}
												className="skill-bar-inner"
											>
												<p>{skills[5].skillLvl}</p>
											</div>
										</div>
									</span>

									<span className="list-ind">
										<p>SQLite</p>
										<div className="skill-bar-outer">
											<div
												style={{
													width: skills[6].skillLvl,
												}}
												className="skill-bar-inner"
											>
												<p>{skills[6].skillLvl}</p>
											</div>
										</div>
									</span>
								</ul>
							</div>
						</div>
					</Draggable>
				</div>
			</div>
		);
	}
}
