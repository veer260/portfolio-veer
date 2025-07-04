import React from 'react';
import styles from './Heading.module.css'

const headings = [1,2,3,4,5,6];
function Heading({level, style, children }) {
    if(!headings.includes(level)){
        console.alert('wrong level used');
    }
    const Tag = `h${level}`;
    return (
        <Tag className={styles.heading} style={{...style}} >
            {children}    
        </Tag>
    )
}

export default Heading
