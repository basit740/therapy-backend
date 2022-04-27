import React, { useState, useRef, useContext } from 'react';
import NewVersionContext from '../../store/new-version-context';
import AuthContext from '../../store/auth-context';
import './NewVersion.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';

import { createVersion } from '../../api/version';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Step from './Step.js';

const NewVersion = () => {
	const newVerCtx = useContext(NewVersionContext);
	const authCtx = useContext(AuthContext);
	const [showForm, setShowForm] = useState(false);
	const [versionName, setVersionName] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [buttonText, setButtonText] = useState('Submit');
	const navigate = useNavigate();
	const inputRef = useRef();

	const newVersionHandler = (event) => {
		event.preventDefault();
		setShowForm(true);
		//inputRef.current.focus();
	};

	const versionNameHandler = (event) => {
		setVersionName(event.target.value);
	};

	const submitHandler = async (event) => {
		event.preventDefault();

		setIsLoading(true);
		const version = {
			versionName: versionName,
		};

		const result = await createVersion(version);

		setIsLoading(false);
		if (result.success === false) {
			if (result.error === 'jwt expired') {
				authCtx.logout();
				navigate('/auth', { replace: true });
			}
			toast.error(result.error, {
				position: 'top-center',
				theme: 'colored',
			});
		} else {
			newVerCtx.versionIdHandler(result.data._id);
			newVerCtx.stepOneValuesClearer();
			navigate('/dashboard/newjourney');
		}
	};
	return (
		<div className='new-version-container'>
			<div className='new-version'>
				<div className='new-version-action'>
					<div className=''></div>
					<div className='choose-version'>
						<label>Choose Veresion</label>
						<select>
							<option value='loss-of-grandma'>
								Dealing with the loss of Grandma
							</option>
						</select>
					</div>

					<div className='new-version-button'>
						<div className='new-version-form-container'>
							{showForm && (
								<form onSubmit={submitHandler}>
									<input
										type='text'
										autoFocus
										onChange={versionNameHandler}
										placeholder='enter version name here'
										disabled={isLoading ? true : false}
									/>

									<input
										type='submit'
										disabled={isLoading ? true : false}
										value={isLoading ? 'Creating...' : 'Submit'}
									/>
								</form>
							)}
						</div>
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
							STEP 4
							<h3>
								Replace non productive coping methods with "Mean Time Tools"
							</h3>
							<div className='first-box-content-tag'>
								<span>Duration: 15 minutes</span>
							</div>
							<button>Continue</button>
						</div>
					</div>
					<div className='second-box'>
						<h6 className='h6-upper'>Or Skip to anothers step</h6>
						<div className='steps__first_five'>
							<Step actionType='View' />
							<Step actionType='View' />
							<Step actionType='Edit' />
							<Step actionType='Edit' />
							<Step actionType='Start' />
						</div>
					</div>
					<div className='third-box'>
						<h6 style={{ color: 'white' }}>this is third box</h6>
						<Step />
						<Step />
						<Step />
						<Step />
						<Step />
					</div>
				</div>
			</div>
			<ToastContainer />
		</div>
	);
};

export default NewVersion;
