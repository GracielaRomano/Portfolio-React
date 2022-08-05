import React from 'react'
import './Footer.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPhone, faEnvelope} from'@fortawesome/free-solid-svg-icons'
import {faTwitter, faFacebook, faLinkedin, faGithub  } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div className="footer mt-auto py-3 "> 
        <div className="container-footer">
                <div>
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><Link to='home' className='link2'>Inicio</Link></li>
                        <li><Link to='aboutme'className='link2'>Acerca de mi</Link></li>
                        <li><Link to='education'className='link2'>Educacion</Link></li>
                        <li><Link to='experiences'className='link2'>Experiencias</Link></li>
                        <li><Link to='skills'className='link2'>Habilidades</Link></li>
                        <li><Link to='projects'className='link2'>Proyectos</Link></li>
                        <li><Link to='certifications'className='link2'>Certificaciones</Link></li>
                    </ul>
                </div>
                <div>
                    <h5>Información de Contacto</h5>
                    <address>
                        Caseros <br />
                        BUENOS AIRES <br />
                        <FontAwesomeIcon icon = {faPhone}/> 1127560455<br />
                        <FontAwesomeIcon icon = {faEnvelope}/> <a href="mailto:graci.romano@gmail.com">graci.romano@gmail.com</a><br />
                    </address>
                </div>
                <div>
                    <div className="text-center">
                        <a className="link" href="https://www.twitter.com" target="_blank"  rel="noreferrer noopener"><FontAwesomeIcon icon = {faTwitter}/></a>
                        <a className="link" href="http://www.facebook.com/graciela del valle romano" target="_blank"  rel="noreferrer noopener"> <FontAwesomeIcon icon = {faFacebook}/></a>
                        <a className="link" href="https://www.linkedin.com/in/graciela-del-valle-romano-11954275/"
                            target="_blank"  rel="noreferrer noopener"><FontAwesomeIcon icon = {faLinkedin}/></a>
                        <a className="link" href="https://github.com/graciela1976" target="_blank"  rel="noreferrer noopener"><FontAwesomeIcon icon = {faGithub}/></a>
                        <a className="link" href="mailto:graci.romano@gmail.com" target="_blank"  rel="noreferrer noopener"><FontAwesomeIcon icon = {faEnvelope}/></a>
                    </div>
                </div>
        </div>
                <div className="row justify-content-center ">
                    <div className="col-auto">
                        <p>© Copyright 2022 Romano Graciela Portfolio</p>
                    </div>
                </div>
    </div>
    

  )
}

export default Footer