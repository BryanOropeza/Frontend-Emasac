import React from 'react';

export const Testimonial = () => {
    return (
        <section id="testimonials" className="testimonials">
            <div className="container">

                <div className="section-title" data-aos="zoom-out">
                    <h2>Testimonials</h2>
                    <p>Testimonials</p>
                </div>

                <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                    <div className="swiper-wrapper">

                        <div className="swiper-slide">
                            <div className="testimonial-item">
                                <p>
                                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                    Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium
                                    quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                                <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                                <h3>Saul Goodman</h3>
                                <h4>Ceo &amp; Founder</h4>
                            </div>
                        </div>

                        {/* Other testimonial items go here */}
                        <div className="swiper-slide">
                            <div className="testimonial-item">
                                <p>
                                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                    Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis
                                    quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                                <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                                <h3>Sara Wilsson</h3>
                                <h4>Designer</h4>
                            </div>
                        </div>

                        <div className="swiper-slide">
                            <div className="testimonial-item">
                                <p>
                                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                    Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim
                                    tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                                <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
                                <h3>Jena Karlis</h3>
                                <h4>Store Owner</h4>
                            </div>

                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

