import React, { PropsWithChildren } from 'react';

import * as styles from './styles.module.scss';

const Button = (props: PropsWithChildren) => {
	const { children } = props;

	return (
		<a className={styles.root} href="/resume.pdf">
			{children}
		</a>
	);
};

export default Button;
