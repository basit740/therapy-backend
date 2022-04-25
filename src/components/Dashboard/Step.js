import React from 'react';
import './Step.css';
const Step = (props) => {
	return (
		<div className='step'>
			<div className='step__info'>
				<div className='step__info__status'></div>
				<div className='step__info__content'>
					<h6>Introduction</h6>
					<span className='date'>05/11/2021</span>
				</div>
			</div>
			<div className='step__actions'>
				<div>Edit</div>
				<a href='#' className='step__action'>
					{props.actionType}
				</a>
			</div>
		</div>
	);
};

export default Step;
