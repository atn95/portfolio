import { project } from './type';

export const rainBinary: Array<String> = [
	'01010111 01100101 01101100 01100011 01101111 01101101 01100101 00001101 00001010',
	'01000011 01100001 01101110 00100000 01111001 01101111 01110101 00100000 01110010 01100101 01100001 01100100 00100000 01110100 01101000 01101001 01110011',
	'01000110 01101111 01110010 00100000 01101000 01101001 01110010 01100101',
	'01001000 01100101 01101100 01101100 01101111',
];

export const projects: Array<project> = [
	{ name: '', deployed: '', github: '', thumbnail: '', description: '' },
	{ name: '', deployed: '', github: '', thumbnail: '', description: '' },
	{
		name: 'Fitness Tracker',
		deployed: 'https://atntracker.herokuapp.com/',
		github: 'https://github.com/atn95/exercise_planner_tracker',
		thumbnail: 'https://i.imgur.com/3N7XJKm.png',
		description:
			'A MERN stack application to create a 7 day workout schedule. On the days you have a workout it will pull up your workout for the day and allow you to log the workout. Your lift data can be pulled up and charted the see progression for certain lifts',
	},
	{
		name: 'Tetris',
		deployed: 'https://atntetris.surge.sh/',
		github: 'https://github.com/atn95/Tetris',
		thumbnail: 'https://i.imgur.com/3N7XJKm.png',
		description:
			'Oldschool Tetris themed game. Has an queue of next pieces and hold pieces along with a ghost piece showing where the piece would land. ',
	},
];
