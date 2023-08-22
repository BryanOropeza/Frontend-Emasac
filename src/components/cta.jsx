import React from 'react';

export const Cta = () => {
    return (
        <section id="cta" className="cta">
            <div className="container">
                <div className="row" data-aos="zoom-out">
                    <div className="col-lg-9 text-center text-lg-start">
                        <h3>Atención Rápida</h3>
                        <p>Le ayudaremos a que el transporte de sus mercancías se realice de manera legal y sin ningún problema.</p>
                    </div>
                    <div className="col-lg-3 cta-btn-container text-center">
                        <a className="cta-btn align-middle" href="#hero">Help</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

