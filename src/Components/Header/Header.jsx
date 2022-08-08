import React from 'react'
import './Header.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faInfo, faBarsProgress, faDiagramProject, faCertificate, faHome} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll'

const Header = () => {
  return (
    <div className='header'>
        <nav className="navbar navbar-expand-sm menu">
            <div className="container-fluid">
                <Link  className="logo" to='/'>GR</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation" style={{color:'rgb(194, 145, 153)'}}>
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link"
                                    to='home'
                                    smooth={true}>
                                    <FontAwesomeIcon icon = {faHome} className="icono-nav"/>Home
                                </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"
                                    to='aboutme'
                                    smooth={true}>
                                    <FontAwesomeIcon icon = {faInfo} className="icono-nav"/>Acerca de mi
                            </Link>
                        </li>
                        <li className="nav-item">
                                <Link className="nav-link" 
                                    to='education'
                                    smooth={true}
                                    >
                                    <FontAwesomeIcon icon = {faBarsProgress} className="icono-nav"/>Resumen
                                </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" 
                                to='projects'
                                smooth={true}
                                >
                                <FontAwesomeIcon icon = {faDiagramProject} className="icono-nav"/>Proyectos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" 
                                to='certifications'
                                smooth={true}
                                >
                                <FontAwesomeIcon icon = {faCertificate} className="icono-nav"/>Certificaciones
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