import React from "react";
import { Navbar } from "./Navbar.jsx";
import { HeroSection } from "./hero-section.jsx";
import { About } from "./about.jsx";
import { Services } from "./services.jsx";
import { Services1 } from "./services1.jsx";
import { Cta } from "./cta.jsx";
import { Portfolio } from "./portfolio.jsx";
import { Testimonial } from "./testimonial.jsx";
import { Team } from "./team.jsx";
import { Contact } from "./contact.jsx";
import { Footer } from "./footer.jsx";

export const MainPage = () => {

    return (
        <>
            <Navbar />
            <HeroSection />
            <About />
            <Services />
            <Services1 />
            <Cta />
            <Portfolio />
            <Testimonial />
            <Team />
            <Contact />
            <Footer />
        </>
    );
};