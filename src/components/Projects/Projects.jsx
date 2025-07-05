import React from 'react';
import styles from './Projects.module.css'
import Heading from '../Heading/Heading';
import Text from '../Text/Text';
import Emphasised from '../Emphasised/Emphasised';

const images = ['button', 'pixelated', 'fluid','pokemon', 'grid','game-of-life' ,  'drawing-tool', 'gardient'];

function Projects() {
    return (
        <div id="work" className={styles.projectsWrapper}>
            <h2 className={styles.heading}>Work Compilation 2023-202X</h2>
            <div className={styles.projectsSlider}>
                {
                    images.map((img) =>  <div key={img} className={styles.imageWrapper}>
                                            <img src={`/images/${img}.png`} alt=""/>
                                        </div>
                                )
                }
            </div>
            <div className={styles.CSSLab}>
                <Heading level={3} style={{fontSize: '2rem', marginTop: '48px'}}  >
                    CSS laboratory
                </Heading>
                <Text style={{color: 'var(--gray-1000)', fontSize: '1.2rem', textAlign: 'justify'}} >
                    Ever since I started working with JS and CSS, I was fascinated by the idea of reproducing beautiful animations such as glowy buttons, <Emphasised>3d-effects</Emphasised>  in CSS and <Emphasised>SVG animations</Emphasised> . Balancing the physical aspect of these effects and aesthetics for a pleasing output was the most challenging part of this exploratory work.
                </Text>
                <article className={styles.miniProject}>
                    <a href="http://portfolio-veer-p9pe.vercel.app/" target='_blank' >
                         <Heading level={4} style={{fontSize: "1.4rem", color: 'var(--gray-1100)' , textAlign: 'left', fontStyle: 'italic'}} >Fancy Button</Heading>
                    </a>
               
                    <Text style={{fontSize: "1.1rem"}} >This is a beautiful button made with radial gradient, dotted background and some tricky css animations</Text>
                </article>
                <article className={styles.miniProject}>
                    <a href="https://canvas-shimmer.vercel.app/" target='_blank' >
                        <Heading level={4} style={{fontSize: "1.4rem", color: 'var(--gray-1100)' , textAlign: 'left', fontStyle: 'italic'}} >Shimmer effect card</Heading>
                    </a> 
                    <Text style={{fontSize: "1.1rem"}} >This is a card component made with canvas, and some clever JS implementation. I saw this card component on clerk.dev website. I was mesemerised by it so I made my own.</Text>
                </article>
                
            </div>

            <div className={styles.JSLab}>
                <Heading level={4} style={{fontSize: '2rem', 'margin-top': '48px'}} >JS Sorcery</Heading>
                <Text style={{color: 'var(--gray-1000)', fontSize: '1.2rem', textAlign: 'justify'}}>These are some projects that required a 'more than healthy" amount of JS. Making these increased my confidence in my core skills altogether turning me into a good developer. </Text>
                <article className={styles.miniProject}>
                     <a href="https://canvas-shimmer.vercel.app/" target='_blank' >
                        <Heading level={4} style={{fontSize: "1.4rem", color: 'var(--gray-1100)' , textAlign: 'left', fontStyle: 'italic'}} >Shimmer effect card</Heading>
                    </a> 
                    <Text style={{fontSize: "1.1rem"}} >This is a card component made with canvas, and some clever JS implementation. I saw this card component on clerk.dev website. I was mesemerised by it so I made my own.</Text>
                </article>
                <article className={styles.miniProject}>
                    <a href="https://game-of-life-five-iota.vercel.app/" target='_blank'>
                           <Heading level={4} style={{fontSize: "1.4rem", color: 'var(--gray-1100)' , textAlign: 'left', fontStyle: 'italic'}} >Game of life</Heading>
                    </a>
             
                    <Text style={{fontSize: "1.1rem"}} >I made this for a coding challenge in one of the hiring drives by Cactro. Really enjoyed making it.</Text>
                </article>
                <article className={styles.miniProject}>
                    <a href="https://snake-flax.vercel.app/" target='_blank'>
                             <Heading level={4} style={{fontSize: "1.4rem", color: 'var(--gray-1100)' , textAlign: 'left', fontStyle: 'italic'}} >Snake game</Heading>
                    </a>
           
                    <Text style={{fontSize: "1.1rem"}} >"Javascipty" implementation of the first game I played back in the day in my dad's nokia 1200. It was the first thing I made that felt <Emphasised>alive</Emphasised> which made me proud.</Text>
                </article>

            </div>

            <div className={styles.ReactLab}>
                <Heading level={4} style={{fontSize: '2rem', 'margin-top': '48px'}} >"Big" Projects </Heading>
                <Text style={{color: 'var(--gray-1000)', fontSize: '1.2rem', textAlign: 'justify'}}>
                    Projects with large code bases. Made with <Emphasised>React</Emphasised>, <Emphasised>JS</Emphasised> and <Emphasised>CSS</Emphasised>. State management done on <Emphasised>Redux</Emphasised>. These projects were a great learning experience culminating different technoologies to give a proper project that is useful for other people. 
                </Text>
                <article className={styles.miniProject}>
                    <a href="" target='_blank'>
                            <Heading level={4} style={{fontSize: "1.4rem", color: 'var(--gray-1100)' , textAlign: 'left', fontStyle: 'italic'}} >Pokedex </Heading>

                    </a>
                
                    <Text style={{fontSize: "1.1rem"}} >As a boy who grew up binge-watching cartoons like a madman, I had some idea that I will build something like this as soon as I'll be able to. Works like the one shown in the animated series. Search pokemons, track their locations, see evolutions. Overall, a fun project.</Text>
                </article>
                <article className={styles.miniProject}>
                    <a href="" target='_blank'>
                          <Heading level={4} style={{fontSize: "1.4rem", color: 'var(--gray-1100)' , textAlign: 'left', fontStyle: 'italic'}} >Drawing tool</Heading>

                    </a>
                  
                    <Text style={{fontSize: "1.1rem"}} >Again a project leveraging what canvas offers. Simple drawing tool to sketch your ideas using nothing but your mouse.</Text>
                </article>
                <article className={styles.miniProject}>
                    <a href="https://gradient-generator-zeta-seven.vercel.app/"  target='_blank'>
                       <Heading level={4} style={{fontSize: "1.4rem", color: 'var(--gray-1100)' , textAlign: 'left', fontStyle: 'italic'}} >Better Gradient Generator</Heading>
                    
                    </a>
                 
                    <Text style={{fontSize: "1.1rem"}} >This is the latest addition to this catalogue. Inspired by <Emphasised>Josh Cameau's Gradient generator</Emphasised>, I made this to build a tool that solves a problem. This creates gradients that don't have gray sprinkled b/w the colors useful for anyone looking to create gradients with perpetually similar colors. </Text>
                </article>


            </div>
            
            
        </div>
    )
}

export default Projects
