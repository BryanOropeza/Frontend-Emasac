import React from "react";

export const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">

                <div className="section-title" data-aos="zoom-out">
                    <h2>About</h2>
                    <p>EMA INTERNATIONAL LOGISTICS SAC</p>
                </div>

                <div className="row content" data-aos="fade-up">
                    <div>
                        <p>
                            EMASAC nace en el mercado peruano en el año 2016, cuyo objetivo es servir como intermediario entre su
                            empresa y todos los entes involucrados para la importación o exportación de sus mercancías.

                            Le informamos que contamos con personal de amplia experiencia en transporte internacional de carga,
                            estamos en la capacidad de brindarles un buen servicio, no solo de transporte de carga internacional, sino
                            también el seguimiento de órdenes de compra con proveedores en origen.
                        </p>
                        <ul>
                            <li><i className="ri-check-double-line"></i> Eficientes</li>
                            <li><i className="ri-check-double-line"></i> Necesarios</li>
                            <li><i className="ri-check-double-line"></i> Capacitados</li>
                            <li><i className="ri-check-double-line"></i> Especialistas</li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
};
