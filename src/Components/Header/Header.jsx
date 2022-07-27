import React, {useState} from 'react'
import './Header.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHouseChimney, faInfo, faGraduationCap, faBriefcase, faBarsProgress, faDiagramProject, faCertificate, faSignIn} from '@fortawesome/free-solid-svg-icons'
//import Logo from '../../image/logoAP.png'
import { Link } from 'react-router-dom'




const Header = () => {
    const mobile = window.innerWidth<=768 ? true: false;
  const [menuOpened, setMenuOpened] = useState(false)
  return (
    <div >
        {(menuOpened===false && mobile===true)? (
        <div style={{backgroundColor: 'var(--appColor)',
          padding:'0.5rem',
          borderRadius: '5px'}}
          
          onClick={() => setMenuOpened(true)}>
    </div>
        ):(
        <nav className="navbar navbar-expand-lg  menu" style={{padding:"2rem"}}>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                
                    <Link className=" logo" to='/' >GR</Link>
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link" 
                                onClick={()=>setMenuOpened(false)}
                                to='home'
                                span={true}
                                smooth={true}
                                >
                                <FontAwesomeIcon icon = {faHouseChimney}/>Inicio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" 
                                onClick={()=>setMenuOpened(false)}
                                to='aboutme'
                                span={true}
                                smooth={true}
                                >
                                <FontAwesomeIcon icon = {faInfo}/> Acerca de
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='education'>
                                <FontAwesomeIcon icon = {faGraduationCap}/>Educación
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='experiences'>
                                <FontAwesomeIcon icon = {faBriefcase}/> Experiencias
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/skills'>
                                <FontAwesomeIcon icon = {faBarsProgress}/>Habilidades
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/projects'>
                                <FontAwesomeIcon icon = {faDiagramProject}/>Proyectos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/certifications'>
                                <FontAwesomeIcon icon = {faCertificate}/>Certificaciones
                            </Link>
                        </li>

                    </ul>
                    <div className="navbar-nav ms-auto">
                    <button class="btn btn-outline-warning" type="submit">
                        
                            <FontAwesomeIcon icon = {faSignIn}/> Login
                            </button>  
                    </div>
                                
                </div>
            </div>
        </nav>
        )}  
    </div>
  )
}

export default Header