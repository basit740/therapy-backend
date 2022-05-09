import React from 'react';
import MyVersionsLeft from './MyVersionsLeft';
import { Link } from 'react-router-dom';

const MyVersion = ({ date, status, id, onAction }) => {
	const formatedDate = new Date(date);

	var month = formatedDate.getUTCMonth() + 1; //months from 1-12
	var day = formatedDate.getUTCDate();
	var year = formatedDate.getUTCFullYear();

	day.toString().length === 1 ? (day = '0' + day) : (day = day);
	month.toString().length === 1 ? (month = '0' + month) : (month = month);
	const properDate = day + '/' + month + '/' + year;

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
		default:
		// do nothing
	}

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
						onClick={onAction}
					>
						{versionAction}
					</Link>
				</td>
			</tr>
		</>
	);
};

export default MyVersion;
