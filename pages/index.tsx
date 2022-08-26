import type { NextPage } from 'next';
import styles from '../styles/pages/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { techs as stack } from '../data/data';
import ComponentBox from '../components/ComponentBox';

const Home: NextPage = () => {
	return (
		<ComponentBox tag='Home'>
			<div className={styles.container}>
				<div className={styles.bodyCont}>
					<div className={styles.bodyBlock}>
						<p className={styles.tagText}>
							{`<p>`}
							<span className={styles.bodyText}> This is </span>
							{`</p>`}
						</p>
						<div className={styles.nameBlock}>
							<p className={[styles.tagText, styles.tabbed].join(' ')}> &nbsp;{'<h1>'}</p>
							<h1 className={[styles.bigNameText, styles.tabbed].join(' ')}>An Tan Nguyen</h1>
							<p className={[styles.tagText, styles.tabbed].join(' ')}>{'</h1>'}</p>
						</div>
						<p className={styles.tagText}>
							{`<p>`}
							<span className={styles.bodyText}> I'm Software engineer who enjoys problem solving and challenges. I love learning about new efficient methods and applying it to my work. I will never stop seeking improvements because there's always a better way. </span>
							{`</p>`}
						</p>
					</div>
					<br />
					<div className={styles['stack-container']}>
						<div>
							<p className={styles.tagText}>{'<h3>'}</p>
							<p className={styles['stack-label']}>Tech: </p>
							<p className={styles.tagText}>{'</h3>'}</p>
						</div>
						<div className={styles['tech-list']}>
							{stack.map((tech, index) => (
								<div key={index} className={styles['tech-icon']}>
									<Image src={tech.icon} width='48px' height='48px' alt={`${tech.name}`} />
								</div>
							))}
						</div>
					</div>
				</div>
				<br className={styles['break-line']} />
				<br className={styles['break-line']} />
				<br className={styles['break-line']} />
				<br className={styles['break-line']} />
				<div className={styles.resumeCont}>
					<Link href='resume.docx'>
						<div className={styles.resumeBox}>
							<h3 className={styles.resumeBtnText}>
								{`<`} <span className={styles.dlTxt}>Download</span>
								<br />
								{` src="resume"/>`}
							</h3>
						</div>
					</Link>
				</div>
			</div>
		</ComponentBox>
	);
};

export default Home;
