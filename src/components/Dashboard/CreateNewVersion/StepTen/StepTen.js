import React, { useState } from 'react';
import classes from './StepTen.module.css';
import TagsManager from '../../UtilityComponents/TagsManager/TagsManager';

import {
	lifeRules,
	lifeBreakthroughs,
	lifeRealizations,
} from '../../../../data/stepTenData';

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
				<h2>
					Write down and review your Life Rules, Breakthroughs and Realizatons.
				</h2>
				<p>
					Withe continuous use of thies tool combined with time spent on
					analyzing why and how things happend and how to best deal with them,
					answers begin to form for many of the things you are trying to solve
					or deal with. This sections is alsow where you can keep track of the
					things you lean about yourself and others. This helps to reinforce the
					positive things you have done. And also servers as reminder where you
					were at how much better things can become when you seek solutions to
					the things that bother you or are negatively affect you.
				</p>

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
