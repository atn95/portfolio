import React, { ReactElement } from 'react';
import styles from '../styles/components/ComponentBox.module.css';

interface props {
	children?: React.ReactNode;
	tag?: string;
}

function ComponentBox(props: props) {
	return (
		<div className={styles['container']}>
			<div className={styles['before']}>{`< ${props.tag} />`}</div>
			<div>{props.children}</div>
		</div>
	);
}

export default ComponentBox;
