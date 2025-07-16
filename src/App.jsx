
import './App.css'
import About from './components/About/About';
import Cat from './components/Cat/Cat.jsx';
import Contact from './components/Contact/Contact';
import Grid from './components/Grid/Grid';
import Header from './components/Header/Header';
import Mask from './components/Mask/Mask';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import TransitionText from './components/TransitionText/TransitionText';
import SpotifySong from './routes/spotify/SpotifySong.jsx';

function App() {
  return (
    <div className='wrapper'>
      <Header />

      {/* <div className='grid-wrapper'> */}
        {/* <Grid /> */}
        {/* <Mask >

        </Mask> */}
      {/* </div> */}
      <div className='home'>
          <TransitionText texts={['work', 'creations', 'craft']} />
          <Cat />
          {/* <SpotifySong /> */}




      </div>
      

      <div className="max-width-wrapper">
        <About />
        <Skills />
        <Projects />
        <Contact />


      </div>
 
  
    </div>
  )
}

export default App;
