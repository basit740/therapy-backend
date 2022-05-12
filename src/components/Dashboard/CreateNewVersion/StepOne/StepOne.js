import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NewVersionContext from '../../../../store/new-version-context';
import './StepOne.css';
import StepOneAdd from './StepOneAdd';
import StepOneStatic from './StepOneStatic';

const StepOne = (props) => {
	const navigate = useNavigate();
	// let [textarea, setTextarea] = useState([1, 2, 3]);

	const newVerCtx = useContext(NewVersionContext);
	// const addAnother = () => {
	// 	let check = textarea.length + 1;
	// 	setTextarea([...textarea, check]);
	// };

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
		if (newVerCtx.versionId === '') {
			navigate('/dashboard', { replace: true });
		}
	}, [newVerCtx.versionId, navigate]);
	return (
		<section className='bodySection'>
			<div className='stepOneOfEleven'>
				<div>
					<h5 className='whatIsBothering'>What is bothering you?</h5>
				</div>
				<StepOneStatic />
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
