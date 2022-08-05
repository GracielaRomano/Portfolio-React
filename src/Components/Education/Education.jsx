import React from 'react'
import './Education.css'
import Experiences from '../Experiences/Experiences'
import Skills from '../Skills/Skills'

const Education = () => {
  return (
    <div>
    <div className="jumbotron_edu" id='education'>
      <h1>Resumen</h1>
      <div className='separacion'></div>
       <div className="container-edu">
          <div>
            <h1 className="fluid titulo-edu">Educación</h1>
          </div>
        <div>
        <div className="row cuadrado_edu align-items-center">
            <div className="order-sm-first col-2">
                <div className="media d-flex align-items-start">
                    <img className="d-flex ml-3 img-thumbnail align-self-center imagen-edu" src="image/uba.png" alt="uba"/>
                </div>
            </div>
            <div className='col-10'>
                <h5 className="edu-titulo">Universidad de Buenos Aires</h5>
                <h6 className="edu-empresa">Enfermera Universitaria</h6>
                <p className="edu-fecha d-none d-sm-block ml-3">mar. 2018 - mar. 2021</p>
                <p className="edu-lugar d-none d-sm-block ml-3">Buenos Aires</p>
            </div>
        </div>
        <div className="row cuadrado_edu align-items-center">
            <div className="order-sm-first col-2">
                <div className="media d-flex align-items-start">
                    <img className="d-flex ml-3 img-thumbnail align-self-center imagen-edu" src="image/9dejulio.jpg" alt="terciario"/>
                </div>
            </div>
            <div className='col-10'>
                <h5 className="edu-titulo">Instituto 9 de Julio</h5>
                <h6 className="edu-empresa">Analista de Sistemas de Computación</h6>
                <p className="edu-fecha d-none d-sm-block ml-3">mar. 1998 - abr. 2001</p>
                <p className="edu-lugar d-none d-sm-block ml-3"> San Miguel de Tucumán</p>
                
            </div>
        </div>
      </div>
    </div>
    </div>
   
    <Experiences/>
    <Skills/>
    </div>
  )
}

export default Education