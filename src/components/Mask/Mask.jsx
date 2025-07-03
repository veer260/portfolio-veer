import React from 'react';
import styles from './Mask.module.css';

function Mask({children}) {
    return (
        <div className={styles.mask}>
            {children}
        </div>
    )
}

export default Mask
