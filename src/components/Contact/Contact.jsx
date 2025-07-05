import React from 'react';
import styles from './Contact.module.css'
import Heading from '../Heading/Heading';
import Text from '../Text/Text';

function Contact() {
    return (
        <div id="contact" className={styles.wrapper}>
            <Heading level={3} style={{fontSize: "2rem", marginTop: "48px", textAlign: 'left'}}>Want to get in touch? Or just say Hi?</Heading>
            <Text>
               Drop me a line at zarvisalpha258@gmail.com
                <br />
                Follow me on  Twitter. This is where I share most of my work.
            </Text>

            
        </div>
    )
}

export default Contact
