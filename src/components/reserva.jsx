import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NavbarInnerPage } from "./NavbarinnerPage";
import Swal from "sweetalert2";

export const API = process.env.API || "http://localhost:4000";

export const Reserva = () => {

    const navigate = useNavigate();
    // Ruta del servidor

    const location = useLocation();
    const reservaIdText = new URLSearchParams(location.search).get('id');
    const reservaId = Number(reservaIdText);

    const userIdText = new URLSearchParams(location.search).get('userId');
    const userId = Number(userIdText);

    const [origenData, setOrigenData] = useState({});
    const [destinoData, setDestinoData] = useState({});
    const [cargaData, setCargaData] = useState({});

    const [reservaData, setReservaData] = useState(null); //ALMACENARÁ LOS DATOS DEL ID DE RESERVA

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const fetchReservationDetails = useCallback(async () => { //Obtener datos de Reserva por usuario
        try {
            const response = await fetch(`${API}/api/reserva/${reservaId}`);
            if (response.ok) {
                const data = await response.json();
                setReservaData(data.body[0]);
                console.log("Response from fetchReservationDetails:", data);
                return data.body[0]; // Devuelve los detalles de reserva
            } else {
                console.error("Error al obtener los detalles de la reserva");
            }
        } catch (error) {
            console.error("Error al realizar la solicitud:", error);
            throw error;
        }
    }, [reservaId])

    const fetchOriginDetails = useCallback(async (id_origen) => { //Obtener datos de origen por usuario
        try {
            const response = await fetch(`${API}/api/origen/${id_origen}`);
            if (response.ok) {
                const data = await response.json();
                setOrigenData(data.body[0]);
                return data.body[0]; // Devuelve los detalles de origen
            } else {
                console.error("Error al obtener los detalles del origen");
            }
        } catch (error) {
            console.error("Error al realizar la solicitud:", error);
            throw error;
        }
    }, [API]);

    const fetchDestinationDetails = useCallback(async (id_destino) => { //Obtener datos de destino por usuario
        try {
            const response = await fetch(`${API}/api/destino/${id_destino}`);
            if (response.ok) {
                const data = await response.json();
                setDestinoData(data.body[0]);
                return data.body[0]; // Devuelve los detalles de destino
            } else {
                console.error("Error al obtener los detalles del destino");
            }
        } catch (error) {
            console.error("Error al realizar la solicitud:", error);
            throw error;
        }
    }, [API]);

    const fetchCargoDetails = useCallback(async (id_carga) => { //Obtener datos de carga por usuario
        try {
            const response = await fetch(`${API}/api/carga/${id_carga}`);
            if (response.ok) {
                const data = await response.json();
                setCargaData(data.body[0]);
                return data.body[0]; // Devuelve los detalles de carga
            } else {
                console.error("Error al obtener los detalles de la carga");
            }
        } catch (error) {
            console.error("Error al realizar la solicitud:", error);
            throw error;
        }
    }, [API]);


    const handleCancelClick = async (event) => {

        event.preventDefault();

        // Mostrar alerta de confirmación antes de eliminar la reserva
        const result = await Swal.fire({
            title: '¿Estás seguro?',
            text: 'Esta acción eliminará el registro de la reserva',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar',
        });

        if (result.isConfirmed) {
            try {
                // Realizar la solicitud para eliminar la reserva
                const response = await fetch(`${API}/api/reserva/${reservaId}`, {
                    method: 'DELETE',
                });

                if (response.ok) {
                    // Mostrar alerta de éxito si se eliminó correctamente
                    Swal.fire('Eliminado', 'El registro de reserva ha sido eliminado', 'success');
                    // También podrías redirigir a otra página o realizar otras acciones necesarias
                    // Redirigir al usuario a la ruta /innerPage
                    navigate(`/innerPage?userId=${userId}`);
                } else {
                    // Mostrar alerta de error si algo salió mal
                    Swal.fire('Error', 'Ocurrió un error al eliminar la reserva', 'error');
                }
            } catch (error) {
                // Mostrar alerta de error si ocurrió un error en la solicitud
                Swal.fire('Error', 'Ocurrió un error al eliminar la reserva', 'error');
            }
        }
    };

    const handleConfirmClick = async (event) => {
        event.preventDefault();
        // Mostrar alerta de éxito
        Swal.fire('Éxito', 'La reserva ha sido confirmada', 'success');
        navigate(`/innerPage?userId=${userId}`);
    };



    useEffect(() => {
        async function fetchData() {
            const details = await fetchReservationDetails();
            setReservaData(details);
            if (details) {
                // Aquí estamos utilizando el id_origen de details
                const id_origen = details.id_origen; // Asegúrate de que este sea el nombre correcto de la propiedad
                const id_destino = details.id_origen;
                const id_carga = details.id_carga;
                // Llamamos a fetchOriginDetails con el id_origen
                const originDetails = await fetchOriginDetails(id_origen);
                setOrigenData(originDetails);

                const destinationDetails = await fetchDestinationDetails(id_destino);
                setDestinoData(destinationDetails);

                const cargaDetails = await fetchCargoDetails(id_carga);
                setCargaData(cargaDetails);
                // Continuamos con las demás llamadas
            }
        }
        fetchData();
    }, [fetchReservationDetails, fetchOriginDetails, fetchDestinationDetails, fetchCargoDetails]);

    if (!reservaData) {
        return <div>
            cargandi
        </div>;
    }

    // Now you can safely access reservaData properties
    console.log(reservaData);
    return (
        <div className="section">
            <header>
                <meta charSet="UTF-8" />
                <title>Reserva</title>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"
                />
                <link
                    rel="stylesheet"
                    href="https://unicons.iconscout.com/release/v2.1.9/css/unicons.css"
                />
                <link rel="stylesheet" href="assets/css/reserva.css" />

            </header>
            <NavbarInnerPage />
            <div className="container">
                <div className="row full-height justify-content-center">
                    <div className="col-12 text-center align-self-center py-5">
                        <div className="section pb-5 pt-5 pt-sm-2 text-center">

                            <div className="card-3d-wrap mx-auto">
                                <div className="card-3d-wrapper">
                                    <form className="card-front">
                                        <h6 className="mb-0" id="textotop">
                                            <span> Reserva </span>
                                        </h6>
                                        <div className="center-wrap">
                                            <div className="section text-center">
                                                <div className="form-group">
                                                    <label>Código de Rerserva</label>
                                                    <input
                                                        type="text"
                                                        id="Código de Reserva"
                                                        name="Código de Reserva"
                                                        className="form-style"
                                                        value={reservaData.id_reserva}
                                                        readOnly
                                                    />
                                                </div>


                                                <div className="form-group mt-2">
                                                    <label>Tipo de Transporte</label>
                                                    <input
                                                        type="text"
                                                        id="Transporte"
                                                        name="Transporte"
                                                        className="form-style"
                                                        value={reservaData.tipo_transporte}
                                                        readOnly
                                                    />
                                                </div>

                                                <div className="form-group mt-2">
                                                    <label>Precio</label>
                                                    <input
                                                        type="text"
                                                        id="precio"
                                                        name="precio"
                                                        className="form-style"
                                                        value={reservaData.precio}
                                                        readOnly
                                                    />

                                                </div>

                                                <div className="form-group mt-2">
                                                    <label>Fecha</label>
                                                    <input
                                                        type="text"
                                                        id="fecha"
                                                        name="fecha"
                                                        className="form-style"
                                                        value={formatDate(reservaData.fecha_re)}
                                                        readOnly
                                                    />
                                                </div>
                                                <div className="form-group mt-2">
                                                    <label>Origen</label>
                                                    <input
                                                        type="text"
                                                        id="origen"
                                                        name="origen"
                                                        className="form-style"
                                                        value={`${origenData.depa_origen || ""}`}
                                                        readOnly
                                                    />
                                                </div>

                                                <div className="form-group mt-2">
                                                    <label>Destino</label>
                                                    <input
                                                        type="text"
                                                        id="destino"
                                                        name="destino"
                                                        className="form-style"
                                                        value={`${destinoData.depa_destino || ""}`}
                                                        readOnly
                                                    />
                                                </div>
                                                <div className="form-group mt-2">
                                                    <label>Carga</label>
                                                    <input
                                                        type="text"
                                                        id="carga"
                                                        name="carga"
                                                        className="form-style"
                                                        value={`${cargaData.tipo_mercaderia || ""}`}
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <button className="btn mt-2" onClick={handleCancelClick}>Cancelar</button>
                                        <button className="btn mt-2" onClick={handleConfirmClick}>Confirmar</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );

};