import React, { useState } from 'react';
import Swal from 'sweetalert2';

export const Contact = () => {
    const [sentMessage, setSentMessage] = useState(false);
    const API = process.env.API_URL || "http://localhost:4000";

    const [correo, setCorreo] = useState();
    const [telefono, setTelefono] = useState();
    const [tipo_cont, setTipoCont] = useState();
    const [mensaje, setMensaje] = useState();

    const [nombreCompleto, setNombreCompleto] = useState("");


    const handleNombreCompletoChange = (e) => {
        setNombreCompleto(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const [nombre, apellido1, apellido2] = nombreCompleto.split(" ");
            const apellido = apellido1 + " " + apellido2;

            const response = await fetch(`${API}/api/contacto`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nombre,
                    apellido,
                    correo,
                    telefono,
                    tipo_cont,
                    mensaje
                }),
            });

            if (response.ok) {
                setSentMessage(true);
                Swal.fire({
                    icon: "success",
                    title: "¡Mensaje Enviado!",
                    text: "Los datos fueron enviados correctamente",
                    timer: 3000,
                    timerProgressBar: true,
                });
            } else {
                console.error('Error sending contact form');
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Ocurrió un error, vuelva a intentarlo",

                });
            }
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <section id="contact" className="contact">
            <div className="container">

                <div className="section-title" data-aos="zoom-out">
                    <h2>Contact</h2>
                    <p>Contact Us</p>
                </div>

                <div className="row mt-5">

                    <div className="col-lg-4" data-aos="fade-right">
                        <div className="info">
                            <div className="address">
                                <i className="bi bi-geo-alt"></i>
                                <h4>Location:</h4>
                                <p>Av. El Olivar 338, Of.203, Urb El Cóndor - Callao,
                                    Lima - Perú</p>
                            </div>

                            <div className="email">
                                <i className="bi bi-envelope"></i>
                                <h4>Email:</h4>
                                <p>emasac@emasac.com.pe</p>
                            </div>

                            <div className="phone">
                                <i className="bi bi-phone"></i>
                                <h4>Call:</h4>
                                <p>+51 1 2209332</p>
                            </div>

                        </div>

                    </div>

                    <div className="col-lg-8 mt-5 mt-lg-0" data-aos="fade-left">

                        <form className="php-email-form">
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <input
                                        type="text"
                                        name="nombre"
                                        className="form-control"
                                        placeholder="Your Name"
                                        required
                                        onChange={handleNombreCompletoChange}
                                        value={nombreCompleto}
                                    />
                                </div>
                                <div className="col-md-6 form-group mt-3 mt-md-0">
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="correo"
                                        placeholder="Your Email"
                                        required
                                        onChange={(e) => setCorreo(e.target.value)}
                                        value={correo}
                                    />
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="tipo_cont"
                                    placeholder="Subject"
                                    required
                                    onChange={(e) => setTipoCont(e.target.value)}
                                    value={tipo_cont}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="tipo_cont"
                                    placeholder="Number"
                                    required
                                    onChange={(e) => setTelefono(e.target.value)}
                                    value={telefono}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <textarea
                                    className="form-control"
                                    name="mensaje"
                                    rows="5"
                                    placeholder="Message"
                                    required
                                    onChange={(e) => setMensaje(e.target.value)}
                                    value={mensaje}
                                ></textarea>
                            </div>
                            <div className="my-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                {sentMessage && (
                                    <div className="sent-message">
                                        Your message has been sent. Thank you!
                                    </div>
                                )}
                            </div>
                            <div className="text-center">
                                <button type="submit" onClick={handleSubmit}>
                                    Send Message
                                </button>
                            </div>
                        </form>

                    </div>

                </div>

            </div>
        </section>
    );
};

