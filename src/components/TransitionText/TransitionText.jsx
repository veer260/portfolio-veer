import React from 'react';
import styles from './TransitionText.module.css';
// import transition from '../utils/transition';

function TransitionText({ texts}) {
    const [idx, setIdx] = React.useState(0);
    const [text, setText] = React.useState(texts[0]);

    const letters = 'abcdefghijklmnopqrstuvwxyz';


    //to change text at regular intervals
function transition( next, timing) {
    let iterations = 0;

    const id = setInterval(() => {
        const newWordArray = [];
        for(let i = 0; i < next.length; i++) {
          if(iterations >= timing * i/next.length){
            newWordArray.push(next[i]);
            continue;
          }
          newWordArray.push(letters[Math.floor(Math.random()*26)]);
        }
        const newWord = newWordArray.join('');
        iterations++;
    setText(newWord);

        if(iterations >= timing ) {
          clearInterval(id);
        }
    }, 10);

    
}
    //effect to change the id at regular intervals
    React.useEffect(() => {
        const id = setInterval(() => {
            transition(texts[idx], 90);

            // transition()
            setIdx((prev) => (prev+1) % texts.length);
        },4 * 1000)
        return () => {
            clearInterval(id);
        }
    },[idx]);

    return (
        <>
        <p className={styles.text}>
            The online home <br />
            of Veer's <span className={styles.transitioningText}>{text}</span>
          <span style={{display: 'block'}}  className={styles.secretText}>Pet the cat to find what Veer's vibin' to</span>

        </p>

        </>
        
    )
}

export default TransitionText
