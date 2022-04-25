import React, { useState } from 'react';
import classes from './FiveSliders.module.css';
import PersonalSlider from '../Slider/Slider';

const FiveSliders = ({ first, second, third, fourth, fifth, onValues }) => {
	const [allSliderValues, setAllSliderValues] = useState('');

	const [firstValue, setFirstValue] = useState(1);
	const [secondValue, setSecondValue] = useState(1);
	const [thirdValue, setSThirdValue] = useState(1);
	const [fourthValue, setFourthValue] = useState(1);
	const [fifthValue, setFifthValue] = useState(1);

	const firstChangeHandler = (event) => {
		setFirstValue(event.target.value);

		setAllSliderValues({
			first: event.target.value,
			second: secondValue,
			third: thirdValue,
			fourth: fourthValue,
			fifth: fifthValue,
		});
		onValues(allSliderValues);
	};
	const secondChangeHandler = (event) => {
		setSecondValue(event.target.value);
		setAllSliderValues({
			first: firstValue,
			second: event.target.value,
			third: thirdValue,
			fourth: fourthValue,
			fifth: fifthValue,
		});
		onValues(allSliderValues);
	};
	const thirdChangeHandler = (event) => {
		setSThirdValue(event.target.value);
		setAllSliderValues({
			first: firstValue,
			second: secondValue,
			third: event.target.value,
			fourth: fourthValue,
			fifth: fifthValue,
		});
		onValues(allSliderValues);
	};

	const fourthChangeHandler = (event) => {
		setFourthValue(event.target.value);
		setAllSliderValues({
			first: firstValue,
			second: secondValue,
			third: thirdValue,
			fourth: event.target.value,
			fifth: fifthValue,
		});
		onValues(allSliderValues);
	};

	const fifthChangeHandler = (event) => {
		setFifthValue(event.target.value);
		setAllSliderValues({
			first: firstValue,
			second: secondValue,
			third: thirdValue,
			fourth: fourthValue,
			fifth: event.target.value,
		});
		onValues(allSliderValues);
	};
	return (
		<section className={classes['five-sliders']}>
			<PersonalSlider
				title={first.title}
				id={first.id}
				value={firstValue}
				onChange={firstChangeHandler}
			/>
			<PersonalSlider
				title={second.title}
				id={second.id}
				value={secondValue}
				onChange={secondChangeHandler}
			/>
			<PersonalSlider
				title={third.title}
				id={third.id}
				value={thirdValue}
				onChange={thirdChangeHandler}
			/>
			<PersonalSlider
				title={fourth.title}
				id={fourth.id}
				value={fourthValue}
				onChange={fourthChangeHandler}
			/>
			<PersonalSlider
				title={fifth.title}
				id={fifth.id}
				value={fifthValue}
				onChange={fifthChangeHandler}
			/>
		</section>
	);
};

export default FiveSliders;
