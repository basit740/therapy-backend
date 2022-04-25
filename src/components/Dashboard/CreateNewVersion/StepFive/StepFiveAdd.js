import React from 'react';

function StepFiveAdd(props) {
	return (
		<>
			<div className='actionArea'>
				<div>
					<textarea onChange={props.onChange}></textarea>
				</div>
			</div>
		</>
	);
}

export default StepFiveAdd;
