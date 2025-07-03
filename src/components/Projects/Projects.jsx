import React from 'react';
import styles from './Projects.module.css'

const images = ['button', 'pixelated', 'fluid','pokemon', 'grid','game-of-life' ,  'drawing-tool', 'gardient'];

function Projects() {
    return (
        <div className={styles.projectsWrapper}>
            <h2 className={styles.heading}>Work Compilation 2023-202X</h2>
            <div className={styles.projectsSlider}>

                {
                    images.map((img) => {
                        return (
                            <div key={img} className={styles.imageWrapper}>
                                <img src={`../public/images/${img}.png`} alt=""/>
                            </div>
                        )
                    })
                }
            </div>
            
        </div>
    )
}

export default Projects
