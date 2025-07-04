import React from 'react';
import styles from './Emphasised.module.css'

function Emphasised({children}) {
    return (
            <span className={styles.emphasised} style={{color: 'var(--gray-1200)'}}>
                {children}
            </span>
            
    )
}

export default Emphasised
