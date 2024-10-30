import React, { PropsWithChildren } from 'react';

import * as styles from './styles.module.scss'

export type ContentSubsectionProps = {
    heading: string;
};

const ContentSubsection = (props: PropsWithChildren<ContentSubsectionProps>) => {
    const { children, heading } = props;
    return (
        <>
            <h2 className={styles.heading}>{heading}</h2>
            {children}
        </>
    )
};

export default ContentSubsection;