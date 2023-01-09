import React from 'react'
import './Certifications.css'

const Certifications = () => {
  return (
    <div className="jumbotron_cert" id='certifications'>
        <h1 className="fluid titulo-cert">Certificaciones</h1>
        <div className="separacion-cert"></div>
        <div className="container">
            <div className='row'>
            <h4 className="titulo-cert">Mis Especializaciones</h4>
            </div>
            <div className="col-sm-6 col-md-8 offset-md-4 col-lg-6 offset-lg-4">
                <div className="row cuadrado_cert align-items-center">
                    <div className="order-sm-first col-2 col-sm col-md-4">
                        <div className="media d-flex align-items-start">
                            <img className="d-flex ml-3  align-self-center imagen-cert" src="image/codoacodo.png" alt="ibm"/>
                        </div>
                    </div>
                    <div className=" col-10 col-md-8">
                        <h5 className="cert-titulo">Full Stack Python</h5>  
                        <h6 className="cert-empresa">CODO A CODO 4.0</h6>
                        <p className="cert-fecha">Julio 2022</p>
                    </div>
                </div>
                <div className="row cuadrado_cert align-items-center">
                    <div className="order-sm-first col-2 col-sm col-md-4">
                        <div className="media d-flex align-items-start">
                            <a
                                href="https://www.coursera.org/account/accomplishments/specialization/certificate/NKL9AFZUDRE2" target="_blank"  rel="noreferrer noopener">
                                <img className="d-flex ml-3  align-self-center imagen-cert" src="image/ibm.png" alt="ibm"/>
                            </a>
                        </div>
                    </div>
                    <div className=" col-10 col-md-8">
                        <h5 className="cert-titulo">Cloud Application Development Foundations</h5>
                        <h6 className="cert-empresa">IBM</h6>
                        <p className="cert-fecha">Enero 2022</p>
                    </div>
                </div>
                <div className="row cuadrado_cert  align-items-center">
                    <div className="order-sm-first col-2 col-sm col-md-4">
                        <div className="media d-flex align-items-start">
                            <a
                                href="https://www.coursera.org/account/accomplishments/specialization/certificate/24C58VLN7FNN" target="_blank"  rel="noreferrer noopener">
                                <img className="d-flex ml-3  align-self-center imagen-cert" src="image/hongk3.png"
                                alt="especializacion"/>
                            </a>
                        </div>
                    </div>
                    <div className="col-10 col-md-8">
                        <h5 className="cert-titulo"> Full-Stack Web Development with React</h5>
                        <h6 className="cert-empresa">The Hong Kong University of Science and Technology</h6>
                        <p className="cert-fecha">Diciembre 2021</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='line'></div>
        <div className='separacion-cert'></div>
            <div className='container'>
                <div className='row'>
                    <h4 className="titulo-cert">Mis Cursos</h4>
                <div className="col-sm-6 col-md-8 offset-md-4 col-lg-6 offset-lg-4">
                <div className="row cuadrado_cert align-items-center">
                    <div className="order-sm-first col-2 col-sm col-md-4">
                        <div className="media d-flex align-items-start">
                            <img className="d-flex ml-3  align-self-center imagen-cert" src="image/codoacodo.png" alt="ibm"/>
                        </div>
                    </div>
                    <div className=" col-10 col-md-8">
                        <h5 className="cert-titulo">Diseño UX/UI</h5>  
                        <h6 className="cert-empresa">CODO A CODO 4.0</h6>
                        <p className="cert-fecha">Diciembre 2022</p>
                    </div>
                </div>
                <div className="row cuadrado_cert align-items-center">
                    <div className="order-sm-first col-2 col-sm col-md-4">
                        <div className="media d-flex align-items-start">
                            <img className="d-flex ml-3  align-self-center imagen-cert" src="image/codoacodo.png" alt="ibm"/>
                        </div>
                    </div>
                    <div className=" col-10 col-md-8">
                        <h5 className="cert-titulo">Django</h5>  
                        <h6 className="cert-empresa">CODO A CODO 4.0</h6>
                        <p className="cert-fecha">Diciembre 2022</p>
                    </div>
                </div>

                <div className="row cuadrado_cert align-items-center">
                    <div className="order-sm-first col-2 col-sm col-md-4">
                        <div className="media d-flex align-items-start">
                            <a 
                                href="https://www.coursera.org/account/accomplishments/certificate/8FAW75Z62Y23" target="_blank"  rel="noreferrer noopener">
                               <img className="d-flex ml-3  align-self-center imagen-cert" src="image/ibm.png"
                                alt="curso"/>
                            </a>
                        </div>
                    </div>
                    <div className='col-10 col-md-8'>
                        <h5 className="cert-titulo">Developing Cloud Apps with Node.js and React</h5>
                        <h6 className="cert-empresa">IBM</h6>
                        <p className="cert-fecha">Enero 2022</p>
                    </div>
                </div>
                <div className="row cuadrado_cert align-items-center">
                    <div className="order-sm-first col-2 col-sm col-md-4">
                        <div className="media d-flex align-items-start">
                            <a
                                href="https://www.coursera.org/account/accomplishments/certificate/EJMHHPHEBYRB" target="_blank"  rel="noreferrer noopener">
                                <img className="d-flex ml-3  align-self-center imagen-cert" src="image/hongk3.png" alt="curso"/>
                            </a>
                        </div>
                    </div>
                    <div className="col-10 col-md-8">
                        <h5 className="cert-titulo">Front-End Web Development with React</h5>
                        <h6 className="cert-empresa">The Hong Kong University of Science and Technology</h6>
                        <p className="cert-fecha">Enero 2022</p>
                    </div>
                </div>
                <div className="row cuadrado_cert align-items-center">
                    <div className="order-sm-first col-2 col-sm col-md-4">
                        <div className="media d-flex align-items-start">
                            <a 
                                href="https://www.coursera.org/account/accomplishments/certificate/J565MUBZSZBT" target="_blank"  rel="noreferrer noopener">
                                <img className="d-flex ml-3  align-self-center imagen-cert" src="image/ibm.png"alt="curso"/>
                            </a>
                        </div>
                    </div>
                    <div className="col-10 col-md-8">
                        <h5 className="cert-titulo">Developing Cloud Native Applications</h5>
                        <h6 className="cert-empresa">IBM</h6>
                        <p className="cert-fecha">Enero 2022</p>
                    </div>
                </div>
                <div className="row cuadrado_cert align-items-center">
                    <div className="order-sm-first col-2 col-md-4">
                        <div className="media d-flex align-items-start">
                            <a
                                href="https://www.coursera.org/account/accomplishments/certificate/B2UWWTA7P29D" target="_blank"  rel="noreferrer noopener">
                                <img className="d-flex ml-3  align-self-center imagen-cert" src="image/ibm.png" alt="curso"/>
                            </a>
                        </div>
                    </div>
                    <div className="col-10 col-md-8">
                        <h5 className="cert-titulo">Introduction to Web Development with HTML, CSS, JavaScript</h5>
                        <h6 className="cert-empresa">IBM</h6>
                        <p className="cert-fecha">Diciembre 2021</p>
                    </div>
                </div>
                <div className="row cuadrado_cert align-items-center">
                    <div className="order-sm-first col-2 col-sm col-md-4">
                        <div className="media d-flex align-items-start">
                            <a
                                href="https://www.coursera.org/account/accomplishments/certificate/FUDGKR3W4FVR" target="_blank"  rel="noreferrer noopener">
                                <img className="d-flex ml-3  align-self-center imagen-cert" src="image/hongk3.png" alt="secundario"/>
                            </a>
                        </div>
                    </div>
                    <div className="col-10 col-md-8">
                        <h5 className="cert-titulo">Server-side Development with NodeJS, Express and MongoDB</h5>
                        <h6 className="cert-empresa">The Hong Kong University of Science and Technology</h6>
                        <p className="cert-fecha">Diciembre 2021</p>
                    </div>
                </div>
                <div className="row cuadrado_cert align-items-center">
                    <div className="order-sm-first col-2 col-sm col-md-4">
                        <div className="media d-flex align-items-start">
                            <a
                                href="https://www.coursera.org/account/accomplishments/certificate/BJU83B9N9DLX" target="_blank"  rel="noreferrer noopener">
                               <img className="d-flex ml-3  align-self-center imagen-cert" src="image/hongk3.png"alt="secundario"/>
                            </a>
                        </div>
                    </div>
                    <div className="col-10 col-md-8">
                        <h5 className="cert-titulo">Front-End Web UI Frameworks and Tools: Bootstrap 4</h5>
                        <h6 className="cert-empresa">The Hong Kong University of Science and Technology</h6>
                        <p className="cert-fecha">Agosto 2021</p>
                    </div>
                </div>
                <div className="row cuadrado_cert align-items-center">
                    <div className="order-sm-first col-2 col-sm col-md-4">
                        <div className="media d-flex align-items-start">
                            <a
                                href="https://www.coursera.org/account/accomplishments/certificate/T662QJCZUNPT"target="_blank"  rel="noreferrer noopener">
                               <img className="d-flex ml-3  align-self-center imagen-cert" src="image/duke2.jpg" alt="curso"/>
                            </a>
                        </div>
                    </div>
                    <div className="col-10 col-md-8">
                        <h5 className="cert-titulo">Programming Foundations with JavaScript, HTML and CSS</h5>
                        <h6 className="cert-empresa">Duke University</h6>
                        <p className="cert-fecha">Julio 2021</p>
                    </div>
                </div>
                <div className="row cuadrado_cert align-items-center">
                    <div className="order-sm-first col-2 col-sm col-md-4">
                        <div className="media d-flex align-items-start">
                            <a
                                href="https://www.coursera.org/account/accomplishments/certificate/J5HYZ8MPYXXC" target="_blank"  rel="noreferrer noopener">
                                <img className="d-flex ml-3  align-self-center imagen-cert" src="image/ibm.png" alt="secundario"/>
                            </a>
                        </div>
                    </div>
                    <div className="col-10 col-md-8">
                        <h5 className="cert-titulo">Introduction to Containers w/ Docker, Kubernetes & OpenShift</h5>
                        <h6 className="cert-empresa">IBM</h6>
                        <p className="cert-fecha">Febrero 2022</p>
                    </div>
                </div>
                <div className="row cuadrado_cert align-items-center">
                    <div className="order-sm-first col-2 col-md-4">
                        <div className="media d-flex align-items-start">
                            <a
                                href="https://www.coursera.org/account/accomplishments/certificate/XW8YY5X4DC9G" target="_blank"  rel="noreferrer noopener">
                                <img className="d-flex ml-3  align-self-center imagen-cert" src="image/mcmaster.jpg" alt="secundario"/>
                            </a>
                        </div>
                    </div>
                    <div className="col-10 col-md-8">
                        <h5 className="cert-titulo">Mindshift: Transforma tu mente para superar obstáculos en el aprendizaje y descubrir tu potencial oculto.</h5>
                        <h6 className="cert-empresa">McMaster University</h6>
                        <p className="cert-fecha">Diciembre 2020</p>
                    </div>
                </div>
                <div className="row cuadrado_cert align-items-center">
                    <div className="order-sm-first col-2 col-md-4">
                        <div className="media d-flex align-items-start">
                            <a
                                href="https://www.coursera.org/account/accomplishments/certificate/HX7DBC9E8FT8" target="_blank"  rel="noreferrer noopener">
                                <img className="d-flex ml-3  align-self-center imagen-cert" src="image/jhons.png" alt="secundario"/>
                            </a>
                        </div>
                    </div>
                    <div className="col-10 col-md-8">
                        <h5 className="cert-titulo">The Data Scientist's Toolbox</h5>
                        <h6 className="cert-empresa">Johns Hopkins University</h6>
                        <p className="cert-fecha">Diciembre 2020</p>
                    </div>
                </div>
                <div className="row cuadrado_cert align-items-center">
                    <div className="order-sm-first col-2 col-md-4">
                        <div className="media d-flex align-items-start">
                            <a
                                href="https://www.coursera.org/account/accomplishments/certificate/EJSF42FKRCYS" target="_blank"  rel="noreferrer noopener">
                                <img className="d-flex ml-3  align-self-center imagen-cert" src="image/ie2.jpg" alt="secundario"/>
                            </a>
                        </div>
                    </div>
                    <div className="col-10 col-md-8">
                        <h5 className="cert-titulo">Aprendiendo a Aprender</h5>
                        <h6 className="cert-empresa">IE Business School</h6>
                        <p className="cert-fecha">Diciembre 2020</p>
                    </div>
                </div>
                <div className="row cuadrado_cert align-items-center">
                    <div className="order-sm-first col-2 col-md-4">
                        <div className="media d-flex align-items-start">
                            <a
                                href="https://www.coursera.org/account/accomplishments/certificate/XCDDL7MN3357" target="_blank"  rel="noreferrer noopener">
                                <img className="d-flex ml-3  align-self-center imagen-cert" src="image/austral.png"alt="excel"/>
                            </a>
                        </div>
                    </div>
                    <div className="col-10 col-md-8">
                        <h5 className="cert-titulo">Excel aplicado a los negocios (Nivel Avanzado)</h5>
                        <h6 className="cert-empresa">Universidad Austral</h6>
                        <p className="cert-fecha">Noviembre 2020</p>
                    </div>
                </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Certifications