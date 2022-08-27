import Link from 'next/link';
import { ReactElement } from 'react';
import styles from '../styles/components/NavBar.module.css';
import { useRouter } from 'next/router';

interface props {
	unfocus: () => void;
}

export default function NavBar({ unfocus }: props): ReactElement {
	const router = useRouter();
	const currentRoute = router.pathname;

	return (
		<div className={styles['main-container']}>
			<div className={styles.container}>
				<Link href={'/'}>
					<div className={[styles['nav-item'], currentRoute == '/' ? styles['active'] : undefined].join(' ')}>
						<div>{'//1. <Home />'}</div>
						<div className={styles['border-animation']}></div>
					</div>
				</Link>
				<Link href={'/projects'}>
					<div className={[styles['nav-item'], currentRoute == '/projects' ? styles['active'] : undefined].join(' ')}>
						<div>{'//2.  <Projects/>'}</div>
						<div className={styles['border-animation']}></div>
					</div>
				</Link>
				<Link href={'/about'}>
					<div className={[styles['nav-item'], currentRoute == '/about' ? styles['active'] : undefined].join(' ')}>
						<div>{'//3.  <About/>'}</div>
						<div className={styles['border-animation']}></div>
					</div>
				</Link>
				<Link href={'/contact'}>
					<div className={[styles['nav-item'], currentRoute == '/contact' ? styles['active'] : undefined].join(' ')}>
						<div>{'//4.  <Contact/>'}</div>
						<div className={styles['border-animation']}></div>
					</div>
				</Link>
			</div>
			<div className={styles['mobile-nav-container']}>
				<div className={styles['mobile-header']}>
					<div className={styles['open-btn']}>
						<p className={styles['open-btn-text']}>㊂</p>
						<Link href={'/'}>
							<div className={[styles['nav-btn'], currentRoute == '/' ? styles['active'] : undefined].join(' ')} onClick={() => unfocus()}>
								{'//1. <Home />'}
							</div>
						</Link>
						<Link href={'/projects'}>
							<div className={[styles['nav-btn'], currentRoute == '/projects' ? styles['active'] : undefined].join(' ')} onClick={() => unfocus()}>
								{'//2. <Projects />'}
							</div>
						</Link>
						<Link href={'/contact'}>
							<div className={[styles['nav-btn'], currentRoute == '/contact' ? styles['active'] : undefined].join(' ')} onClick={() => unfocus()}>
								{'//3. <Contact />'}
							</div>
						</Link>
						<Link href={'/about'}>
							<div className={[styles['nav-btn'], currentRoute == '/about' ? styles['active'] : undefined].join(' ')} onClick={() => unfocus()}>
								{'//4. <About />'}
							</div>
						</Link>
					</div>
					<div className={styles['head-text-cont']}>
						<h2 className={styles['head-text']}>An T. Nguyen</h2>
					</div>
				</div>
			</div>
		</div>
	);
}
