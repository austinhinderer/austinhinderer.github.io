import React, { PropsWithChildren } from 'react';

import * as styles from './styles.module.scss';

export type ButtonProps = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = (props: PropsWithChildren<ButtonProps>) => {
    const { children, onClick } = props;

    return (
        <button className={styles.root} onClick={onClick}>
            {children}
        </button>
    )
};

export default Button;