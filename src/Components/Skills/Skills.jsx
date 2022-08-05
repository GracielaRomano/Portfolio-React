import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <div className='container-skills' id='skills'>
        <h1 className="fluid titulo-skills">Habilidades</h1>
        <div className='skills'>
            <div className='col-6 col-sm-5 margin-hard'>
            <h2 className="titulo2-skills">Hard Skills</h2>
            <div className='separacion-skills'></div>
            <div className='row'>
                <div className='col'>
                    <h3 className="html">HTML5</h3>
                    <div className="progress1 blue">
                        <span className="progress1-left">
                            <span className="progress1-bar"></span>
                        </span>
                        <span className="progress1-right">
                            <span className="progress1-bar"></span>
                        </span>
                        <div className="progress1-value">90%</div>
                    </div>
                </div>
                <div className='col'>
                    <h3 className="css">CSS</h3>
                    <div className="progress1 blue2">
                        <span className="progress1-left">
                            <span className="progress1-bar"></span>
                        </span>
                        <span className="progress1-right">
                            <span className="progress1-bar"></span>
                        </span>
                        <div className="progress1-value">85%</div>
                    </div>
                </div>
                <div className='col'>
                    <h3 className="bootstrap">Bootstrap</h3>
                    <div className="progress1 orange">
                        <span className="progress1-left">
                            <span className="progress1-bar"></span>
                        </span>
                        <span className="progress1-right">
                            <span className="progress1-bar"></span>
                        </span>
                        <div className="progress1-value">80%</div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col'> 
                    <h3 className="react">ANGULAR</h3>
                    <div className="progress1 fucsia">
                        <span className="progress1-left">
                            <span className="progress-bar"></span>
                        </span>
                        <span className="progress1-right">
                            <span className="progress1-bar"></span>
                        </span>
                        <div className="progress1-value">50%</div>
                    </div>
                </div>
                <div className='col'>
                    <h3 className="angular">PHYTON</h3>
                    <div className="progress1 green">
                        <span className="progress1-left">
                            <span className="progress1-bar"></span>
                        </span>
                        <span className="progress1-right">
                            <span className="progress1-bar"></span>
                        </span>
                        <div className="progress1-value">70%</div>
                    </div>
                </div>
                <div className='col'>
                    <h3 className="js">NODE.JS</h3>
                    <div className="progress1 yellow">
                        <span className="progress1-left">
                            <span className="progress1-bar"></span>
                        </span>
                        <span className="progress1-right">
                            <span className="progress1-bar"></span>
                        </span>
                        <div className="progress1-value">60%</div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <h3 className="phyton">REACT</h3>
                    <div className="progress1 violeta">
                        <span className="progress1-left">
                            <span className="progress1-bar"></span>
                        </span>
                        <span className="progress1-right">
                            <span className="progress1-bar"></span>
                        </span>
                        <div className="progress1-value">75%</div>
                    </div>
                </div>
                <div className=" col ">
                    <h3 className="node">JS</h3>
                    <div className="progress1 turquesa">
                        <span className="progress1-left">
                            <span className="progress1-bar"></span>
                        </span>
                        <span className="progress1-right">
                            <span className="progress1-bar"></span>
                        </span>
                        <div className="progress1-value">65%</div>
                    </div>
                </div>
                <div className=" col">
                    <h3 className="java">JAVA</h3>
                    <div className="progress1 verde">
                        <span className="progress1-left">
                            <span className="progress1-bar"></span>
                        </span>
                        <span className="progress1-right">
                            <span className="progress1-bar"></span>
                        </span>
                        <div className="progress1-value">55%</div>
                    </div>
                </div>
            </div>
        </div>
    
        <div className='col-6 col-sm-4 margin-soft'>
            <h2 className="titulo2-skills">Soft Skills</h2>
            <div className='separacion-skills'></div>
                <ul  >
                    <li className="habilidades-blandas">Trabajo en Equipo</li>
                    <li className="habilidades-blandas">Resiliencia</li>
                    <li className="habilidades-blandas">Perseverancia</li>
                    <li className="habilidades-blandas">Comunicación</li>
                    <li className="habilidades-blandas">Manejo de Tiempo</li>
                    <li className="habilidades-blandas">Resolución de Problemas</li>
                    <li className="habilidades-blandas">Inteligencia Emocional</li>
                    <li className="habilidades-blandas">Organización</li>
                    <li className="habilidades-blandas">Autodidacta</li>
                    <li className="habilidades-blandas">Actitud Positiva</li>
                    <li className="habilidades-blandas">Responsabilidad</li>
                    <li className="habilidades-blandas">Capacidad para el Aprendizaje</li>
                    <li className="habilidades-blandas">Capacidad de Adaptación</li>
                </ul>
            </div>  
        </div>
    </div>
    
  )
}

export default Skills