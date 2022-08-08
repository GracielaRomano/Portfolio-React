import React from 'react'
import './Aboutme.css'

const Aboutme = () => {
  return (
    <div className='jumbotron-ab'id="aboutme" name="aboutme">

     {/*style={{ backgroundImage: "url(/image/portada.png)" }}*/}
        <h1 className="fluid titulo-ab">Acerca de mi... </h1>
    <br/>
    
    <div className="container">
        <div className="row  align-items-center">
            <div className="order-sm-first col-md-4 col-sm-12 col-4">
                <div className="media d-flex align-items-start">
                    <div className="foto_fondo"></div>
                    <img className="d-flex ml-3 align-self-center foto" src="image/yo4.jpg" alt="mi foto"/>
                </div>
            </div>
            <div className="col-md-8 col-sm- col-8 order-sm-last">
                <p className="texto_about">
                  Hola, mi nombre es Graciela soy Analista de Sistemas y Full Stack Developer Jr.</p>
                  <p className="d-none d-sm-block ml-3 about2">  Desde que descubrí el nuevo mundo IT me apacioné con él, hay muchas tecnologias nuevas por indagar y 
                    aprender y miles de caminos por seguir y perfeccionarte
                 en el que mejor se adapte a tus preferencias.<br/>
                De todo lo aprendido, me inclino por seguir el camino del frond end porque me permite expandir mi imaginación y 
                mi lado creativo. <br/>
                Este cambio de paradigma por el que estamos pasando ha despertado aún más mi curiosidad por aprender. <br/>
                Lo que me lleva a buscar y capacitarme constantemente, la mayoría de los cursos los realicé de manera 
                asincrónica y autodidacta.<br/>
                Mi objetivo  es seguir perfeccionandome en este fascinante y enigmante mundo.</p>
            </div>
        </div>
    </div>
    
    </div>
  )
}

export default Aboutme