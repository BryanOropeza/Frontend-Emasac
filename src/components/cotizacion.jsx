import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { NavbarInnerPage } from "./NavbarinnerPage";

export const API = process.env.API_URL || "http://localhost:4000"; // Ruta de tu servidor

export const Cotizacion = () => {

    const navigate = useNavigate();

    //OBTENER ID DE USUARIO LOGEADO
    const location = useLocation();
    const userIdText = new URLSearchParams(location.search).get('userId');
    const userId = Number(userIdText);


    const [origenes, setOrigenes] = useState([]);
    const [destinos, setDestinos] = useState([]);
    const [cargas, setCargas] = useState([]);

    const [monto, setMonto] = useState(0);
    const [cotizacionId, setCotizacionId] = useState(0);

    const [transporte, setTransporte] = useState(""); // Estado para el tipo de transporte seleccionado
    const [origenSeleccionado, setOrigenSeleccionado] = useState("");
    const [destinoSeleccionado, setDestinoSeleccionado] = useState("");
    const [cargaSeleccionada, setCargaSeleccionada] = useState("");


    /* const navigate = useNavigate(); */

    const fetchOrigenes = async () => {
        try {
            const response = await fetch(`${API}/api/origen`);
            if (response.ok) {
                const data = await response.json();
                setOrigenes(data); // Establecer los datos en el estado de origenes
            } else {
                console.error("Error al obtener los origenes");
            }
        } catch (error) {
            console.error("Error al realizar la solicitud:", error);
        }
    };

    const fetchDestinos = async () => {
        try {
            const response = await fetch(`${API}/api/destino`);
            if (response.ok) {
                const data = await response.json();
                setDestinos(data); // Establecer los datos en el estado de origenes
            } else {
                console.error("Error al obtener los destinos");
            }
        } catch (error) {
            console.error("Error al realizar la solicitud:", error);
        }
    };

    const fetchCargas = async () => {
        try {
            const response = await fetch(`${API}/api/carga`);
            if (response.ok) {
                const data = await response.json();
                setCargas(data); // Establecer los datos en el estado de origenes
            } else {
                console.error("Error al obtener las cargas");
            }
        } catch (error) {
            console.error("Error al realizar la solicitud:", error);
        }
    };

    const handleCalcular = async (event) => {

        event.preventDefault();

        // Generar un número aleatorio en el rango de 2000 a 5000
        const randomAmount = Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000;
        setMonto(randomAmount);

        try {
            const response = await fetch(`${API}/api/cotizacion`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    precio_cot: randomAmount,
                    id: Number(userId), // Otra información necesaria para la cotización
                }),
            });

            if (response.ok) {
                const data = await response.json();
                if (data && data.body && data.body.id_cotizacion) {
                    setCotizacionId(data.body.id_cotizacion);
                    console.log("POST cotización correcto - calculo correcto");
                    Swal.fire({
                        icon: "success",
                        title: "¡Cotización generada!",
                        text: "Descuida, la cotización es libre de cualquier compromiso. ¡Diviértete!",
                        timer: 4000,
                        timerProgressBar: true,
                    });

                } else {
                    console.error("Respuesta de la creación de cotización inválida:", data);
                }
            } else {
                console.error("Error al crear la cotización");
            }
        } catch (error) {
            console.error("Error al realizar la solicitud:", error);
        }
    };

    const handleReservar = async (event) => {
        event.preventDefault();
        try {
            // Crear la reserva en la tabla "reserva"
            const createReservation = await fetch(`${API}/api/reserva`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    tipo_transporte: transporte,
                    precio: monto,
                    id_origen: origenSeleccionado,
                    id_destino: destinoSeleccionado,
                    id: userId, //usuario correcto
                    id_carga: cargaSeleccionada,
                    id_cotizacion: cotizacionId, // Debe ser la ID de la cotización calculada previamente
                }),
            });

            if (createReservation.ok) {
                // Redirigir al componente de reserva
                console.log("Reserva agregada correctamente")
                Swal.fire({
                    icon: "info",
                    title: "Procesando información...",
                    timer: 3000,
                    timerProgressBar: true,
                });
                // Redirigir al componente de reserva y pasar los datos en el estado de ubicación
                const reservaData = await createReservation.json();
                const reservaId = reservaData.body[0].id_reserva;
                console.log(userId);
                navigate(`/reserva?id=${reservaId}&userId=${userId}`); // Ajusta la ruta según tu configuración
            } else {
                console.error("Error al crear la reserva");
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Datos incorrectos o vacíos, intenta de nuevo",
                });
            }
        } catch (error) {
            console.error("Error al realizar la solicitud:", error);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "No se pudo generar la reserva, intenta de nuevo",
            });
        }
    };


    useEffect(() => {
        fetchOrigenes();
        fetchDestinos();
        fetchCargas();
    }, []);



    return (
        <div className="section">
            <header>
                <meta charSet="UTF-8" />
                <title>Cotizacion</title>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"
                />
                <link
                    rel="stylesheet"
                    href="https://unicons.iconscout.com/release/v2.1.9/css/unicons.css"
                />
                <link rel="stylesheet" href="assets/css/cotizacion.css" />

            </header>
            <NavbarInnerPage userId={userId} />
            <div className="container">
                <div className="row full-height justify-content-center">
                    <div className="col-12 text-center align-self-center py-5">
                        <div className="section pb-5 pt-5 pt-sm-2 text-center">
                            <div className="card-3d-wrap mx-auto">
                                <div className="card-3d-wrapper">
                                    <form className="card-front">
                                        <h6 className="mb-0" id="textotop">
                                            <span>Cotización </span>
                                        </h6>
                                        <div className="center-wrap">
                                            <div className="section text-center">
                                                <div className="form-group">
                                                    <label htmlFor="origen">Origen</label>
                                                    <select
                                                        id="origen"
                                                        name="origen"
                                                        className="form-style"
                                                        value={origenSeleccionado}
                                                        onChange={(e) => setOrigenSeleccionado(e.target.value)}
                                                    >
                                                        <option value="">Selecciona un origen</option>
                                                        {origenes.map((origen) => (
                                                            <option key={origen.id_origen} value={origen.id_origen}>
                                                                {origen.depa_origen} - {origen.distri_origen} - {origen.direc_origen}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>

                                                {/* Select para destino */}
                                                <div className="form-group mt-2">
                                                    <label htmlFor="destino">Destino</label>
                                                    <select
                                                        id="destino"
                                                        name="destino"
                                                        className="form-style"
                                                        value={destinoSeleccionado}
                                                        onChange={(e) => setDestinoSeleccionado(e.target.value)}
                                                    >
                                                        <option value="">Selecciona un destino</option>
                                                        {destinos.map((destino) => (
                                                            <option key={destino.id_destino} value={destino.id_destino}>
                                                                {destino.depa_destino} - {destino.distri_destino} - {destino.direc_destino}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                {/* Select para carga */}
                                                <div className="form-group mt-2">
                                                    <label htmlFor="carga">Carga</label>
                                                    <select
                                                        id="carga"
                                                        name="carga"
                                                        className="form-style"
                                                        value={cargaSeleccionada}
                                                        onChange={(e) => setCargaSeleccionada(e.target.value)}
                                                    >
                                                        <option value="">Selecciona una carga</option>
                                                        {cargas.map((carga) => (
                                                            <option key={carga.id_carga} value={carga.id_carga}>
                                                                {carga.tipo_mercaderia} - Alto: {carga.alto} x Ancho: {carga.ancho} x Largo: {carga.largo}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                {/* Select para Transporte */}
                                                <div className="form-group mt-2">
                                                    <label htmlFor="carga">Transporte</label>
                                                    <select
                                                        id="transporte"
                                                        name="transporte"
                                                        className="form-style"
                                                        value={transporte}
                                                        onChange={(e) => setTransporte(e.target.value)}
                                                    >
                                                        <option value="">Selecciona tipo de Transporte</option>
                                                        <option>Marítimo</option>
                                                        <option>Terrestre</option>
                                                        <option>Aereo</option>
                                                    </select>
                                                </div>
                                                <div className="form-group mt-2">
                                                    <label htmlFor="monto">Monto</label>
                                                    <input
                                                        type="text"
                                                        id="monto"
                                                        name="monto"
                                                        className="form-style"
                                                        value={'S/ ' + monto}
                                                        readOnly // Para que el campo sea de solo lectura
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <button className="btn mt-2" onClick={handleCalcular}>Cotizar</button>
                                        <button className="btn mt-2" onClick={handleReservar}>Rerservar</button>
                                    </form>

                                    {/* Mensaje de cotización */}
                                    {/* {cotizacionMessage && <p>{cotizacionMessage}</p>} */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};
