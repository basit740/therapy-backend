import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NewVersionContext from '../../../../store/new-version-context';
import './StepOne.css';
import StepOneAdd from './StepOneAdd';

const StepOne = (props) => {
	const navigate = useNavigate();
	let [textarea, setTextarea] = useState([1, 2, 3]);

	const newVerCtx = useContext(NewVersionContext);
	const addAnother = () => {
		let check = textarea.length + 1;
		setTextarea([...textarea, check]);
	};

	// const firstTextHandler = (event) => {
	// 	props.firstValue(event.target.value);
	// };
	// const secondTextHandler = (event) => {
	// 	props.secondValue(event.target.value);
	// };
	// const thirdTextHandler = (event) => {
	// 	props.thirdValue(event.target.value);
	// };
	// const fourthTextHandler = (event) => {
	// 	props.fourthValue(event.target.value);
	// };

	useEffect(() => {
		if (newVerCtx.versionId == '') {
			navigate('/dashboard', { replace: true });
		}
	}, []);
	return (
		<section className='bodySection'>
			<div className='stepOneOfEleven'>
				<div>
					<h5 className='whatIsBothering'>What is bothering you?</h5>
				</div>
				<div className='paragraph'>
					<p>
						What is bothering you? Is it stress, distractions, pressures, fear,
						something, someone? Is there something that you want or need? this
						question is like a to do list. It can be as simple as a scuff on
						your shoe that is bothering you or as complex as that bad
						relationship that you want to get out of - either one of these can
						lead to a downward spiral. The list may be long at first, but it
						will begin to shrink before you know it as you start addressing the
						items on the list and start seeing the difference in yourself. Some
						examples: my job stinks, the house needs to be painted, I'm lonely,
						my housing situation is unbearable, a lack of money, relationship
						problems.
					</p>
					<p>
						<b>
							Go ahead and take a couple of minutes to list some of the things
							that are bothering you.
						</b>
					</p>
				</div>
				<StepOneAdd
					onNewText={(event) => {
						newVerCtx.stepOneFirstHandler(event.target.value);
					}}
					value={newVerCtx.stepOneFirst}
				/>
				<div></div>
				<StepOneAdd
					onNewText={(event) =>
						newVerCtx.stepOneSecondHandler(event.target.value)
					}
					value={newVerCtx.stepOneSecond}
				/>
				<div></div>
				<StepOneAdd
					onNewText={(event) => {
						newVerCtx.stepOneThirdHandler(event.target.value);
					}}
					value={newVerCtx.stepOneThird}
				/>
				<StepOneAdd
					onNewText={(event) => {
						newVerCtx.stepOneFourthHandler(event.target.value);
					}}
					value={newVerCtx.stepOneFourth}
				/>
				<div></div>
				{/* {textarea.length > 0 ? (
					textarea.map((i, key) => <StepOneAdd i={i} />)
				) : (
					<div></div>
				)} */}
				{/* <div className='add'>
					<div>
						<button onClick={addAnother} className='AddMore'>
							<div className='addition'>+</div>
							<div>Add another</div>
						</button>
					</div>
				</div> */}
			</div>
		</section>
	);
};

export default StepOne;
