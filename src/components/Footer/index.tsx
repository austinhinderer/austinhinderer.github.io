import React from 'react';

import * as styles from './styles.module.scss';

const Footer = () => {
    return (
        <footer className={styles.root}>
        <div className="row">
          <div className="large-12 columns">
            <p className={styles.footerLinkWrapper}>
                <a href="/">Home</a>&nbsp;-&nbsp;
                <a href="https://github.com/austinhinderer/">GitHub</a>&nbsp;-&nbsp;
                <a href="https://www.linkedin.com/in/austinhinderer">LinkedIn</a>
            </p>
            &copy; Austin Hinderer {new Date().getFullYear()}</div>
        </div>
      </footer>
    )
};

export default Footer;