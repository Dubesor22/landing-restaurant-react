import React, { useState } from "react";
import "./Reserva.css";

const Reserva = () => {
  let contactInfo = JSON.parse(localStorage.getItem("RESERVA")) || [];
  const saveData = () => {
    contactInfo.push(data);
    localStorage.setItem("RESERVA", JSON.stringify(contactInfo));
  };
  const [data, setData] = useState({
    nombre: "",
    email: "",
    fecha: "",
    hora: "",
    comensales: "",
  });
  const initialState = {
    name: "",
    email: "",
    fecha: "",
    hora: "",
    comensales: "",
  };
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const clearState = () => {
    setData({ ...initialState });
  };

  const handleInputChange = (event) => {
    if (data.nombre.length < 3) {
      setMessage("Name must be at least 3 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    saveData();
    console.log(
      "sending data..." +
        data.name +
        " " +
        data.email +
        " " +
        data.fecha +
        " " +
        data.hora +
        " " +
        data.comensales
    );
    clearState();
  };

  return (
    <div className="reserva" id="reservas">
      <h2 className="titulo-reserva">Reserva</h2>
      <form class="formulario" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="nombre"
          onChange={handleInputChange}
          name="nombre"
          value={data.nombre}
        />
        <input
          type="email"
          placeholder="email"
          onChange={handleInputChange}
          name="email"
          value={data.email}
        />
        <input
          type="date"
          placeholder="fecha de la reserva"
          onChange={handleInputChange}
          name="fecha"
          value={data.fecha}
        />
        <input
          type="time"
          onChange={handleInputChange}
          name="hora"
          value={data.hora}
        />
        <input
          type="number"
          placeholder="comensales"
          onChange={handleInputChange}
          name="comensales"
          value={data.comensales}
        />
        <button
          className="btn btn-lg btn-primary"
          type="submit"
          disabled={btnDisabled}
        >
          Reserva Ahora
        </button>
      </form>
      <div className="message">{message}</div>
    </div>
  );
};

export default Reserva;
