import React from 'react';
import styles from './Text.module.css'

function Text({children, style}) {
    return (
        <p className={styles.text} style={{...style}}>
            {children}
        </p>
    )
}

export default Text;
