
import './App.css';
import {BrowserRouter as Router,Routes,  Route } from 'react-router-dom'
  
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Aboutme from './Components/Aboutme/Aboutme'
import Education from './Components/Education/Education'
import Experiences from './Components/Experiences/Experiences'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Certifications from './Components/Certifications/Certifications'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
        <Route path='/' exact component ={Home}/>
          <Route path='/aboutme'  component ={Aboutme}/>
          <Route path='/education'  component ={Education}/>
          <Route path='/experiences'  component ={Experiences}/>
          <Route path='/skills'  component ={Skills}/>
          <Route path='/projects'  component ={Projects}/>
          <Route path='/certifications'  component ={Certifications}/>
        </Routes>
        </Router>
        <Home />
        <Aboutme />
        <Education />
        <Experiences />
        <Skills />
        <Projects />
        <Certifications />
       
          {/*<Route path='/' exact component ={Home}/>
          <Route path='/aboutme'  component ={Aboutme}/>
          <Route path='/education'  component ={Education}/>
          <Route path='/experiences'  component ={Experiences}/>
          <Route path='/skills'  component ={Skills}/>
          <Route path='/projects'  component ={Projects}/>
  <Route path='/certifications'  component ={Certifications}/>*/}
      
      
    </div>
  );
}

export default App;
