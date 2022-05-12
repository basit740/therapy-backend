import React from 'react';
//import MyVersionsLeft from './MyVersionsLeft';
import { Link } from 'react-router-dom';
import { dateFormatter } from '../../../utils/items';

const MyVersion = ({ date, status, id, onAction, stepsCount }) => {
	const properDate = dateFormatter(date);

	let statusText = '';
	let versionAction = 'START VERSION';

	let vClass = '';

	if (status === 'not_started') {
		vClass = 'action-chip';
		vClass += ' bg-black';
	} else if (status === 'in_progress') {
		vClass = 'action-chip';
	} else {
		vClass = 'no-style';
	}

	switch (status) {
		case 'not_started':
			statusText = 'Not Started';
			versionAction = 'START VERSION';
			break;
		case 'in_progress':
			statusText = 'In Progress';
			versionAction = 'CONTINUE VERSION';
			break;
		case 'completed':
			statusText = 'Complete';
			versionAction = 'Edit';
			break;
		default:
		// do nothing
	}

	const actionHandler = (event) => {
		event.preventDefault();
		onAction(event.target.id, stepsCount);
	};

	return (
		<>
			<tr id={id}>
				<td className='width-10'>{properDate}</td>
				<td className='width-10'>
					<span className='status-chip'>{statusText}</span>
				</td>
				<td colSpan='2'>
					{/* <span className='action-chip'>Continue Version</span> */}
					<Link
						className={vClass}
						to='/dashboard/newjourney'
						id={id}
						onClick={actionHandler}
					>
						{versionAction}
					</Link>
				</td>
			</tr>
		</>
	);
};

export default MyVersion;
