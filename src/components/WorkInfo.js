import React from "react";
import "./../css/styles.css";
import Button from "./Button";

const WorkInfo = (props) => {
	return (
		<React.Fragment>
			<div className="work-background-image">
				<img
					src={props.bgImage}
					alt={props.bgAltText}/>		
				<h2 className="work-descrip">{props.title}</h2>
				<p className="work-descrip">{props.description}</p>
				<Button text="LEARN MORE" />
			</div>
		</React.Fragment>
	);
};

export default WorkInfo;
