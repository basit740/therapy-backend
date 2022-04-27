import React, { useState } from 'react';
import StepFiveAdd from './StepFiveAdd';
import './StepFive.css';
import StepFiveStatic from './StepFiveStatic';

function StepFive() {
	let [textareaAction, setTextareaAction] = useState([1]);

	const addAnotherAction = () => {
		let check = textareaAction.length + 1;
		setTextareaAction([...textareaAction, check]);
		console.log(textareaAction);
	};
	const firstActionHandler = (event) => {
		console.log(event.target.value);
	};

	const secondActionHandler = (event) => {
		console.log(event.target.value);
	};
	const thirdActionHandler = (event) => {
		console.log(event.target.value);
	};

	const firstDateChangeHandler = (event) => {};
	const secondDateChangeHandler = () => {};
	const thirdDateChangeHandler = () => {};

	return (
		<section className='takeAction'>
			<StepFiveStatic />

			<StepFiveAdd onChange={firstActionHandler} />

			<div></div>

			<div className='addDate'>
				<div>
					<input type='date' onChane={firstDateChangeHandler} />
				</div>
				{/* <div>
					<button onClick={addAnotherAction} className='AddMoreDate'>
						<div className='addition'>+</div>
						<div>Add another</div>
					</button>
				</div> */}
			</div>
			<p className='actionParagraph'>
				Which are the Things you may Have to put on hold for a short while?
			</p>

			<StepFiveAdd onChange={secondActionHandler} />

			<div></div>

			<div className='addDate'>
				<div>
					<input type='date' onChange={secondDateChangeHandler} />
				</div>
				{/* <div>
					<button onClick={addAnotherAction} className='AddMoreDate'>
						<div className='addition'>+</div>
						<div>Add another</div>
					</button>
				</div> */}
			</div>

			<p className='actionParagraph'>
				Which are the Things you can work on accepting that you may have no
				control over for the time being?
			</p>

			<StepFiveAdd onChange={thirdActionHandler} />

			<div></div>
			<div className='addDate'>
				<div>
					<input type='date' onChange={thirdDateChangeHandler} />
				</div>
				{/* <div>
					<button onClick={addAnotherAction} className='AddMoreDate'>
						<div className='addition'>+</div>
						<div>Add another</div>
					</button>
				</div> */}
			</div>
		</section>
	);
}

export default StepFive;
