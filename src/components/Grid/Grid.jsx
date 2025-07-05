import React from 'react';
import styles from './Grid.module.css';

function Grid() {
    const id = React.useId();
    const columns = [];
    for(let i = 0; i < 60; i++) {
        for(let j = 0; j < 60; j++) {
            columns.push(<span key={`${id}:${i}:${j}`} className={styles.column}></span>);
        }
    }


    return (
        <div id="home" className={styles.grid}>
           {
            columns
           } 
        </div>
    )
}

export default Grid
