import React from 'react';
import './StepSix.css';

const StepSixAdd = ({ value, onChange, id }) => {
	return (
		<>
			<div className='numbers'>
				<div>{id}</div>
				<div>
					<textarea id={id} value={value} onChange={onChange}></textarea>
				</div>
			</div>
		</>
	);
};

export default StepSixAdd;
