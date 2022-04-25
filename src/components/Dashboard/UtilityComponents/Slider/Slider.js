import React from 'react';

import classes from './Slider.module.css';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const PersonalSlider = (props) => {
	return (
		<div className={classes['personal-slider']} id={props.id}>
			<h5>{props.title}</h5>
			<Slider
				className={classes.slider}
				aria-label='Restricted values'
				valueLabelDisplay='auto'
				onChange={props.onChange}
				step={1}
				min={1}
				max={10}
				classes={{
					track: classes.track,
					rail: classes.rail,
					thumb: classes.thumb,
				}}
			/>
		</div>
	);
};

export default PersonalSlider;
