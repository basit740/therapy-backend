import { slidersData } from '../../../../../data/slidersData';

export const ACTIONS = {
	NEXT: 'next',
	PREV: 'prev',
	FIRST_VALUES: 'first_values',
	SECOND_VALUES: 'second_values',
	THIRD_VALUES: 'third_values',
	FOURTH_VALUES: 'fourth_values',
	FIFTH_VALUES: 'fifth_values',
	VALUES: 'values',
	DOT_CLICK: 'dot_click',
};

export const initialState = {
	currentStep: '1',
	showNextBtn: true,
	showPrevBtn: false,
	firstValues: [
		{
			id: '1',
			title: 'Happier',
			value: 1,
		},
		{
			id: '2',
			title: 'Less Stressed',
			value: 1,
		},
		{
			id: '3',
			title: 'More optimistic',
			value: 1,
		},
		{
			id: '4',
			title: 'Excited',
			value: 1,
		},
		{
			id: '5',
			title: 'Focused',
			value: 1,
		},
	],
	secondValues: [
		{
			id: '6',
			title: 'Better habbits',
			value: 1,
		},
		{
			id: '7',
			title: 'More patience',
			value: 1,
		},
		{
			id: '8',
			title: 'I am more motivated',
			value: 1,
		},
		{
			id: '9',
			title: 'I am more grateful',
			value: 1,
		},
		{
			id: '10',
			title: 'I am more active',
			value: 1,
		},
	],
	thirdValues: [
		{
			id: '11',
			title: 'Wiser',
			value: 1,
		},
		{
			id: '12',
			title: 'Peaceful',
			value: 1,
		},
		{
			id: '13',
			title: 'Hopeful',
			value: 1,
		},
		{
			id: '14',
			title: 'Less lonely',
			value: 1,
		},
		{
			id: '15',
			title: 'More accepting',
			value: 1,
		},
	],
	fourthValues: [
		{
			id: '16',
			title: 'Greater Sense of Identity',
			value: 1,
		},
		{
			id: '17',
			title: 'More forgiving',
			value: 1,
		},
		{
			id: '18',
			title: 'More purpose',
			value: 1,
		},
		{
			id: '19',
			title: 'More mature',
			value: 1,
		},
		{
			id: '20',
			title: 'Less procrastination',
			value: 1,
		},
	],
	fifthValues: [
		{
			id: '21',
			title: 'More Confident',
			value: 1,
		},
		{
			id: '22',
			title: 'Better self-control',
			value: 1,
		},
		{
			id: '23',
			title: 'Less judgemental',
			value: 1,
		},
		{
			id: '24',
			title: 'Eating Well',
			value: 1,
		},
		{
			id: '25',
			title: 'Excercising',
			value: 1,
		},
	],

	slidersData: slidersData,
};
