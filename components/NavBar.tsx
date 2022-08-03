import Link from 'next/link';
import { ReactElement } from 'react';
import styles from '../styles/NavBar.module.css';

export default function NavBar(): ReactElement {
	return (
		<div className={styles.container}>
			<Link href={'/'}>
				<div className={styles.navItem}>{'//1. <Home />'}</div>
			</Link>

			<Link href={'/projects'}>
				<div className={styles.navItem}>{'//2.  <Projects/>'}</div>
			</Link>
			<Link href={'/about'}>
				<div className={styles.navItem}>{'//3.  <About/>'}</div>
			</Link>

			<Link href={'/contact'}>
				<div className={styles.navItem}>{'//4.  <Contact/>'}</div>
			</Link>
		</div>
	);
}
