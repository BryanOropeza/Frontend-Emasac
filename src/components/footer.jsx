import React from 'react';

export const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="social-links">
                    <a href="#hero" className="twitter"><i className="bx bxl-twitter"></i></a>
                    <a href="#hero" className="facebook"><i className="bx bxl-facebook"></i></a>
                    <a href="#hero" className="instagram"><i className="bx bxl-instagram"></i></a>
                    <a href="#hero" className="google-plus"><i className="bx bxl-skype"></i></a>
                    <a href="#hero" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div>
                <div className="copyright">
                    &copy; Copyright <strong><span>Group2</span></strong>. All Rights Reserved
                </div>
            </div>
        </footer>
    );
};

