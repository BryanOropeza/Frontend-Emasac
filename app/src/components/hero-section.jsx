import React from "react";
import "../assets/css/hero-section.css";

export const HeroSection = () => {
    return (
        <section id="hero" className="d-flex flex-column justify-content-end align-items-center">
            <div id="heroCarousel" data-bs-interval="5000" className="container carousel carousel-fade" data-bs-ride="carousel">
                {/* Slide 1 */}
                <div className="carousel-item active">
                    <img id="barco" src="https://www.wti.cl/wp-content/uploads/2015/10/my_ship.png" alt="" />

                    <div className="carousel-container">
                        <h2 className="animate__animated animate__fadeInDown">Welcome to <span>EMASAC</span></h2>
                        <p className="animate__animated animate__fadeInUp">Le informamos que contamos con personal de amplia experiencia
                            en transporte internacional de carga, estamos en la capacidad de brindarles un buen servicio, no solo de
                            transporte de carga internacional, sino también el seguimiento de órdenes de compra con proveedores en
                            origen.</p>

                        <figure>
                            <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                        </figure>
                    </div>
                </div>

                {/* Slide 2 */}
                <div className="carousel-item">
                    <img id="avion" src="https://mlriipbor8vv.i.optimole.com/w:300/h:225/q:mauto/f:avif/https://coopdgii.com/wp-content/uploads/2015/03/boeing_737-avion-dibujo-gratis-clipart.png" alt="" />

                    <div className="carousel-container">
                        <h2 className="animate__animated animate__fadeInDown">Marítimo, Aéreo y Terrestre</h2>
                        <p className="animate__animated animate__fadeInUp">365 días al año, 24 horas del día ¡Estamos para servirle!</p>
                    </div>
                </div>

                {/* Slide 3 */}
                <div className="carousel-item">
                    <img id="camion" src="https://static.vecteezy.com/system/resources/previews/011/106/142/original/3d-land-transport-concept-worldwide-shipping-with-truck-delivery-van-transport-isolated-3d-render-illustration-transportation-service-png.png" alt="" />

                    <div className="carousel-container">
                        <h2 className="animate__animated animate__fadeInDown">Nuestros Servicios</h2>
                        <p className="animate__animated animate__fadeInUp">Para conseguir el éxito, EMASAC cuenta con la tecnología y
                            profesionales capacitados con conocimiento en la industria y las dinámicas del mercado, ofreciendo un
                            servicio de excelencia, optimizando los recursos de nuestros clientes porque entendemos que en el mundo
                            globalizado el tiempo es un factor esencial para tener eficiente y eficaz resultado.</p>
                        <figure>
                            <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                        </figure>
                    </div>
                </div>

                {/* Controles del carrusel */}
                <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon bx bx-chevron-left" aria-hidden="true"></span>
                </a>

                <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon bx bx-chevron-right" aria-hidden="true"></span>
                </a>

            </div>

            {/* Ondas SVG */}
            <svg className="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none">
                <defs>
                    <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g className="wave1">
                    <use xlinkHref="#wave-path" x="50" y="3" fill="rgba(255,255,255, .1)" />
                </g>
                <g className="wave2">
                    <use xlinkHref="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)" />
                </g>
                <g className="wave3">
                    <use xlinkHref="#wave-path" x="50" y="9" fill="#fff" />
                </g>
            </svg>
        </section>
    );
};
