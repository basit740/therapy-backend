import React, { useState } from 'react';
import { replace } from 'formik';

const NewVersionContext = React.createContext({
	versionId: '',
	versionIdHandler: (versionId) => {},

	stepOneFirstHandler: (val) => {},
	stepOneSecondHandler: (val) => {},
	stepOneThirdHandler: (val) => {},
	stepOneFourthHandler: (val) => {},
	stepOneValuesClearer: () => {},
	stepOneSaver: () => {},
	stepOneUnSaver: () => {},
	stepOneFirst: '',
	stepOneSecond: '',
	stepOneThird: '',
	stepOneFourth: '',
	stepOneSaved: false,

	stepTwoIssuesModifier: (issues) => {},
	stepTwoIssues: {},
	stepTwoClearer: () => {},

	stepThreeFeelingsModifier: (feelings) => {},
	stepTwoFeelings: [],
});

export const NewVersionContextProvider = (props) => {
	const [versionId, setVersionId] = useState('');

	// For StepOne Context
	const [stepOneFirst, setStepOneFirst] = useState('');
	const [stepOneSecond, setStepOneSecond] = useState('');
	const [stepOneThird, setStepOneThird] = useState('');
	const [stepOneFourth, setStepOneFourth] = useState('');

	const [stepOneSaved, setStepOneSaved] = useState(false);

	// StepTwo
	const [stepTwoIssues, setStepTwoIssues] = useState({});

	// stepThree
	const [stepThreeState, setStepThreeState] = useState();

	const versionIdHandler = (versionId) => {
		setStepOneSaved(false);
		setVersionId(versionId);
	};

	const stepOneFirstHandler = (val) => {
		setStepOneSaved(false);
		setStepOneFirst(val);
	};

	const stepOneSecondHandler = (val) => {
		setStepOneSaved(false);
		setStepOneSecond(val);
	};
	const stepOneThirdHandler = (val) => {
		setStepOneThird(val);
	};

	const stepOneFourthHandler = (val) => {
		setStepOneFourth(val);
	};

	const stepOneValuesClearer = () => {
		setStepOneFirst('');
		setStepOneSecond('');
		setStepOneThird('');

		setStepOneSaved(false);
	};

	const stepOneSaver = () => {
		setStepOneSaved(true);
	};
	const stepOneUnSaver = () => {
		setStepOneSaved(false);
	};

	// stepTwo Issues

	const stepTwoIssuesModifier = (issues) => {
		setStepTwoIssues(issues);
		//console.log(stepTwoIssues);
	};

	const stepTwoClearer = () => {
		setStepTwoIssues({});
	};

	// stepThree Feelings

	const stepThreeFeelingsModifier = (state) => {
		setStepThreeState(state);
		console.log(stepThreeState);
	};

	const contextValue = {
		versionIdHandler: versionIdHandler,
		versionId: versionId,
		stepOneValuesClearer,
		stepOneFirstHandler,
		stepOneFirst,
		stepOneSecondHandler,
		stepOneSecond,
		stepOneThirdHandler,
		stepOneThird,
		stepOneFourthHandler,
		stepOneFourth,
		stepOneSaver,
		stepOneUnSaver,
		stepOneSaved,
		stepTwoIssues,
		stepTwoIssuesModifier,
		stepTwoClearer,
		stepThreeFeelingsModifier,
		stepThreeState,
	};

	return (
		<NewVersionContext.Provider value={contextValue}>
			{props.children}
		</NewVersionContext.Provider>
	);
};

export default NewVersionContext;
