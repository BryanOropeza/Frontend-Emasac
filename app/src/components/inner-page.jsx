import { React, useEffect, useState } from "react";
import { NavbarInnerPage } from "./NavbarinnerPage";
import { useLocation } from "react-router-dom";
import Swal from 'sweetalert2';


export const InnerPage = () => {

    // Importamos useLocation para acceder al id del usuario logeado
    const location = useLocation();
    const userIdText = new URLSearchParams(location.search).get("userId");
    const userId = Number(userIdText);

    const API = process.env.API_URL || "http://localhost:4000";

    const [cotizaciones, setCotizaciones] = useState([]);
    const [reservas, setReservas] = useState([]);



    const deleteCotizacion = async (id) => { //Cambiamos estado de cotización a "Eliminado"
        try {
            const response = await fetch(`${API}/api/delete-cotizacion/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ estado: 'Eliminado' }),
            });

            if (response.ok) {
                // Actualizar la lista de cotizaciones después de eliminar
                const updatedCotizaciones = cotizaciones.filter(cotizacion => cotizacion.id_cotizacion !== id);
                setCotizaciones(updatedCotizaciones);

                Swal.fire({
                    icon: 'success',
                    title: 'Cotización eliminada',
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error al eliminar la cotización',
                });
            }
        } catch (error) {
            console.error("Error al eliminar la cotización:", error);
            Swal.fire({
                icon: 'error',
                title: 'Error al eliminar la cotización',
            });
        }
    };


    const deleteReserva = async (id) => { //Cambiamos estado de reserva a "Eliminado"
        try {
            const response = await fetch(`${API}/api/delete-cotizacion/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ estado: 'Eliminado' }),
            });

            if (response.ok) {
                // Actualizar la lista de cotizaciones después de eliminar
                const updatedReservaciones = reservas.filter(reserva => reserva.id_reserva !== id);
                setReservas(updatedReservaciones);

                Swal.fire({
                    icon: 'success',
                    title: 'Reserva eliminada',
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error al eliminar la reserva',
                });
            }
        } catch (error) {
            console.error("Error al eliminar la reserva:", error);
            Swal.fire({
                icon: 'error',
                title: 'Error al eliminar la reserva',
            });
        }
    };


    const showDetailsCot = (details) => { //Mostramos detalles de cotizacion
        Swal.fire({
            icon: 'info',
            title: 'Detalles de Cotización',
            html: `
                <p><strong>Codigo:</strong> ${details.id_cotizacion}</p>
                <p><strong>Monto:</strong> S/ ${details.precio_cot}</p>
                <p><strong>Usuario:</strong> ${details.id}</p>
            `,
        });
    };

    const showDetailsResv = (details) => { //Mostramos detalles de reserva
        Swal.fire({
            icon: 'info',
            title: 'Detalles de Reserva',
            html: `
                <p><strong>Codigo:</strong> ${details.id_reserva}</p>
                <p><strong>Transporte:</strong> ${details.tipo_transporte}</p>
                <p><strong>Precio:</strong>S/ ${details.precio}</p>
                <p><strong>Fecha de Reserva:</strong> ${details.fecha_re}</p>
                <p><strong>Código de Cotización:</strong> ${details.id_cotizacion}</p>
                <p><strong>Estado:</strong> ${details.estado}</p>
            `,
        });
    };


    useEffect(() => { //Extraemos los datos de cotizacion y reserva por id de usuario
        // Obtener cotizaciones y reservas del usuario desde el backend
        fetch(`${API}/api//users-cot-resv/${userId}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setCotizaciones(data.cotizaciones);
                setReservas(data.reservas);
            })
            .catch((error) => {
                console.error("Error al obtener cotizaciones y reservas:", error);
            });
    }, [userId]);
    return (
        <div>
            <NavbarInnerPage userId={userId} />
            <div className="container mt-4">
                <h2 className="mb-2" id="hinnerPage">Cotizaciones Realizadas</h2>
                <div className="card-list row">
                    {cotizaciones.map((cotizacion) => (
                        <div className="col-lg-4 col-md-6 mb-4 card-block " key={cotizacion.id_cotizacion}>
                            <div className="card card-item h-100">
                                <div className="card-body card-content text-center" style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center'
                                }}>
                                    <span className="card-text">
                                        Código de Cotización: {cotizacion.id_cotizacion}
                                        <br />
                                        Monto: S/ {cotizacion.precio_cot}</span>
                                    <span className="card-icon"><i className="fa-solid fa-money-bill"></i></span>
                                    <br />
                                    <button className="btn btn-primary mt-2" onClick={() => showDetailsCot({
                                        id_cotizacion: cotizacion.id_cotizacion,
                                        precio_cot: cotizacion.precio_cot,
                                        id: cotizacion.id
                                    })}>Detalle</button>

                                    <button className="btn btn-danger mt-2" onClick={() => deleteCotizacion(cotizacion.id_cotizacion)}>Eliminar</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <br /> <br />
                <h2 className="mb-2" id="hinnerPage">Reservas programadas</h2>
                <div className="card-list row">
                    {reservas.map((reserva) => (
                        <div className="col-lg-4 col-md-6 mb-4 card-block" key={reserva.id_reserva}>
                            <div className="card card-item h-100">
                                <div className="card-body card-content" style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center'
                                }}>
                                    <span className="card-text">
                                        Código de Reserva: {reserva.id_reserva}
                                        <br />
                                        Tipo de Transporte: {reserva.tipo_transporte}</span>
                                    <span className="card-icon"><i className="fa-solid fa-truck-plane"></i></span>
                                    <br />
                                    <button className="btn btn-primary mt-2" onClick={() => showDetailsResv({
                                        id_reserva: reserva.id_reserva,
                                        tipo_transporte: reserva.tipo_transporte,
                                        precio: reserva.precio,
                                        fecha_re: reserva.fecha_re,
                                        id_cotizacion: reserva.id_cotizacion,
                                        estado: reserva.estado
                                    })}>Detalle</button>

                                    <button className="btn btn-danger mt-2" onClick={() => deleteReserva(reserva.id_reserva)}>Eliminar</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

