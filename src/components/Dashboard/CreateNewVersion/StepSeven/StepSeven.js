import React, { useState, useEffect } from 'react';
import './StepSeven.css';
import Thoughts from './Thoughts';

const allCards = document.querySelectorAll('thought-card');

const StepSeven = () => {
	const [thoughtCards, setThoughtCards] = useState('');
	allCards.forEach((card) => {
		card.addEventListener('dragover', () => {
			console.log('drag over');
		});
	});
	const newThoughtHandler = (newThought) => {
		console.log(newThought);

		let indexOfThoughtCard = newThought.cardId;
		setThoughtCards((thoughtCards) => {
			return [...thoughtCards[indexOfThoughtCard].thoughts, newThought];
		});
	};
	return (
		<section className='step-seven'>
			<h2>Identify and elimnate "The Monkey Mind"</h2>
			<p>
				When thoughts come into your mind that you do not know where they come
				from. Buddhist Monks call this the "Monkey Mind". These thoughts are
				mostly coming from subconscious and may not have mouch of impact unless
				you let them. They can cause worrries, fears, sadness, and clutter your
				mind. And according to a Harvard study, we spen 47% of our time lost in
				thought. Just like the types of foods we put in our bodies can have a
				negative effect, what's in our minds can do so as well. The good thing
				is the brain can be rewired as we can learn new ways of thinking. It's
				called Neuroplasticity.
			</p>
			<p>
				{' '}
				Some examples of the Monkey Mind at work: I am going to lose my job; I
				might not be able to pay the bills; nothing is good enough; I am not
				good enough; my life has been as waste; I am failure;
			</p>

			<p>
				What are some of these Monkey Mind thoughts that are on your mind? List
				them below and then classify them into these four categories with how
				realistic they are:
			</p>
			<div className='thoughts'>
				<Thoughts />
			</div>
		</section>
	);
};

export default StepSeven;
