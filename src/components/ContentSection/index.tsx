import React, { PropsWithChildren } from 'react';

import * as styles from './styles.module.scss';

export type ContentSectionProps = {
    heading?: string;
};

const ContentSection = (props: PropsWithChildren<ContentSectionProps>) => {
    const { children, heading } = props;

    return (
        <div className={styles.root}>
            <div className="row">
                <div className="large-12 columns">
                    <h1 className={styles.titleAccent}>{heading}</h1>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ContentSection;