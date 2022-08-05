import React from 'react'
import './Header.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faInfo, faBarsProgress, faDiagramProject, faCertificate} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll'

const Header = () => {
  return (
    <div className='header'>
        <nav className="navbar navbar-expand-sm menu">
            <div className="container-fluid">
                <Link  className="logo" to='/'>GR </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" style={{color:'yellow'}}>
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link"
                                    to='aboutme'
                                    span={true}
                                    smooth={true}>
                                    <FontAwesomeIcon icon = {faInfo}/>  Acerca de mi
                                </Link>
                        </li>
                        <li className="nav-item">
                                <Link className="nav-link" 
                                    
                                    to='education'
                                    span={true}
                                    smooth={true}
                                    >
                                    <FontAwesomeIcon icon = {faBarsProgress}/> Resumen
                                </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" 
                                to='projects'
                                span={true}
                                smooth={true}
                                >
                                <FontAwesomeIcon icon = {faDiagramProject}/> Proyectos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" 
                                to='certifications'
                                span={true}
                                smooth={true}
                                >
                                <FontAwesomeIcon icon = {faCertificate}/> Certificaciones
                            </Link>
                        </li>  
                    </ul>
                </div>
            </div>
        </nav>       
    </div>
  )
}

export default Header