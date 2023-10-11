import React, { useState, useEffect } from "react";
import "./ayuda.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const AyudaCard = ({ titulo, descripcion, categoria, instrucciones }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Redirige a la página principal o cualquier otra página que desees.
    navigate("/");
  };

  return (
    <div className="rectangulo" onClick={handleClick}>
      <div className="informacion">
        <div className="info1">{titulo}</div>
        <div className="info2">{descripcion}</div>
        <div className="info3">{categoria}</div>
        <ul>
          {instrucciones.map((instruccion, index) => (
            <li key={index}>{instruccion}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

AyudaCard.propTypes = {
  titulo: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  categoria: PropTypes.string.isRequired,
  instrucciones: PropTypes.array.isRequired,
};

const AyudaCrud = () => {
  const [helpData, setHelpData] = useState([]);

  useEffect(() => {
    // Realiza una solicitud a la API para obtener los datos de ayuda
    fetch("http://localhost:7777/api/Ayuda")
      .then((response) => response.json())
      .then((data) => {
        setHelpData(data);
      })
      .catch((error) => {
        console.error("Error al obtener los datos de ayuda:", error);
      });
  }, []);

  return (
    <div className="app">
      <div>
        <h1 className="pagina">Página de Ayuda</h1>
        <p className="paginas">
          Aquí encontrarás recursos útiles y respuestas a las preguntas
          frecuentes.
        </p>
      </div>
      <div className="tabla-container">
        {helpData.map((item) => (
          <AyudaCard
            key={item._id}
            titulo={item.titulo}
            descripcion={item.descripcion}
            categoria={item.categoria}
            instrucciones={item.instrucciones}
          />
        ))}
      </div>
    </div>
  );
};

export default AyudaCrud;
