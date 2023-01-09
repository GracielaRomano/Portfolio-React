import React from 'react'
import './Experiences.css'

const Experiences = () => {
  return (
    <div className='jumbotron_exp'id='experiences'>
        <div className="container-grid">
            <div>
                <h1 className="fluid titulo-exp">Experiencias</h1>
            </div>
            <div className='separacion-exp'></div>
            <div className="col-sm-6 col-md-9 offset-md-5 col-lg-8 offset-lg-5">
                <div className="row cuadrado_exp align-items-center">
                
                    <div>
                        <h5 className="experiencia-titulo">Encargada General</h5>
                        <h6 className="experiencia-empresa">Grocery Stores</h6>
                        <p className="experiencia-fecha"> 2014 - 2015</p>
                        <p className="experiencia-lugar">Tucumán</p>
                        <p className="d-none d-sm-block ml-3 experiencia-detalle">Atención al público, mantenimiento de la cartera de
                            clientes, control de stock, de empleados,encargada de compras y atención a proveedores
                        </p>
                    </div>
                </div>
                <div className="row cuadrado_exp align-items-center">
                
                    <div >
                        <h5 className="experiencia-titulo">Auxiliar de Sistemas</h5>
                        <h6 className="experiencia-empresa">ON PROJECT</h6>
                        <p className="experiencia-fecha"> 2013 -  2015</p>
                        <p className="experiencia-lugar"> San Miguel de Tucumán</p>
                        <p className="d-none d-sm-block ml-3 experiencia-detalle"> Analisis de Sistemas. <br/> Instalacion de sistemas. <br/>
                            Manual de usuario <br/>
                            Visita a los clientes
                        </p>
                    </div>
                </div>
                <div className="row cuadrado_exp align-items-center">
              
              <div >
                  <h5 className="experiencia-titulo">Encargada de Local Comercial</h5>
                  <h6 className="experiencia-empresa">Comercializadora El Aserradero S.R.L.</h6>
                  <p className="experiencia-fecha"> 2012 - 2013</p>
                  <p className="experiencia-lugar">Tucumán</p>
                  <p className="d-none d-sm-block ml-3 experiencia-detalle">Atención al público, mantenimiento de la cartera de
                      clientes, control de stock, de empleados,encargada de compras y atención a proveedores
                  </p>
              </div>
            </div>
            <div className="row cuadrado_exp align-items-center">
               
              <div>
                  <h5 className="experiencia-titulo">Administrativa</h5>
                  <h6 className="experiencia-empresa">Luciana & Pablo Acosta Escuela de Danza</h6>
                  <p className="experiencia-fecha"> 2011 - 2012</p>
                  <p className="experiencia-lugar"> San Miguel de Tucumán</p>
                  <p className="d-none d-sm-block ml-3 experiencia-detalle"> Trámites Bancarios. Altas y Bajas de Alumnas. Cajera. Atencion al Público
                  </p>
              </div>
            </div>
          </div>
        </div>
    </div>
    
  )
}

export default Experiences