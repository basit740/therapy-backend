import React from 'react';
import './StepOne.css';

const StepOneOfElevenAdd = (props) => {
	let { i } = props;

	return (
		<>
			<div className='numbers'>
				<div>{i}</div>
				<div>
					<textarea onChange={props.onNewText} value={props.value}></textarea>
				</div>
			</div>
		</>
	);
};

export default StepOneOfElevenAdd;
