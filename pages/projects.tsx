import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { projects } from '../data/data';
import styles from '../styles/pages/Project.module.css';
import ComponentBox from '../components/ComponentBox';

export default function Projects<NextPage>() {
	let [projectList, setProjectList] = useState(projects);
	return (
		<ComponentBox tag={'Projects'}>
			<div className={styles.container}>
				<div className={styles['header-container']}>
					<p className={styles['tag']}>{'<h2>'}</p>
					<h1 className={styles['header']}>Projects</h1>
					<p className={styles['tag']}>{'</h2>'}</p>
				</div>
				<div className={styles['projects-container']}>
					{projectList.map((project) => (
						<div className={styles['project-card']}>{project.name}</div>
					))}
				</div>
			</div>{' '}
		</ComponentBox>
	);
}
