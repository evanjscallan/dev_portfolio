import React from "react";
import "./../css/styles.css";
import Button from "./Button";

const WorkInfo = (props) => {
	return (
		<React.Fragment>
			
			<div className="work-background-image">
				<div class='work-overlay'>
					<div class='work-text'>
					<h2 className="work-descrip">{props.title}</h2>
					<p className="work-descrip">{props.description}</p>
					<Button text="LEARN MORE" />
					</div>
				</div>
				<img
					src={props.bgImage}
					alt={props.bgAltText}/>
				</div>

				
			
		</React.Fragment>
	);
};

export default WorkInfo;
