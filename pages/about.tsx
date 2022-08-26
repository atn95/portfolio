import ComponentBox from '../components/ComponentBox';
import styles from '../styles/pages/About.module.css';

function about() {
	return (
		<ComponentBox tag='About'>
			<div className={styles.container}>
				<div className={styles['title-bar']}>
					<div className={styles['header-container']}>
						<p className={styles['tag']}>{'<h2>'}</p>
						<h1 className={styles['header']}>About</h1>
						<p className={styles['tag']}>{'</h2>'}</p>
					</div>
					<br />
					<div>
						<p className={styles['tag']}>{'<h2>'}</p>
						<h1 className={styles['name']}>Name: An Nguyen</h1>
						<p className={styles['tag']}>{'</h2>'}</p>
						<p className={styles['tag']}>{'<p>'}</p>
						<p className={styles['body-txt']}>I'm Software engineer who enjoys problem solving and challenges. I love learning about new efficient methods and applying it to my work. I will never stop seeking improvements because there's always a better way.</p>
						<p className={styles['tag']}>{'</p>'}</p>
					</div>
				</div>
			</div>
		</ComponentBox>
	);
}

export default about;
