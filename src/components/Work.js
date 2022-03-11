import React, { useState } from "react";
import Button from "./Button";
import orcaImg from "./../img/orca_macbook.webp";
import languageImg from "./../img/emis_mockup.webp";
import healthImg from "./../img/mh_placeholder_tablet.webp";
import battleImg from "./../img/battle_desktop_orange.webp";
import "./../css/styles.css";
import WorkInfo from "./WorkInfo";
import { AiOutlineCloseCircle } from "react-icons/ai";
import {
	BrowserView,
	MobileView,
	isBrowser,
	isMobile,
} from "react-device-detect";

export default function Work(props, styles) {
	const setWorkVisible = props.workState;
	const backBtn = props.backBtn;
	return (
		<React.Fragment>
			

				<div className="work-bottom-l"
						style={
						setWorkVisible
							? { transform: `translateY(${200}%)` }
							: { transform: `translateY(${100}%)` }}>
					<div className="flex-ctr-col">
						<WorkInfo
							bgImage={healthImg}
							title="Mental Health Finder"
							description="Helps users find local mental heathcare providers in their area. Google Geocode/Maps API combined with data-mined directory."
							bgAltText='The words "mental health" written on a clipboard.'/>
					</div>
				</div>

				<div className="work-bottom-r"
						style={
						setWorkVisible
							? { transform: `translateY(${200}%)` }
							: { transform: `translateY(${100}%)` }}>
					<div className="flex-ctr-col" >
						<WorkInfo
							bgImage={orcaImg}
							title="Orcahome"
							description="Front-End developer for React App. Coordinating with team to integrate front-end website with app."
							bgAltText="Orca whales swimming in the ocean."/>
					</div>
				</div>


				<div className="work-top-l"
						style={
						setWorkVisible
							? { transform: `translateY(${-100}%)` }
							: { transform: `translateY(${0}%)` }}>
					<div className="flex-ctr-col">
						<WorkInfo
							bgImage={battleImg}
							title="Github Battle"
							description="It's Battle time. Utilizing React and Github API to compare user data in the form of a game."
							bgAltText="Application mockup on devices for github battle"/>
					</div>
				</div>

				<div className="work-top-r"
						style={
						setWorkVisible
							? { transform: `translateY(${-100}%)` }
							: { transform: `translateY(${0}%)` }}>
					<h1 onClick={backBtn} className="back"> <AiOutlineCloseCircle /> </h1>
					<div className="flex-ctr-col">
						<WorkInfo
							bgImage={languageImg}
							title="The Emissary"
							description="Language translator with a retro twist. Deployed on Heroku."
							bgAltText="Application mockup on devices for github battle"/>
					</div>
				</div>


		
		</React.Fragment>
	);
}

							
						
