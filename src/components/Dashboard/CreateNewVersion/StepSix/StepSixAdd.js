import React from 'react';
import './StepSix.css';

const StepSixAdd = (props) => {
	let { id, onChange } = props;
	return (
		<>
			<div className='numbers'>
				<div>{id}</div>
				<div>
					<textarea onChange={onChange}></textarea>
				</div>
			</div>
		</>
	);
};

export default StepSixAdd;
