import React from 'react';

export const Services1 = () => {
    return (
        <section id="services1" className="services">
            <div className="container">

                <div className="section-title" data-aos="zoom-out">
                    <h2>Services</h2>
                    <p>SERVICES EMASAC</p>
                </div>
                <section id="features" className="features">
                    <div className="container">

                        <ul className="nav nav-tabs row d-flex">
                            <li className="nav-item col-3" data-aos="zoom-in">
                                <a className="nav-link active show" data-bs-toggle="tab" href="#tab-1">
                                    <i className="fa fa-ship"></i>
                                    <h4 className="d-none d-lg-block">Transporte de Carga Marítima Internacional</h4>
                                </a>
                            </li>
                            <li className="nav-item col-3" data-aos="zoom-in" data-aos-delay="100">
                                <a className="nav-link" data-bs-toggle="tab" href="#tab-2">
                                    <i className="fa fa-truck"></i>
                                    <h4 className="d-none d-lg-block">Transporte de Carga Terrestre Internacional</h4>

                                </a>
                            </li>
                            <li className="nav-item col-3" data-aos="zoom-in" data-aos-delay="200">
                                <a className="nav-link" data-bs-toggle="tab" href="#tab-3">
                                    <i className="fa fa-plane"></i>
                                    <h4 className="d-none d-lg-block">Transporte de Carga Aéreo Internacional</h4>
                                </a>
                            </li>
                            <li className="nav-item col-3" data-aos="zoom-in" data-aos-delay="300">
                                <a className="nav-link" data-bs-toggle="tab" href="#tab-4">
                                    <i className="fa fa-briefcase"></i>
                                    <h4 className="d-none d-lg-block">Servicio de Agenciamiento de Aduana</h4>
                                </a>
                            </li>
                        </ul>

                        <div className="tab-content" data-aos="fade-up">
                            {/* ... */}
                            {/* Aquí se deben mantener los contenidos de las pestañas con su contenido */}
                            <div className="tab-pane active show" id="tab-1">
                                <div className="row">
                                    <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                                        <h3>Transporte de Carga Marítima Internacional</h3>
                                        <p>
                                            Llevamos la carga desde tu almacén hasta el lugar que nos indiques. Realizamos envíos a nivel
                                            nacional e internacional y a cualquier destino del mundo.
                                            Nuestro servicio nos caracteriza por la entrega puntual, además nos encargamos de buscar espacios
                                            libres en diferentes buques cargueros con diversos itinerarios y fechas para el embarque de su
                                            mercancía o mercadería y nos encargamos de realizar el seguimiento de su carga hasta la entrega de
                                            la misma.
                                            Mantenemos tarifas competitivas para el servicio de transporte marítimo de carga internacional,
                                            debido a nuestros convenios y contratos con las principales compañías navieras, NVOCC y agentes a
                                            nivel mundial más importantes del rubro.
                                            Manejamos todo tipo de carga en general:
                                        </p>
                                        <ul>
                                            <li><i className="ri-check-double-line"></i> Carga LCL
                                            </li>
                                            <li><i className="ri-check-double-line"></i> Carga Proyecto
                                            </li>
                                            <li><i className="ri-check-double-line"></i> Multimodal
                                            </li>
                                            <li><i className="ri-check-double-line"></i> Mercancía peligrosa
                                            </li>
                                        </ul>

                                    </div>
                                    <div className="col-lg-6 order-1 order-lg-2 text-center">
                                        <img src="assets/img/servicios/maritimo.jpg" alt="" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane" id="tab-2">
                                <div className="row">
                                    <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                                        <h3>Transporte de Carga Terrestre Internacional</h3>
                                        <p>
                                            EMASAC, es la empresa de trasporte de carga terrestre internacional por excelencia, contamos con
                                            una amplia red de agentes para satisfacer las necesidades de recojo y entrega rápida en perfectas
                                            condiciones, desde la puerta de su almacén o almacén temporal ubicado en cualquier ciudad del Perú
                                            hasta la entrega de la carga en su destino a nivel internacional.
                                            A modo de seguro y como prueba de ello, la empresa enviará una fotografía a través del correo
                                            electrónico, logrando así que la persona encargada de Comex de nuestro cliente esté enterada de la
                                            entrega conforme de su carga.
                                        </p>
                                        <p className="fst-italic">
                                            Consideraciones especiales: En el caso del servicio de transporte de carga terrestre nacional
                                            únicamente se realizará cuando se contrate el servicio de importación o exportación de carga a
                                            nivel internacional.
                                        </p>
                                    </div>
                                    <div className="col-lg-6 order-1 order-lg-2 text-center">
                                        <img src="assets/img/servicios/terrestre.jpg" alt="" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane" id="tab-3">
                                <div className="row">
                                    <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                                        <h3>Transporte de Carga Aéreo Internacional</h3>
                                        <p>
                                            Experiencia y eficacia son las palabras que definen nuestro servicio de transporte de carga aéreo
                                            internacional, con el único fin de garantizarle completa seguridad en el trasporte de su carga,
                                            desde y para cualquier aeropuerto a nivel mundial.
                                            Transportamos carga aérea internacional sin importar el peso volumétrico que el cliente requiera,
                                            desde cualquier aeropuerto del Perú hacia el extranjero. Para ello contamos con una red de socios
                                            estratégicos para el traslado de tu carga desde el almacén hasta el aeropuerto de embarque.
                                        </p>
                                    </div>
                                    <div className="col-lg-6 order-1 order-lg-2 text-center">
                                        <img src="assets/img/servicios/aereo.jpg" alt="" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane" id="tab-4">
                                <div className="row">
                                    <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                                        <h3>Agenciamiento de Aduana</h3>
                                        <p>
                                            Contamos con Socios Estratégicos, con quienes coordinamos todas las gestiones necesarias para
                                            realizar los Trámites de Exportación y Nacionalización de sus Importaciones, ante los organismos
                                            competentes tales como Aduana marítima y aérea, conjuntamente con de ellos, EMASAC brinda el
                                            servicio de agenciamiento de aduana.
                                        </p>
                                        <p className="fst-italic">
                                            EMA INTERNATIONAL LOGISTICS S.A.C., es responsable frente a sus clientes, contando con personal
                                            altamente capacitado y con conocimientos en temas de agenciamiento aduanero, buscando así reducir
                                            tiempos, costos y obtener los mejores resultados posibles.
                                        </p>
                                    </div>
                                    <div className="col-lg-6 order-1 order-lg-2 text-center">
                                        <img src="assets/img/servicios/agenciamiento.jpg" alt="" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </section>
    );
};

