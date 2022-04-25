import React from 'react';

import './MyVersionsLeft.css';

const MyVersionsLeft = () => {
	return (
		<div className='my-versions-left'>
			<h6>MY VERSIONS</h6>
			<table cellSpacing='0' cellPadding='0'>
				<thead>
					<tr>
						<th>Date</th>
						<th>Status</th>
						<th>Action</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td className='width-10'>09/11/2001</td>
						<td className='width-10'>
							<span className='status-chip'>In Progress</span>
						</td>
						<td colSpan='2'>
							<span className='action-chip'>Continue Version</span>
						</td>
					</tr>
					<tr>
						<td className='width-10'>09/11/2001</td>
						<td className='width-10'>
							<span className='status-chip'>Complete</span>
						</td>
						<td colSpan='2'>Edit</td>
					</tr>

					<tr>
						<td className='width-10'>09/11/2001</td>
						<td className='width-10'>
							<span className='status-chip'>Not Started</span>
						</td>
						<td colSpan='2'>
							<span className='action-chip bg-black'>Start Version</span>
						</td>
					</tr>

					<tr>
						<td className='width-10'>09/11/2001</td>
						<td className='width-10'>
							<span className='status-chip'>In Progress</span>
						</td>
						<td colSpan='2'>
							<span className='action-chip'>Continue Version</span>
						</td>
					</tr>
					<tr>
						<td className='width-10'>09/11/2001</td>
						<td className='width-10'>
							<span className='status-chip'>Complete</span>
						</td>
						<td colSpan='2'>Edit</td>
					</tr>
					<tr>
						<td className='width-10'>09/11/2001</td>
						<td className='width-10'>
							<span className='status-chip'>Complete</span>
						</td>
						<td colSpan='2'>Edit</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default MyVersionsLeft;
