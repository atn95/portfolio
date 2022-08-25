import type { NextPage } from 'next';
import styles from '../styles/pages/Home.module.css';
import Link from 'next/link';

const Home: NextPage = () => {
	return (
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
						<span className={styles.bodyText}> Software Engineer </span>
						{`</p>`}
					</p>
				</div>
			</div>
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
	);
};

export default Home;
