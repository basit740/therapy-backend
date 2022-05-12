import React, { useState, useContext, useEffect, useReducer } from 'react';
import NewVersionContext from '../../store/new-version-context';
import AuthContext from '../../store/auth-context';
import './NewVersion.css';
import { Link, useNavigate } from 'react-router-dom';

import { createVersion, getVersions, getVersion } from '../../api/version';

import Modal from '../Common/Modal/Modal.js';
import Step from './Step.js';

// data
import { steps } from '../../data/new-version/steps';
import reducer, { initialState } from './newVersionReducer';
import { Skeleton } from '@mui/material';

const NewVersion = () => {
	const newVerCtx = useContext(NewVersionContext);
	const authCtx = useContext(AuthContext);

	const [state, dispatch] = useReducer(reducer, initialState);

	// const [showForm, setShowForm] = useState(false);
	// const [versionName, setVersionName] = useState('');
	// //just using it
	// console.log(versionName);
	// const [isLoading, setIsLoading] = useState(false);
	// const [buttonText, setButtonText] = useState('Submit');

	// states for managing version drop down

	const [versions, setVersions] = useState([]);
	//const [selectedVersion, setSelectedVersion] = useState(null);
	//const [selectedStep, setSelectedStep] = useState(null);
	//

	// Modal State

	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [request, setRequest] = useState({
		sending: false,
		feedback: '',
		error: '',
	});
	const navigate = useNavigate();
	//const inputRef = useRef();

	const newVersionHandler = (event) => {
		event.preventDefault();
		//setShowForm(true);
		setModalIsOpen(true);
		//inputRef.current.focus();
	};

	// const versionNameHandler = (event) => {
	// 	setVersionName(event.target.value);
	// };
	const versionInputHandler = () => {
		let prev = { ...request };
		prev.error = '';
		setRequest(prev);
	};

	const submitHandler = async (value) => {
		setRequest({
			sending: true,
			feedback: 'Creating version....',
		});

		const version = {
			versionName: value,
		};

		const result = await createVersion(version);

		setRequest({
			sending: false,
		});
		if (result.success === false) {
			if (result.error === 'jwt expired') {
				authCtx.logout();
				navigate('/auth', { replace: true });
			}
			setRequest({
				error: result.error,
			});
		} else {
			newVerCtx.versionIdHandler(result.data._id);
			newVerCtx.currentStepHandler(1);
			newVerCtx.stepOneValuesClearer();
			navigate('/dashboard/newjourney');
		}
	};

	// select version functionality

	const versionSelector = async (event) => {
		newVerCtx.versionIdHandler(event.target.value);
		dispatch({
			type: 'DATA_LOADING',
		});

		const response = await getVersion(event.target.value);
		if (response.success) {
			//setSelectedVersion(response.data);
			dispatch({
				type: 'SELECT_VERSION',
				payload: {
					version: response.data,
				},
			});

			newVerCtx.currentStepHandler(response.data.stepsCount + 1);
		} else {
			return;
		}

		//const version = response.data;
		//setSelectedStep(version.stepsCount + 1);
	};

	useEffect(() => {
		console.log('use Effect 1 in New Version');
		console.log(state);
	}, [state]);
	useEffect(() => {
		(async () => {
			const response = await getVersions();
			if (response.success && response.data.length > 0) {
				const filterd = response.data.filter((v) => v.status === 'in_progress');
				setVersions((prev) => {
					return [...filterd];
				});

				// for state update

				const recentVersions = response.data.sort(
					(a, b) => new Date(b.createdAt) - new Date(a.createdAt)
				);

				const latestInProgress = recentVersions.find((v) => {
					return v.status === 'in_progress';
				});

				newVerCtx.versionIdHandler(latestInProgress._id);
				newVerCtx.currentStepHandler(latestInProgress.stepsCount + 1); // this is how MyProgress is handling formStep

				// for state upadate

				dispatch({
					type: 'DATA_FROM_SERVER',
					payload: {
						data: response.data,
					},
				});
			}
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div className='new-version-container'>
			{modalIsOpen && (
				<Modal
					modalIsOpen={modalIsOpen}
					title='Create New Version'
					inputs={[
						{
							label: 'Version Name',
							type: 'text',
							placeholder: 'Put Version Name here',
						},
					]}
					onInput={versionInputHandler}
					onClose={() => setModalIsOpen(false)}
					request={request}
					onSubmit={submitHandler}
				/>
			)}
			<div className='new-version'>
				<div className='new-version-action'>
					<div className=''></div>
					<div className='choose-version'>
						<label>Choose Veresion</label>
						<select onChange={versionSelector}>
							{versions.map((v) => {
								return <option value={v._id}>{v.versionName}</option>;
							})}
						</select>
					</div>

					<div className='new-version-button'>
						<div className='new-version-button-content'>
							<Link to='/dashboard/newjourney' onClick={newVersionHandler}>
								Create New Version
							</Link>
						</div>
					</div>
				</div>
				<div className='black-line'>
					<hr></hr>
				</div>

				<div className='continue-version'>
					<div className='first-box'>
						<h6>Continue Version</h6>
						<div className='first-box-content'>
							STEP{' '}
							{state.isLoading && (
								<Skeleton
									animation='wave'
									style={{
										width: '20px',
										height: '20px',
										display: 'inline-block',
										marginTop: '10px',
									}}
								/>
							)}{' '}
							{!state.isLoading && state.selectedVersion.stepsCount}
							<h3>
								{state.isLoading && (
									<Skeleton
										animation='wave'
										style={{
											width: '300px',
											height: '100px',
										}}
									/>
								)}
								{!state.isLoading &&
									steps.find(
										(s) => s.stepNumber === state.selectedVersion.stepsCount
									).stepTitle}
							</h3>
							<div className='first-box-content-tag'>
								<span>Duration: 15 minutes</span>
							</div>
							<button>
								<Link to='/dashboard/newjourney' style={{ color: 'white' }}>
									Continue
								</Link>
							</button>
						</div>
					</div>
					<div className='second-box'>
						<h6 className='h6-upper'>Or Skip to anothers step</h6>
						<div className='steps__first_five'>
							{/* <Step actionType='View' title={} />
							<Step actionType='View' />
							<Step actionType='Edit' />
							<Step actionType='Edit' />
							<Step actionType='Start' /> */}
							{state.isLoading &&
								steps.map((s, index) => {
									if (index < 5) {
										return (
											<Skeleton
												style={{
													height: '80px',
												}}
											/>
										);
									}
									return null;
								})}

							{!state.isLoading &&
								state.firstFive.map((s, index) => {
									return (
										<Step
											title={s.stepTitle}
											date={state.selectedVersion.createdAt}
											actionType='Edit'
											stepNumber={s.stepNumber}
										/>
									);
								})}
						</div>
					</div>
					<div className='third-box'>
						<h6 style={{ color: 'white' }}>this is third box</h6>
						{state.isLoading &&
							steps.map((s, index) => {
								if (index < 5) {
									return (
										<Skeleton
											style={{
												height: '80px',
											}}
										/>
									);
								}
								return null;
							})}

						{!state.isLoading &&
							state.secondFive.map((s, index) => {
								return (
									<Step
										title={s.stepTitle}
										date={state.selectedVersion.createdAt}
										actionType='Edit'
										stepNumber={s.stepNumber}
									/>
								);
							})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewVersion;

//{steps[selectedVersion - 1].stepNumber}
//{steps[selectedVersion - 1].stepTitle}
