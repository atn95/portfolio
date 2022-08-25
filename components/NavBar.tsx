import Link from 'next/link';
import { ReactElement } from 'react';
import styles from '../styles/components/NavBar.module.css';
import { useRouter } from 'next/router';

export default function NavBar(): ReactElement {
	const router = useRouter();
	const currentRoute = router.pathname;

	return (
		<div className={styles.container}>
			<Link href={'/'}>
				<div
					className={[styles['nav-item'], currentRoute == '/' ? styles['active'] : undefined].join(
						' '
					)}>
					<div>{'//1. <Home />'}</div>
					<div className={styles['border-animation']}></div>
				</div>
			</Link>

			<Link href={'/projects'}>
				<div
					className={[
						styles['nav-item'],
						currentRoute == '/projects' ? styles['active'] : undefined,
					].join(' ')}>
					<div>{'//2.  <Projects/>'}</div>
					<div className={styles['border-animation']}></div>
				</div>
			</Link>
			<Link href={'/about'}>
				<div
					className={[
						styles['nav-item'],
						currentRoute == '/about' ? styles['active'] : undefined,
					].join(' ')}>
					<div>{'//3.  <About/>'}</div>
					<div className={styles['border-animation']}></div>
				</div>
			</Link>
			<Link href={'/contact'}>
				<div
					className={[
						styles['nav-item'],
						currentRoute == '/contact' ? styles['active'] : undefined,
					].join(' ')}>
					<div>{'//4.  <Contact/>'}</div>
					<div className={styles['border-animation']}></div>
				</div>
			</Link>
		</div>
	);
}
