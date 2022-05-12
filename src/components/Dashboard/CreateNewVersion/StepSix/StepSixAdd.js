import React from 'react';
import './StepSix.css';

const StepSixAdd = ({ value, onChange, id, number, isLoading }) => {
	return (
		<>
			<div className='numbers'>
				<div>{number}</div>
				<div>
					<textarea
						id={id}
						value={isLoading ? 'loading...' : value}
						onChange={onChange}
					></textarea>
				</div>
			</div>
		</>
	);
};

export default StepSixAdd;
