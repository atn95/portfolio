import { useState, useRef } from 'react';
import NavBar from './NavBar';
import Head from 'next/head';
import Image from 'next/image';
import { rainBinary as msgArray } from '../data/data';
import useInterval from '../hooks/useInterval';
import githubImg from '../assets/githubContact.png';
import LinkedinImg from '../assets/Linkedin.png';

export default function Layout({ children }: { children: React.ReactNode }) {
	const [rainBinary] = useState<Array<String>>(msgArray);
	const [rainPos, setRainPos] = useState<number>(0);
	const [rainMsg, setRainMsg] = useState(rainBinary[0]);
	const pageRef = useRef<HTMLDivElement>(null);

	const unfocus = (): void => {
		pageRef.current?.focus();
	};

	useInterval(() => {
		setRainPos(Math.floor(Math.random() * (window.innerWidth - 40) + 10));
		setRainMsg(rainBinary[Math.floor(Math.random() * rainBinary.length)]);
	}, 15000);

	return (
		<div className='page' ref={pageRef}>
			<Head>
				<title>An Nguyen{`'`}s Portfolio</title>
				<meta name='description' content={`An Nguyen's Portfolio. Full Stack Developer`} />
				<link rel='icon' href='/favicon.png' type='image/x-icon' />
				<link rel='apple-touch-icon' sizes='180x180' href='/favicon180.png' />
				<link rel='icon' type='image/png' sizes='32x32' href='/favicon32.png' />
				<link rel='icon' type='image/png' sizes='16x16' href='/favicon16.png' />
			</Head>
			<div className='rain' style={{ left: `${rainPos}px` }}>
				<p>{rainMsg}</p>
			</div>
			<div className='linkedin-icon' onClick={() => window.open(`https://www.linkedin.com/in/atn95/`)}>
				<Image src={LinkedinImg} alt='Linkedin atn95'></Image>
			</div>
			<div className='github-icon' onClick={() => window.open(`https://github.com/atn95`)}>
				<Image src={githubImg} alt='Github atn95'></Image>
			</div>
			<NavBar unfocus={unfocus} />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			{children}
			<br />
			<div style={{ color: 'white' }}>{/*footer*/}</div>
		</div>
	);
}
