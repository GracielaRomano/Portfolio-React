import React from 'react'
import './Aboutme.css'

const Aboutme = () => {
  return (
    <div>

    <div className="jumbotron_mio">
        <h1 className="fluid">Acerca de mi... </h1>
    </div>
    <div className="row separacion"/>
    <div className="container">
        <div className="row  align-items-center">
            <div className="order-sm-first col-3">
                <div className="media d-flex align-items-start">
                    <img className="d-flex ml-3 img-thumbnail align-self-center foto" src="image/yo4.jpg" alt="mi foto"/>
                </div>
            </div>
            <div className="col-9">
                <p className="d-none d-sm-block ml-3 about">
                  Hola, mi nombre es Graciela soy Analista de Sistemas y Full Stack Developer Jr.</p>
                  <p className="d-none d-sm-block ml-3 about2">  Desde que descubrí el nuevo mundo IT me apacioné con él, hay muchas tecnologias nuevas por indagar y 
                    aprender y miles de caminos por seguir y perfeccionarte
                 en el que mejor se adapte a tus preferencias.
                De todo lo aprendido, me inclino por seguir el camino del frond end porque me permite expandir mi imaginación y 
                mi lado creativo. 
                Este cambio de paradigma por el que estamos pasando ha despertado aún más mi curiosidad por aprender. 
                Lo que me lleva a buscar y capacitarme constantemente, la mayoría de los cursos los realicé de manera 
                asincrónica y autodidacta.
                Mi objetivo  es seguir perfeccionandome en este fascinante y enigmante mundo.</p>
            </div>
        </div>
    </div>
    <div className="row row-content"></div>
    </div>
  )
}

export default Aboutme