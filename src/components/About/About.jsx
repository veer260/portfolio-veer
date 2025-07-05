import React from 'react';
import styles from './About.module.css';

function About() {
    return (
        <div id="about" className={styles.textWrapper}>
            <p className={styles.text}>
               Hi! I'm Veer, a frontend engineer based in Uttar Pradesh. Welcome to my corner of the Internet, where I showcase my work, craft, unfinished or imperfect projects, and the many other things I'm exploring. &nbsp;
            </p>
            <p className={styles.text}>
                Throughout the past couple of years, I have been learning frontend development and animating parts of web, building well designed, fast, and delightful user experiences.
               During this time, I continuously refined my craft by sharpening my eye through the inspiring work of many other creative developers, designers, and 3D artists and working hard on my engineering skills to meet my ever-evolving taste in visual design.
            </p>
<p className={styles.text}>
My appetite for learning recently lead me to focus on what I believe is the future of the web: 3D, WebGL, and shaders.
</p>


<p className={styles.text}>
I love both Development & Design. so, That means I can create beautiful and functional websites. I'm always looking for new opportunities to learn and grow.
            </p>
            
        </div>
    )
}

export default About;
