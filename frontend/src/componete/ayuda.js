import React, { useState, useEffect } from "react";
import "./pagina.css";

const HelpPage = () => {
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
        <table className="tabla">
          <thead>
            <tr>
              <th colSpan={3} className="titulo-container">
                <div className="titulo1">Título</div>
                <div className="titulo2">Descripción</div>
                <div className="titulo3">Categoría</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {helpData.map((item) => (
              <tr key={item._id} className="rectangulo">
                <td colSpan={3}>
                  <div className="informacion">
                    <div className="info1">{item.titulo}</div>
                    <div className="info2">{item.descripcion}</div>
                    <div className="info3">{item.categoria}</div>
                    <ul>
                      {item.instrucciones.map((instruccion, index) => (
                        <li key={index}>{instruccion}</li>
                      ))}
                    </ul>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HelpPage;
