import React from 'react'
import './Projects.css'


const Projects = () => {
  return (
    <div className="jumbotron-proj" id='projects'>
        <h1 className="fluid titulo-proj">Proyectos</h1>
        <div className="row separacion"></div>
        <div className="container">
            <div className="row ">
                <div className="col">
                    <div id="demo" className="carousel slide" data-bs-ride="carousel">
                      <div className="carousel-indicators">
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="1" aria-label="slide 2"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"aria-label="slide 3"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="3"aria-label="slide 4"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="4"aria-label="slide 5"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="5"aria-label="slide 6"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="6"aria-label="slide 7"></button>
                      </div>
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img src="image/project1.png" alt="primer proyecto" className="d-block" style={{width:'100%'}}/>
                      </div>
                      <div className="carousel-item">
                        <img src="image/lista_tareas.PNG" alt="tareas" className="d-block" style={{width:'100%'}}/>
                      </div>
                      <div className="carousel-item">
                        <img src="image/portfolio.PNG" alt="Mi Portfolio" className="d-block" style={{width:'100%'}}/>
                      </div>
                      <div className="carousel-item">
                        <img src="image/beer-app.png" alt="beer" className="d-block" style={{width:'100%'}}/>
                      </div>
                      <div className="carousel-item">
                        <img src="image/por-el-mundo.png" alt="por el mundo" className="d-block" style={{width:'100%'}}/>
                      </div>
                      <div className="carousel-item">
                        <img src="image/gym-fit-app.png" alt="gym" className="d-block" style={{width:'100%'}}/>
                      </div>
                      <div className="carousel-item">
                        <img src="image/ecommerce.png" alt="ecommerce" className="d-block" style={{width:'100%'}}/>
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon"></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                      <span className="carousel-control-next-icon"></span>
                    </button>
                </div>
            </div>
        </div>
      </div>
      <div className='separacion'></div>
      <h5> Los proyectos fueron creados con:</h5>
      <ul>
        <li className='list'>HTML</li>
        <li className='list'>CSS</li>
        <li className='list'>BOOTSTRAP</li>
        <li className='list'>REACT</li>
        <li className='list'>JS</li>
        <li className='list'>PYTHON</li>
        <li className='list'>DJANGO</li>
      </ul>
    </div>
  )
}

export default Projects