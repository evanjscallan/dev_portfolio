import React from 'react'
import "./../css/styles.css";
import snek from './../img/8bitskills/python.gif'
import useIsInViewport from 'use-is-in-viewport'

const skills = [
	{skillAtt: 'Python', 
	level: '60%',
	skillImage:'python'
	},
	{skillAtt: 'JavaScript', 
	level: '80%',
	skillImage:'javascript'
	},
	{skillAtt: 'React', 
	level: '45%',
	skillImage:'react'
	},
	{skillAtt: 'Flask', 
	level: '60%',
	skillImage:'flask'
	},
	{skillAtt: 'SQL', 
	level: '40%',
	skillImage:'SQL'
	},
	{skillAtt: 'Piano', 
	level: '100%',
	skillImage:'piano'
	},
]



function SkillBar(props){
	const [isInViewport, targetRef] = useIsInViewport()
	return(

		<React.Fragment>
		<div>
			
		</div>
		<div className='skills'>
		<h2 className='font-tertiary'>Skills</h2>
		
		<div className='skillbar-container'>
		<ul className='noindent'>
		{skills.map((skill) =>
			<li className='row skill-list'>
				<div className='column ctr-total skill-img-box'>
					<p className='font-secondary'>{skill.skillAtt}</p>
					</div>			
					<div style={{ width:skill.level }} className='skill-bar'>
						{skill.level}
				</div>
				
			</li>
			)}
		</ul>
		</div>
		</div>
		</React.Fragment>
		)
}

export default SkillBar;

//<img className='skill-gif' src={require(`./../img/8bitskills/${skill.skillImage}.gif`)}/>