import Link from 'next/link';
import { ReactElement } from 'react';
import styles from '../styles/NavBar.module.css';

export default function NavBar(): ReactElement {
	return (
		<div className={styles.container}>
			<Link href={'/'}>
				<div className={styles['nav-item']}>
					<div>{'//1. <Home />'}</div>
					<div className={styles['border-animation']}></div>
				</div>
			</Link>

			<Link href={'/projects'}>
				<div className={styles['nav-item']}>
					<div>{'//2.  <Projects/>'}</div>
					<div className={styles['border-animation']}></div>
				</div>
			</Link>
			<Link href={'/about'}>
				<div className={styles['nav-item']}>
					<div>{'//3.  <About/>'}</div>
					<div className={styles['border-animation']}></div>
				</div>
			</Link>
			<Link href={'/contact'}>
				<div className={styles['nav-item']}>
					<div>{'//4.  <Contact/>'}</div>
					<div className={styles['border-animation']}></div>
				</div>
			</Link>
		</div>
	);
}
