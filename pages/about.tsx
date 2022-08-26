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
						<p className={styles['tag']}>{'<h3>'}</p>
						<h1 className={styles['name']}>Name: An Nguyen</h1>
						<p className={styles['tag']}>{'</h3>'}</p>
						<p className={styles['tag']}>{'<p>'}</p>
						<p className={styles['body-txt']}>I am a Vietnamese American who moved to US in 2000 seeking better opportunities. I went to school for Pharmacy and graduated with a Doctor of Pharmacy (PharmD.) in 2019, but quickly discovered that this was not my passion. I wanted to do something more, but more importantly something I wanted to do.</p>
						<p className={styles['tag']}>{'<br />'}</p>
						<p className={styles['body-txt']}>Growing up I have always been an avid gamer and dreamed of building my own big game. This had lead me to taking many programming classes in Highschool. I quickly fell in love with the problem solving aspect of programming. This is why I decided to come back to programming because I find it fun and something I enjoy doing.</p>
						<p className={styles['tag']}>{'</p>'}</p>
					</div>
				</div>
				<button className={styles['contact-btn']}>Contact Me</button>
			</div>
		</ComponentBox>
	);
}

export default about;
