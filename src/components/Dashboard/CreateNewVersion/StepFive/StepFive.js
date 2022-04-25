import React, { useState } from 'react';
import StepFiveAdd from './StepFiveAdd';
import './StepFive.css';

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

	return (
		<section className='takeAction'>
			<h2>Take Action.</h2>
			<p>
				Here is when you begin to look to see what is possible to make things
				better from the list of the bother items. You can think about different
				ways to address what is going on and how to begin to change the things
				that are bothering you or having a negative effect. And it is important
				to understand that ultimately we have choices. We have the choice to do
				nothing or to take action. We can choose to ask for help, we can join
				suport groups: that choice of taking action is part of what can lead us
				forward. We all have choices, and there's a lot we can do to change our
				circumstance; we do have free will.
			</p>
			<p>
				It is more effective if you break down the things to take action on as
				follows;
			</p>
			<p className='actionParagraph'>
				Which are the things you can act on immediately? And schedule them to
				make sure you act on them.
			</p>
			{textareaAction.length > 0 ? (
				textareaAction.map((i, key) => (
					<StepFiveAdd i={i} onChange={firstActionHandler} />
				))
			) : (
				<div></div>
			)}
			<div className='addDate'>
				<div>
					<input type='date' />
				</div>
				<div>
					<button onClick={addAnotherAction} className='AddMoreDate'>
						<div className='addition'>+</div>
						<div>Add another</div>
					</button>
				</div>
			</div>
			<p className='actionParagraph'>
				Which are the Things you may Have to put on hold for a short while?
			</p>

			{textareaAction.length > 0 ? (
				textareaAction.map((i, key) => (
					<StepFiveAdd i={i} onChange={secondActionHandler} />
				))
			) : (
				<div></div>
			)}
			<div className='addDate'>
				<div>
					<input type='date' />
				</div>
				<div>
					<button onClick={addAnotherAction} className='AddMoreDate'>
						<div className='addition'>+</div>
						<div>Add another</div>
					</button>
				</div>
			</div>

			<p className='actionParagraph'>
				Which are the Things you can work on accepting that you may have no
				control over for the time being?
			</p>

			{textareaAction.length > 0 ? (
				textareaAction.map((i, key) => (
					<StepFiveAdd i={i} onChange={thirdActionHandler} />
				))
			) : (
				<div></div>
			)}
			<div className='addDate'>
				<div>
					<input type='date' />
				</div>
				<div>
					<button onClick={addAnotherAction} className='AddMoreDate'>
						<div className='addition'>+</div>
						<div>Add another</div>
					</button>
				</div>
			</div>
		</section>
	);
}

export default StepFive;
