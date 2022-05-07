import React, { useState, useEffect, useContext } from 'react';

import Step11Context from '../../../../store/step-eleven';

import classes from './FiveSliders.module.css';
import PersonalSlider from '../Slider/Slider';

const FiveSliders = ({
	first,
	second,
	third,
	fourth,
	fifth,
	onValues,
	id,
	values,
}) => {
	const s11Ctx = useContext(Step11Context);

	// useEffect(() => {
	// 	console.log('rendered', id);

	// 	if (id == '1' && s11Ctx.step1Sliders != null) {
	// 		console.log('first', s11Ctx.step1Sliders);
	// 		first = s11Ctx.step1Sliders[0];
	// 		second = s11Ctx.step1Sliders[1];
	// 		third = s11Ctx.step1Sliders[2];
	// 		fourth = s11Ctx.step1Sliders[3];
	// 		fifth = s11Ctx.step1Sliders[4];
	// 	} else if (id == '2' && s11Ctx.step2Sliders != null) {
	// 		console.log('second', s11Ctx.step2Sliders);
	// 		first = s11Ctx.step2Sliders[0];
	// 		second = s11Ctx.step2Sliders[1];
	// 		third = s11Ctx.step2Sliders[2];
	// 		fourth = s11Ctx.step2Sliders[3];
	// 		fifth = s11Ctx.step2Sliders[4];
	// 	} else if (id == '3' && s11Ctx.step3Sliders != null) {
	// 		console.log('third', s11Ctx.Step31Context);
	// 		first = s11Ctx.step3Sliders[0];
	// 		second = s11Ctx.step3Sliders[1];
	// 		third = s11Ctx.step3Sliders[2];
	// 		fourth = s11Ctx.step3Sliders[3];
	// 		fifth = s11Ctx.step3Sliders[4];
	// 	} else if (id == '4' && s11Ctx.step4Sliders != null) {
	// 		console.log('fourth', s11Ctx.step4Sliders);
	// 		first = s11Ctx.step4Sliders[0];
	// 		second = s11Ctx.step4Sliders[1];
	// 		third = s11Ctx.step4Sliders[2];
	// 		fourth = s11Ctx.step4Sliders[3];
	// 		fifth = s11Ctx.step4Sliders[4];
	// 	} else if (id == '5' && s11Ctx.step5Sliders != null) {
	// 		console.log('fifth', s11Ctx.step5Sliders);
	// 		first = s11Ctx.step5Sliders[0];
	// 		second = s11Ctx.step5Sliders[1];
	// 		third = s11Ctx.step5Sliders[2];
	// 		fourth = s11Ctx.step5Sliders[3];
	// 		fifth = s11Ctx.step5Sliders[4];
	// 	}
	// }, []);
	return (
		<section className={classes['five-sliders']}>
			{values.map((v) => {
				return (
					<PersonalSlider
						title={v.title}
						id={v.id}
						value={v.value}
						onChange={onValues}
					/>
				);
			})}

			{/* <PersonalSlider
				title={first.title}
				id={first.id}
				value={first.value}
				onChange={onValues}
			/>
			<PersonalSlider
				title={second.title}
				id={second.id}
				value={second.value}
				onChange={onValues}
			/>
			<PersonalSlider
				title={third.title}
				id={third.id}
				value={third.value}
				onChange={onValues}
			/>
			<PersonalSlider
				title={fourth.title}
				id={fourth.id}
				value={fourth.value}
				onChange={onValues}
			/>
			<PersonalSlider
				title={fifth.title}
				id={fifth.id}
				value={fifth.value}
				onChange={onValues}
			/> */}
		</section>
	);
};

export default FiveSliders;
