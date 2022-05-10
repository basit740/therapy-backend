import React, { useContext } from 'react';
import './Step.css';
import { dateFormatter } from '../../utils/items';
import { Link, useNavigate } from 'react-router-dom';
import NewVersionContext from '../../store/new-version-context';
const Step = ({ date, title, actionType, stepNumber }) => {
	const properDate = dateFormatter(date);

	const newVerCtx = useContext(NewVersionContext);

	const navigate = useNavigate();

	const stepsHandler = (event) => {
		event.preventDefault();
		newVerCtx.currentStepHandler(1 + parseInt(event.target.id));
		navigate('/dashboard/newjourney');
	};

	return (
		<div className='step'>
			<div className='step__info'>
				<div className='step__info__status'></div>
				<div className='step__info__content'>
					<h6>{title}</h6>
					<span className='date'>{properDate}</span>
				</div>
			</div>
			<div className='step__actions'>
				<div>{actionType}</div>
				<Link
					onClick={stepsHandler}
					to='/dashboard/newjourney'
					id={stepNumber}
					className='step__action'
				>
					{actionType}
				</Link>
			</div>
		</div>
	);
};

export default Step;
