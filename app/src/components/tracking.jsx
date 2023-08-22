import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import '../assets/css/tracking.css';
import $ from 'jquery'; // Importa jQuery
import { NavbarInnerPage } from "./NavbarinnerPage";

export const Tracking = () => {
    const location = useLocation();
    const userIdText = new URLSearchParams(location.search).get('userId');
    const userId = Number(userIdText);

    // 

    useEffect(() => {
        $(".step").click(function () {
            $(this).addClass("active").prevAll().addClass("active");
            $(this).nextAll().removeClass("active");
        });

        $(".step01").click(function () {
            $("#line-progress").css("width", "25%");
            $(".reservation").addClass("active").siblings().removeClass("active");
        });

        $(".step02").click(function () {
            $("#line-progress").css("width", "50%");
            $(".departure").addClass("active").siblings().removeClass("active");
        });

        $(".step03").click(function () {
            $("#line-progress").css("width", "75%");
            $(".in-transit").addClass("active").siblings().removeClass("active");
        });

        $(".step04").click(function () {
            $("#line-progress").css("width", "100%");
            $(".arrival").addClass("active").siblings().removeClass("active");
        });
    }, []);
    return (
        <div>
            <NavbarInnerPage userId={userId} />
            <h1>Tracking</h1>
            <br />
            <div className="process-wrapper">
                <div id="progress-bar-container">
                    <ul>
                        <li className="step step01 active"><div className="step-inner">Reserva</div></li>
                        <li className="step step02"><div className="step-inner">Salida de Embarque</div></li>
                        <li className="step step03"><div className="step-inner">En Camino</div></li>
                        <li className="step step04"><div className="step-inner">Llegada de Embarque</div></li>
                    </ul>
                    <div id="line">
                        <div id="line-progress"></div>
                    </div>
                </div>

                <div id="progress-content-section">
                    <div className="section-content reservation active">
                        <h2>Reserva</h2>
                        <p>Reserva confirmada.</p>
                    </div>

                    <div className="section-content departure">
                        <h2>Salida de Embarque</h2>
                        <p>El envío ha salido de la ubicación de origen.</p>
                    </div>

                    <div className="section-content in-transit">
                        <h2>En Camino</h2>
                        <p>El envío se encuentra en tránsito hacia el destino.</p>
                    </div>

                    <div className="section-content arrival">
                        <h2>Llegada de Embarque</h2>
                        <p>El envío ha llegado a su destino final.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
