import { project, techStack } from './type';
import { css, django, express, github, html, javascript, java, mongodb, nodejs, postgresql, python, react, springboot, vue } from '../assets/tech/index';

export const rainBinary: Array<String> = ['01010111 01100101 01101100 01100011 01101111 01101101 01100101 00001101 00001010', '01000011 01100001 01101110 00100000 01111001 01101111 01110101 00100000 01110010 01100101 01100001 01100100 00100000 01110100 01101000 01101001 01110011', '01000110 01101111 01110010 00100000 01101000 01101001 01110010 01100101', '01001000 01100101 01101100 01101100 01101111'];

export const projects: Array<project> = [
	{
		name: 'DynaSoar Polling',
		deployed: 'https://dynasoar.herokuapp.com/',
		github: 'https://github.com/steves3142/dynamic_polling_frontend',
		thumbnail: 'https://i.imgur.com/3N7XJKm.png',
		description: 'Front end page for a PERN stack web application. It serves to connect Host and client to a room where the host can send questions to clients and recieve realtime answers. Has a fully functional chat and announcement system. Realtime communication through SocketIO.',
		techs: [
			{ name: 'css', icon: css },
			{ name: 'html', icon: html },
			{ name: 'javascript', icon: javascript },
			{ name: 'github', icon: github },
			{ name: 'react', icon: react },
			{ name: 'nodejs', icon: nodejs },
		],
	},
	{
		name: 'DynaSoar Polling Backend',
		deployed: '',
		github: 'https://github.com/steves3142/dynamic_polling_backend',
		thumbnail: 'https://i.imgur.com/3N7XJKm.png',
		description: 'Backend for DynaSoar Polling. Written in express with Sequelize to connect to a PostgreSQL. Serves to handle registering and logging questions for later calls. Also serves as controller for SocketIO communication.',
		techs: [
			{ name: 'javascript', icon: javascript },
			{ name: 'express', icon: express },
			{ name: 'github', icon: github },
			{ name: 'postgresql', icon: postgresql },
			{ name: 'nodejs', icon: nodejs },
		],
	},
	{
		name: 'Fitness Tracker',
		deployed: 'https://atntracker.herokuapp.com/',
		github: 'https://github.com/atn95/exercise_planner_tracker',
		thumbnail: 'https://i.imgur.com/3N7XJKm.png',
		description: 'A MERN stack application to create a 7 day workout schedule. On the days you have a workout it will pull up your workout for the day and allow you to log the workout. Your lift data can be pulled up and charted the see progression for certain lifts. The front end will communicate with the backend server through RESTful enpoints. Data is then stored in mongodb.',
		techs: [
			{ name: 'css', icon: css },
			{ name: 'html', icon: html },
			{ name: 'javascript', icon: javascript },
			{ name: 'express', icon: express },
			{ name: 'github', icon: github },
			{ name: 'mongodb', icon: mongodb },
			{ name: 'nodejs', icon: nodejs },
			{ name: 'react', icon: react },
		],
	},
	{
		name: 'Tetris',
		deployed: 'https://atntetris.surge.sh/',
		github: 'https://github.com/atn95/Tetris',
		thumbnail: 'https://i.imgur.com/3N7XJKm.png',
		description: 'Oldschool Tetris themed game. Has an queue of next pieces and hold pieces along with a ghost piece showing where the piece would land. ',
		techs: [
			{ name: 'css', icon: css },
			{ name: 'html', icon: html },
			{ name: 'javascript', icon: javascript },
			{ name: 'github', icon: github },
		],
	},
];

export const techs: Array<techStack> = [
	{ name: 'css', icon: css },
	{ name: 'django', icon: django },
	{ name: 'express', icon: express },
	{ name: 'github', icon: github },
	{ name: 'html', icon: html },
	{ name: 'javascript', icon: javascript },
	{ name: 'java', icon: java },
	{ name: 'mongodb', icon: mongodb },
	{ name: 'nodejs', icon: nodejs },
	{ name: 'postgresql', icon: postgresql },
	{ name: 'python', icon: python },
	{ name: 'react', icon: react },
	{ name: 'springboot', icon: springboot },
	{ name: 'vue', icon: vue },
];
