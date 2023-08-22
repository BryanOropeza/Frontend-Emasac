import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Users } from './components/Users.jsx'
import { Login } from "./components/login.jsx";
import { MainPage } from "./components/main_page.jsx";
import { InnerPage } from "./components/inner-page.jsx";
import { Cotizacion } from "./components/cotizacion.jsx";
import { Reserva } from "./components/reserva.jsx";
import { Tracking } from "./components/tracking.jsx";


function App() {
  return (
    <div>
      <BrowserRouter>
        <br />
        <br />
        <br />
        <div>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/users" element={<Users />} />
            <Route path="/login" element={<Login />} />
            <Route path="/innerPage" element={<InnerPage />} />
            <Route path="/cotizacion" element={<Cotizacion />} />
            <Route path="/reserva" element={<Reserva />} />
            <Route path="/tracking" element={<Tracking />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;
