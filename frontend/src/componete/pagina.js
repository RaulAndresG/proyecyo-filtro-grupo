import React, { useState, useEffect } from "react";
import burguer from '../Img/burguer.png';
import './pagina.css';

const Panel = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [percentage, setPercentage] = useState(0);
  const [animationDirection, setAnimationDirection] = useState('forwards');
  const [userInput, setUserInput] = useState(75);
  
  useEffect(() => {
    // Realiza una solicitud a la API para obtener los datos
    fetch('http://localhost:7777/api/Indicadores')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error al obtener los datos:", error);
        setLoading(false);
      });
  }, []);

  // ... el resto de tu código

  useEffect(() => {
    const interval = setInterval(() => {
      if (percentage < userInput) {
        setPercentage(percentage + 1);
      } else if (percentage > userInput) {
        setPercentage(percentage - 1);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [percentage, userInput]);

  const getCircleColor = () => {
    if (percentage >= 80) {
      return 'green';
    } else if (percentage >= 50) {
      return 'orange';
    } else {
      return 'red';
    }
  };


  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // Escalamos el porcentaje para limitar el llenado máximo al 90%
  const scaledPercentage = (percentage / 100) * 70;

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 100);
    if (!isNaN(value) && value >= 0 && value <= 100) {
      setUserInput(value);
    }
  };



  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="app">
      <div>
        <h1 className="pagina">Panel de Indicadores</h1>
        <p className="paginas">Aquí puedes visualizar los indicadores propuestos y añadidos por tu equipo de trabajo. Si quieres ver más detalles, dale click a uno de ellos para más información</p>
      </div>
      <div className="tabla-container">
        <table className="tabla">
          <thead>
          <tr>
              <th colSpan={9} className="titulo-container">
                <div className="titulo1">Indicador</div>
                <div className="titulo2">Descripcion</div>
                <div className="titulo3">Categoria</div>
                <div className="titulo4">Fecha de Inicio</div>
                <div className="titulo5">Fecha de Terminacion</div>
                <div className="titulo6">Formula</div>
                <div className="titulo7">Frecuencia</div>
                <div className="titulo8">Cumplimiento</div>
                <div className="titulo9">Area</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id} className="rectangulo">
                <td colSpan={9}>
                  <div className="informacion">
                    <div className="info1">{item.indicador}</div>
                    <div className="info2">{item.descripcion}</div>
                    <div className="info3">{item.categoria}</div>
                    <div className="info4">{item.fecha_inicio}</div>
                    <div className="info5">{item.fecha_terminacion}</div>
                    <div className="info6">{item.formula}</div>
                    <div className="info7">{item.frecuencia}</div>
                    <div className="circle-loader">
                      <svg width="60" height="60">
                      <circle
                        className="circle"
                        cx="30"
                        cy="30"
                        r="27"
                        stroke={getCircleColor()}
                        strokeWidth="7"
                        fill="none"
                        strokeDasharray="251"
                        strokeDashoffset={(251 * (100 - scaledPercentage)) / 100}
                        style={{ animationDirection1: animationDirection }}
                      />
                      <text x="30" y="30" textAnchor="middle" dy="0.3em" className="percentage">
                        {percentage}%
                      </text>
                      </svg>
                    </div>
                    <div className="info9">{item.area}</div>
                    <img alt="" className="burguer" src={burguer} />
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

export default Panel;
