import './App.css';

import Home from './Components/Home/Home'
import Aboutme from './Components/Aboutme/Aboutme'
import Education from './Components/Education/Education'

import Projects from './Components/Projects/Projects'
import Certifications from './Components/Certifications/Certifications'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Aboutme/>
      <Education/>
      
      <Projects/>
      <Certifications/>
      <Footer/>
    </div>
  );
}

export default App;
