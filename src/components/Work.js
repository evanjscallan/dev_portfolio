import React, { useState } from "react";
import Button from './Button'
import orcaImg from "./../css/orcabg.webp";
import languageImg from "./../css/languagebg.webp";
import healthImg from "./../img/battle.webp";
import battleImg from "./../img/opensource2.webp";
import "./../css/styles.css";
import IMG from './IMG'
import { AiOutlineCloseCircle } from 'react-icons/ai'



export default function Work(props, styles) {
	const setWorkVisible = props.workState;
	const backBtn = props.backBtn
	return (
	<React.Fragment>
			<div className='work-outer'>
						<div
						style={setWorkVisible ? {transform: `translateY(${200}%)`} : {transform: `translateY(${100}%)`} }
						className='work-bottom-l work-pad flex-ctr-col'>
						<div className='flex-ctr-col'>

						<IMG text='MHFinder' bgImage={healthImg} bgAltText='The words "mental health" written on a clipboard.'/>
							<h2 className='work-descrip'>MHFinder</h2>
							<p className='work-descrip'>Helps users find local mental heathcare providers in their area. Google Geocode/Maps API combined with data-mined directory.</p>
							<Button text='VISIT SITE'/>
							</div>
						</div>


						<div
						style={setWorkVisible ? {transform: `translateY(${200}%)`} : {transform: `translateY(${100}%)`} }
						className='work-bottom-r work-pad flex-ctr-col'>
							<div className='flex-ctr-col'>

								<IMG bgImage={orcaImg} bgAltText='Orca whales swimming in the ocean.'/>
								<h2 className='work-descrip'>Orcahome</h2>
								<p className='work-descrip'>Front-End developer for React App. Coordinating with team to integrate front-end website with app.</p>
								<Button text='LEARN MORE'/>
							</div>
						</div>


						<div
						style={setWorkVisible ? 
							{transform: `translateY(${-100}%)`}
						 :  {transform: `translateY(${0}%)`} }
						 
						className='work-top-l work-pad flex-ctr-col'>
						<div className='flex-ctr-col'>

							<IMG bgImage={battleImg} bgAltText='The words "mental health" written on a clipboard'/>
							<h2 className='work-descrip'>Github Battle</h2>
							<p className='work-descrip'>It's battle time. Utilzes Github API to compare users social and contribution stats in the form of a game.</p>
							<Button text='VISIT SITE'/>
						</div>
						</div>
						

						<div
						style={setWorkVisible ? {transform: `translateY(${-100}%)`} : {transform: `translateY(${0}%)`} }
						className='work-top-r work-pad flex-ctr-col'>
						<h1 onClick={backBtn} className='back'><AiOutlineCloseCircle/></h1>
						<div className='flex-ctr-col'>

							<IMG  bgImage={languageImg} bgAltText='The words "mental health" written on a clipboard'/>
							<h2 className='work-descrip'>The Emissary</h2>		
							<p className='work-descrip'>Language translator with a retro twist. Deployed on Heroku.</p>
							<Button text='VISIT SITE'/>
						</div>
						</div>
				
				

			</div>
		</React.Fragment>
	);
}

