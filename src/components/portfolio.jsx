import React from 'react';

export const Portfolio = () => {
    return (
        <section id="portfolio" className="portfolio">
            <div className="container">
                <div className="section-title" data-aos="zoom-out">
                    <h2>Gallery</h2>
                    <p>GALLERY EMASAC</p>
                </div>
                <ul id="portfolio-flters" className="d-flex justify-content-end" data-aos="fade-up">
                    <li data-filter="*" className="filter-active">All</li>
                    <li data-filter=".filter-m">M</li>
                    <li data-filter=".filter-t">T</li>
                    <li data-filter=".filter-a">A</li>
                </ul>
                <div className="row portfolio-container" data-aos="fade-up">
                    {/* Aquí puedes agregar tus elementos portfolio */}
                    <div className="col-lg-4 col-md-6 portfolio-item filter-m">
                        <div className="portfolio-img"><img src="assets/img/portafolio/p1.jpg" className="img-fluid" alt="" /></div>
                        <div className="portfolio-info">
                            <h4>Transporte Marítimo</h4>
                            <p>EMASAC</p>
                            <a href="assets/img/portafolio/p1.jpg" data-gallery="portfolioGallery"
                                className="portfolio-lightbox preview-link" title="Transporte de Carga Marítima Internacional"><i
                                    className="bx bx-plus"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-a">
                        <div className="portfolio-img"><img src="assets/img/portafolio/p2.jpg" className="img-fluid" alt="" /></div>
                        <div className="portfolio-info">
                            <h4>Transporte Aéreo</h4>
                            <p>EMASAC</p>
                            <a href="assets/img/portafolio/p2.jpg" data-gallery="portfolioGallery"
                                className="portfolio-lightbox preview-link" title="Transporte de Carga Aéreo Internacional"><i
                                    className="bx bx-plus"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-a">
                        <div className="portfolio-img"><img src="assets/img/portafolio/p3.jpg" className="img-fluid" alt="" /></div>
                        <div className="portfolio-info">
                            <h4>Transporte Aéreo</h4>
                            <p>EMASAC</p>
                            <a href="assets/img/portafolio/p3.jpg" data-gallery="portfolioGallery"
                                className="portfolio-lightbox preview-link" title="Transporte de Carga Aéreo Internacional"><i
                                    className="bx bx-plus"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-t">
                        <div className="portfolio-img"><img src="assets/img/portafolio/p4.jpg" className="img-fluid" alt="" /></div>
                        <div className="portfolio-info">
                            <h4>Transporte Terrestre</h4>
                            <p>EMASAC</p>
                            <a href="assets/img/portafolio/p4.jpg" data-gallery="portfolioGallery"
                                className="portfolio-lightbox preview-link" title="Transporte de Carga Terrestre Internacional"><i
                                    className="bx bx-plus"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-t">
                        <div className="portfolio-img"><img src="assets/img/portafolio/p5.jpeg" className="img-fluid" alt="" /></div>
                        <div className="portfolio-info">
                            <h4>Transporte Terrestre</h4>
                            <p>EMASAC</p>
                            <a href="assets/img/portafolio/p5.jpeg" data-gallery="portfolioGallery"
                                className="portfolio-lightbox preview-link" title="Transporte de Carga Terrestre Internacional"><i
                                    className="bx bx-plus"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-m">
                        <div className="portfolio-img"><img src="assets/img/portafolio/p6.jpg" className="img-fluid" alt="" /></div>
                        <div className="portfolio-info">
                            <h4>Transporte Marítimo</h4>
                            <p>EMASAC</p>
                            <a href="assets/img/portafolio/p6.jpg" data-gallery="portfolioGallery"
                                className="portfolio-lightbox preview-link" title="Transporte de Carga Marítima Internacional"><i
                                    className="bx bx-plus"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-m">
                        <div className="portfolio-img"><img src="assets/img/portafolio/p7.jpg" className="img-fluid" alt="" /></div>
                        <div className="portfolio-info">
                            <h4>Transporte Marítimo</h4>
                            <p>EMASAC</p>
                            <a href="assets/img/portafolio/p7.jpg" data-gallery="portfolioGallery"
                                className="portfolio-lightbox preview-link" title="Transporte de Carga Marítima Internacional"><i
                                    className="bx bx-plus"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-t">
                        <div className="portfolio-img"><img src="assets/img/portafolio/p8.jpg" className="img-fluid" alt="" /></div>
                        <div className="portfolio-info">
                            <h4>Transporte Terrestre</h4>
                            <p>EMASAC</p>
                            <a href="assets/img/portafolio/p8.jpg" data-gallery="portfolioGallery"
                                className="portfolio-lightbox preview-link" title="Transporte de Carga Terrestre Internacional"><i
                                    className="bx bx-plus"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-m">
                        <div className="portfolio-img"><img src="assets/img/portafolio/p9.jpg" className="img-fluid" alt="" /></div>
                        <div className="portfolio-info">
                            <h4>Transporte Marítimo</h4>
                            <p>EMASAC</p>
                            <a href="assets/img/portafolio/p9.jpg" data-gallery="portfolioGallery"
                                className="portfolio-lightbox preview-link" title="Transporte de Carga Marítima Internacional"><i
                                    className="bx bx-plus"></i></a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

