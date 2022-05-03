import React, { useState } from 'react';
import classes from './StepTen.module.css';
import TagsManager from '../../UtilityComponents/TagsManager/TagsManager';

import {
	lifeRules,
	lifeBreakthroughs,
	lifeRealizations,
} from '../../../../data/stepTenData';
import StepTenStatic from './StepTenStatic';

const StepTen = () => {
	const [selectedLifeRules, setSelectedLifeRules] = useState([]);
	const [selectedLifeRealizations, setSelectedLifeRealizations] = useState([]);
	const [selectedLifeBreakthrouhgs, setSelectedLifeBreakthroughs] = useState(
		[]
	);

	const lifeRulesHandler = (selectedTags) => {
		setSelectedLifeRules(selectedTags);
	};
	const lifeRealizationsHandler = (selectedTags) => {
		setSelectedLifeRealizations(selectedTags);
	};
	const lifeBreakthrouhgsHandler = (selectedTags) => {
		setSelectedLifeBreakthroughs(selectedTags);
	};
	return (
		<div className={classes['step-ten-container']}>
			<div className={classes['step-ten']}>
				<StepTenStatic />

				{/*  first Tags Manager */}

				<TagsManager
					title='List Some Life Rules'
					defaultTags={lifeRules}
					onSelectedTags={lifeRulesHandler}
					instrucitons='Or choose from some backup life rules examples'
				/>

				{/* second Tags Manager */}

				<TagsManager
					title='List Some Realizations'
					defaultTags={lifeRealizations}
					onSelectedTags={lifeRealizationsHandler}
					instrucitons='Or choose from some backup Realizations examples'
				/>

				{/*third Tags Manager */}
				<TagsManager
					title='List Some Breakthroughs'
					defaultTags={lifeBreakthroughs}
					onSelectedTags={lifeBreakthrouhgsHandler}
					instrucitons='Or choose from some backup breakthroughs examples'
				/>
			</div>
		</div>
	);
};

export default StepTen;
