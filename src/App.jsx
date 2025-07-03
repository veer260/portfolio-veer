
import './App.css'
import About from './components/About/About';
import Grid from './components/Grid/Grid';
import Header from './components/Header/Header';
import Mask from './components/Mask/Mask';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import TransitionText from './components/TransitionText/TransitionText';

function App() {
  


  return (
    <div className='wrapper'>
      <Header />

      <div className='grid-wrapper'>
        <Grid />
        <Mask >
          <TransitionText texts={['work', 'creations', 'craft']} />
        </Mask>
      </div>
      

      <div className="max-width-wrapper">
        <About />
        <Skills />
        <Projects />


      </div>
 
  
    </div>
  )
}

export default App;
