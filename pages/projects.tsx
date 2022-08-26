import { techStack } from '../data/type';
import { useState, useEffect } from 'react';
import { projects } from '../data/data';
import styles from '../styles/pages/Project.module.css';
import ComponentBox from '../components/ComponentBox';
import Image from 'next/image';
import { techs as stack } from '../data/data';
import { NextPage } from 'next';

const Projects: NextPage = () => {
	const [projectList] = useState(projects);
	const [displayProjectList, setDisplayProjectList] = useState(projects);
	const [techs] = useState<Array<techStack>>(stack);

	const [selectedTech, setSelectedTech] = useState<Array<techStack>>(stack);

	const toggleStack = (index: number) => {
		const selectedTechCopy = [...selectedTech];
		if (selectedTechCopy.includes(techs[index])) {
			selectedTechCopy.splice(selectedTech.indexOf(techs[index]), 1);
		} else {
			selectedTechCopy.push(techs[index]);
		}
		setSelectedTech(selectedTechCopy);
	};

	useEffect(() => {
		const filteredProj = [];
		const selectedTechNames = selectedTech.map((tech) => tech.name);
		for (const proj of projectList) {
			for (const tech of proj.techs) {
				if (selectedTechNames.includes(tech.name)) {
					filteredProj.push(proj);
					break;
				}
			}
		}
		setDisplayProjectList(filteredProj);
	}, [selectedTech]);

	return (
		<ComponentBox tag={'Projects'}>
			<div className={styles.container}>
				<div className={styles['title-bar']}>
					<div className={styles['header-container']}>
						<p className={styles['tag']}>{'<h2>'}</p>
						<h1 className={styles['header']}>Projects</h1>
						<p className={styles['tag']}>{'</h2>'}</p>
					</div>
					<div className={styles['filter-comp']}>
						<div className={styles['filter-options-container']}>
							<p className={styles['filter-label']}>
								<span className={styles['tag-small']}>{'<h4>'}</span> Filter: <span className={styles['tag-small']}>{'</h4>'}</span>
							</p>
							<div className={styles['filter-btn-container']}>
								<button onClick={() => setSelectedTech([])} className={styles['filter-btn']}>
									Clear All
								</button>
								<button onClick={() => setSelectedTech(stack)} className={styles['filter-btn']}>
									Select All
								</button>
							</div>
						</div>
						<div className={styles['filter-container']}>
							{techs.map((tech, index) => (
								<div key={index} onClick={() => toggleStack(index)} className={[styles['tech-icon'], selectedTech.includes(tech) ? styles['selected-tech'] : undefined].join(' ')}>
									<Image src={tech.icon} width='48px' height='48px' alt={`${tech.name}`} />
								</div>
							))}
						</div>
					</div>
				</div>
				<br className={styles['line-break']} />
				<br className={styles['line-break']} />
				<br className={styles['line-break']} />
				<br className={styles['line-break2']} />
				<br className={styles['line-break2']} />
				<br className={styles['line-break2']} />
				<br />
				<br />
				<div className={styles['projects-container']}>
					{displayProjectList.map((project, index) => (
						<div key={index} className={styles['project-card']}>
							<ComponentBox tag={project.name}>
								<div className={styles['project-display']}>
									<div className={styles['img-container']}>
										<img src={project.thumbnail} alt='Project Picture' />
									</div>
									<div className={styles['description']}>
										<p className={styles['tag-small']}>{'<p>'}</p>
										<p className={styles['description-text']}>{project.description}</p>
										<p className={styles['tag-small']}>{'</p>'}</p>
									</div>
									<div className={styles['links-container']}>
										<div className={styles['links']} onClick={() => window.open(project.github)}>
											<a target='_blank'>Github</a>
										</div>
										<div className={styles['links']} onClick={() => window.open(project.deployed)}>
											Live
										</div>
									</div>
								</div>
							</ComponentBox>
						</div>
					))}
				</div>
			</div>{' '}
		</ComponentBox>
	);
};

export default Projects;
