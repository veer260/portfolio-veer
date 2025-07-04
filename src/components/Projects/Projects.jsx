import React from 'react';
import styles from './Projects.module.css'
import Heading from '../Heading/Heading';
import Text from '../Text/Text';
import Emphasised from '../Emphasised/Emphasised';

const images = ['button', 'pixelated', 'fluid','pokemon', 'grid','game-of-life' ,  'drawing-tool', 'gardient'];

function Projects() {
    return (
        <div className={styles.projectsWrapper}>
            <h2 className={styles.heading}>Work Compilation 2023-202X</h2>
            <div className={styles.projectsSlider}>
                {
                    images.map((img) =>  <div key={img} className={styles.imageWrapper}>
                                            <img src={`../public/images/${img}.png`} alt=""/>
                                        </div>
                                )
                }
            </div>
            <div>
                <Heading level={3} style={{fontSize: '2rem', color: 'var(--gray-1100)', 'margin-top': '48px'}}  >
                    CSS laboratory
                </Heading>
                <Text style={{color: 'var(--gray-1000)', fontSize: '1.3rem', textAlign: 'justify'}} >
                    Ever since I started working with JS and CSS, I was fascinated by the idea of reproducing beautiful animations such as glowy buttons, <Emphasised>3d-effects</Emphasised>  in CSS and <Emphasised>SVG animations</Emphasised> . Balancing the physical aspect of these effects and aesthetics for a pleasing output was the most challenging part of this exploratory work.
                </Text>
            </div>
            
            
        </div>
    )
}

export default Projects
