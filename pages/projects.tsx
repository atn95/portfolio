import { techStack } from '../data/type';
import { useState, useEffect } from 'react';
import { projects } from '../data/data';
import styles from '../styles/pages/Project.module.css';
import ComponentBox from '../components/ComponentBox';
import Image from 'next/image';
import { techs as stack } from '../data/data';

export default function Projects<NextPage>() {
	const [projectList, setProjectList] = useState(projects);
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
					console.log('breaking');
					filteredProj.push(proj);
					break;
				}
			}
		}
		console.log(filteredProj);
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
					<div className={styles['filter-container']}>
						{techs.map((tech, index) => (
							<div onClick={() => toggleStack(index)} className={[styles['tech-icon'], selectedTech.includes(tech) ? styles['selected-tech'] : undefined].join(' ')}>
								<Image src={tech.icon} width='32px' height='32px' alt={`${tech.name}`} />
							</div>
						))}
					</div>
				</div>
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
								</div>
							</ComponentBox>
						</div>
					))}
				</div>
			</div>{' '}
		</ComponentBox>
	);
}
