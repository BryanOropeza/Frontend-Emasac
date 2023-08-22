import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const API = process.env.API_URL || "http://localhost:4000";

export const Login = () => {

    // Usamos Navigate para poder utilizar el id del usuario logeado en otros componentes con el uso de location
    const navigate = useNavigate();

    //LOGIN 
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginMessage, setLoginMessage] = useState("");

    //REGISTER
    const [razon_social, setRazon_social] = useState("");
    const [ruc, setRuc] = useState("");
    const [correo, setCorreo] = useState("");
    const [celular, setCelular] = useState("");
    const [registerMessage, setRegisterMessage] = useState("");
    const [nombreCompleto, setNombreCompleto] = useState("");



    // LOGIN
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`${API}/api/user-login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });
            console.log(res);

            if (res.ok) {
                setLoginMessage("Inicio de sesión exitoso!");
                console.log("Get Completo")
                Swal.fire({
                    icon: "success",
                    title: "Inicio de sesión exitoso!",
                    text: "Bienvenido :D",
                    timer: 3000,
                    timerProgressBar: true,
                });
                //Utilizamos el id del usuario logeado en la respuesta json para redirigir a la página innerPage
                try {
                    const jsonResponse = await res.json(); // Obtener la respuesta JSON completa
                    const userId = jsonResponse.user.id;
                    navigate(`/innerPage?userId=${userId}`);
                } catch (jsonError) {
                    console.error("Error al obtener el ID de usuario desde la respuesta JSON:", jsonError);
                }
            } else {
                setLoginMessage("Credenciales incorrectas. Inténtalo de nuevo.");
                Swal.fire({
                    icon: "error",
                    title: "Ocurrió un error",
                    text: "Ocurrió un error. Vuelve a intentarlo",
                });
            }
        } catch (error) {
            console.error("Error de inicio de sesión:", error);
        }
    };

    const handleNombreCompletoChange = (e) => {
        setNombreCompleto(e.target.value);
    };


    const handleRegister = async (e) => {
        try {
            e.preventDefault();

            const [nombre, apellido1, apellido2] = nombreCompleto.split(" ");
            const apellidos = apellido1 + " " + apellido2;

            const clienteRes = await fetch(`${API}/api/cliente`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nombre,
                    razon_social,
                    ruc,
                    apellidos,
                    correo,
                    celular,
                }),
            });
            const clienteData = await clienteRes.json();
            console.log(clienteData);

            const userRes = await fetch(`${API}/api/users`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: ruc, // Utiliza el RUC como username
                    password,
                }),
            });
            const userData = await userRes.json();
            console.log(userData);

            if (clienteRes.ok && userRes.ok) {
                Swal.fire({
                    icon: "success",
                    title: "¡Registro exitoso!",
                    text: "Tu registro ha sido exitoso, en breve se te redirigirá.",
                    timer: 3000, // El tiempo en milisegundos antes de que se cierre automáticamente
                    timerProgressBar: true,
                });
                //Utilizamos el id del usuario logeado en la respuesta json para redirigir a la página innerPage
                try {
                    const userId = userData.body[0].id;;
                    navigate(`/innerPage?userId=${userId}`);
                } catch (jsonError) {
                    console.error("Error al obtener el ID de usuario desde la respuesta JSON:", jsonError);
                }

            } else {
                setRegisterMessage("Ocurrió un error. Inténtalo de nuevo.");
                Swal.fire({
                    icon: "error",
                    title: "Ocurrió un error",
                    text: "Ocurrió un error. Vuelve a intentarlo",
                });
            }

        } catch (error) {
            console.error("Error de inicio de sesión:", error);
            setRegisterMessage("Error en el registro. Inténtelo de nuevo");
        }
    };
    return (
        <div className="section">

            <header>
                <meta charSet="UTF-8" />
                <title>Login</title>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"
                />
                <link
                    rel="stylesheet"
                    href="https://unicons.iconscout.com/release/v2.1.9/css/unicons.css"
                />
                <link rel="stylesheet" href="assets/css/login.css" />

            </header>

            <div className="section">
                <div className="container">
                    <div className="row full-height justify-content-center">
                        <div className="col-12 text-center align-self-center py-5">
                            <div className="section pb-5 pt-5 pt-sm-2 text-center">
                                <h6 className="mb-0 pb-3" id="textotop">
                                    <span>Log In </span><span>Sign Up</span>
                                </h6>
                                <input
                                    className="checkbox"
                                    type="checkbox"
                                    id="reg-log"
                                    name="reg-log"
                                />
                                <label htmlFor="reg-log"></label>
                                <a href="/" className="gohome btn my-3">Go home</a>
                                <div className="card-3d-wrap mx-auto">
                                    <div className="card-3d-wrapper">
                                        <form onSubmit={handleLogin} className="card-front">
                                            <div className="center-wrap">
                                                <div className="section text-center">
                                                    <h4 className="mb-4 pb-3">Log In</h4>
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            onChange={(e) => setUsername(e.target.value)}
                                                            value={username}
                                                            name="logruc"
                                                            className="form-style"
                                                            placeholder="RUC"
                                                            id="logruc"
                                                            autoComplete="off"
                                                            minLength="8"
                                                            required
                                                        />
                                                        <i className="input-icon uil uil-credit-card"></i>
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <input
                                                            type="password"
                                                            onChange={(e) => setPassword(e.target.value)}
                                                            value={password}
                                                            name="logpass"
                                                            className="form-style"
                                                            placeholder="Your Password"
                                                            id="logpass"
                                                            autoComplete="off"
                                                            minLength="8"
                                                            maxLength="16"
                                                            required
                                                        />
                                                        <i className="input-icon uil uil-lock-alt"></i>
                                                    </div>
                                                    <button type="submit" className="btn mt-4">Submit</button>
                                                    <p className="mb-0 mt-4 text-center">
                                                        <a href="#0" className="link">Forgot your password?</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </form>
                                        {loginMessage && <p>{loginMessage}</p>}
                                        <form onSubmit={handleRegister} className="card-back">
                                            <div className="center-wrap">
                                                <div className="section text-center">
                                                    <h4 className="mb-4 pb-3">Sign Up</h4>
                                                    {/* Persona Contacto */}
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            name="persona_contacto"
                                                            onChange={handleNombreCompletoChange}
                                                            value={nombreCompleto}
                                                            className="form-style"
                                                            placeholder="Primer nombre y apellidos"
                                                            id="persona_contacto"
                                                            autoComplete="off"
                                                            onInput={(e) => e.target.value = e.target.value.replace(/[^A-Za-z ]/g, "")}
                                                            maxLength="150"
                                                            minLength="5"
                                                            required
                                                        />
                                                        <i className="input-icon uil uil-user"></i>
                                                    </div>
                                                    {/* Razón Social */}
                                                    <div className="form-group mt-2">
                                                        <input
                                                            type="text"
                                                            name="razon_social"
                                                            onChange={(e) => setRazon_social(e.target.value)}
                                                            value={razon_social}
                                                            className="form-style"
                                                            placeholder="Razón Social"
                                                            id="razon_social"
                                                            autoComplete="off"
                                                            onInput={(e) => e.target.value = e.target.value.replace(/[^A-Za-z .,]/g, "")}
                                                            maxLength="150"
                                                            minLength="3"
                                                            required
                                                        />
                                                        <i className="input-icon uil uil-building"></i>
                                                    </div>
                                                    {/* Ruc */}
                                                    <div className="form-group mt-2">
                                                        <input
                                                            type="text"
                                                            name="ruc"
                                                            onChange={(e) => setRuc(e.target.value)}
                                                            value={ruc}
                                                            className="form-style"
                                                            placeholder="RUC"
                                                            id="ruc"
                                                            autoComplete="off"
                                                            maxLength="11"
                                                            minLength="11"
                                                            required
                                                        />
                                                        <i className="input-icon uil uil-credit-card"></i>
                                                    </div>
                                                    {/* Celular */}
                                                    <div className="form-group mt-2">
                                                        <input
                                                            type="tel"
                                                            name="celular"
                                                            onChange={(e) => setCelular(e.target.value)}
                                                            value={celular}
                                                            className="form-style"
                                                            placeholder="Celular"
                                                            id="celular"
                                                            autoComplete="off"
                                                            maxLength="9"
                                                            minLength="9"
                                                            required
                                                        />
                                                        <i className="input-icon uil uil-phone"></i>
                                                    </div>
                                                    {/* Email */}
                                                    <div className="form-group mt-2">
                                                        <input
                                                            type="email"
                                                            name="logemail"
                                                            onChange={(e) => setCorreo(e.target.value)}
                                                            value={correo}
                                                            className="form-style"
                                                            placeholder="Email"
                                                            id="logemail"
                                                            autoComplete="off"
                                                            onInput={(e) => e.target.value = e.target.value.replace(/[^A-Za-z0-9@._-]/g, "")}
                                                            required
                                                        />
                                                        <i className="input-icon uil uil-at"></i>
                                                    </div>
                                                    {/* Contraseña */}
                                                    <div className="form-group mt-2">
                                                        <input
                                                            type="password"
                                                            name="logpass"
                                                            onChange={(e) => setPassword(e.target.value)}
                                                            value={password}
                                                            className="form-style"
                                                            placeholder="Password"
                                                            id="logpass"
                                                            autoComplete="off"
                                                            minLength="8"
                                                            maxLength="16"
                                                            required
                                                        />
                                                        <i className="input-icon uil uil-lock-alt"></i>
                                                    </div>
                                                    <button type="submit" className="btn mt-4">Submit</button>
                                                </div>
                                            </div>
                                        </form>
                                        {registerMessage && <p>{registerMessage}</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <script src="js.js"></script>
        </div>
    );
};

