import React from 'react';

import VisionBoardCard from './VisionBoardCard';
import classes from './VisionBoard.module.css';
const VisionBoard = () => {
	let currentYear = new Date().getFullYear();

	let fiveYears = {
		currentYear: currentYear,
		currentYearFirstNext: currentYear + 1,
		currentYearSecondNext: currentYear + 2,
		currentYearThirdNext: currentYear + 3,
		currentYearFourthNext: currentYear + 4,
	};
	return (
		<div className={classes['vision-board']}>
			<div className='row'>
				<div className='col no-padding' style={{ padding: '0' }}>
					<VisionBoardCard year={fiveYears.currentYear} />
				</div>
				<div className='col no-padding' style={{ padding: '0' }}>
					<VisionBoardCard year={fiveYears.currentYearFirstNext} />
				</div>
				<div className='col' style={{ padding: '0' }}>
					<VisionBoardCard year={fiveYears.currentYearSecondNext} />
				</div>
			</div>
			<div className='row'>
				<div className='col' style={{ padding: '0' }}>
					<VisionBoardCard year={fiveYears.currentYearThirdNext} />
				</div>
				<div className='col' style={{ padding: '0' }}>
					<VisionBoardCard year={fiveYears.currentYearFourthNext} />
				</div>
				<div className='col' style={{ padding: '0' }}></div>
			</div>
		</div>
	);
};

export default VisionBoard;
