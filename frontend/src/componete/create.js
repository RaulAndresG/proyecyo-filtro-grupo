import React, { useState } from "react";
import { Button, Form } from 'semantic-ui-react';
import axios from "axios";
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

export default function Create() {
  let history = useHistory();
  const [indicador, setIndicador] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [categoria, setCategoria] = useState('');
  const [fechaInicio, setFechaInicio] = useState(''); 
  const [fechaTerminacion, setFechaTerminacion] = useState(''); 
  const [formula, setFormula] = useState(''); 
  const [frecuencia, setFrecuencia] = useState(''); 
  const [cumplimiento, setCumplimiento] = useState(0); 
  const [area, setArea] = useState(''); 
  const [error, setError] = useState('');

  const postData = () => {
    axios.post(`http://localhost:7777/api/Indicadores`, {
      indicador,
      descripcion,
      categoria,
      fecha_inicio: fechaInicio, 
      fecha_terminacion: fechaTerminacion, 
      formula, 
      frecuencia, 
      cumplimiento, 
      area, 
      error
    }).then(() => {
      history.push('/pagina');
    })
    .catch((error) => {
      console.error('Error al crear el elemento:', error);
      setError('Error al crear el elemento. Por favor, inténtalo de nuevo.');
    });
  };

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>Nombre</label>
          <input placeholder="Nombre" value={indicador} onChange={(e) => setIndicador(e.target.value)} ></input>
        </Form.Field>
        <Form.Field>
          <label>Descripción</label>
          <input placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} ></input>
        </Form.Field>
        <Form.Field>
          <label>Categoría</label>
          <input placeholder="Categoría" value={categoria} onChange={(e) => setCategoria(e.target.value)} ></input>
        </Form.Field>
        <Form.Field>
          <label>Fecha de Inicio</label>
          <input placeholder="Fecha de Inicio" value={fechaInicio} onChange={(e) => setFechaInicio(e.target.value)} ></input>
        </Form.Field>
        <Form.Field>
          <label>Fecha de Terminación</label>
          <input placeholder="Fecha de Terminación" value={fechaTerminacion} onChange={(e) => setFechaTerminacion(e.target.value)} ></input>
        </Form.Field>
        <Form.Field>
          <label>Formula</label>
          <input placeholder="Formula" value={formula} onChange={(e) => setFormula(e.target.value)} ></input>
        </Form.Field>
        <Form.Field>
          <label>Frecuencia</label>
          <input placeholder="Frecuencia" value={frecuencia} onChange={(e) => setFrecuencia(e.target.value)} ></input>
        </Form.Field>
        <Form.Field>
          <label>Cumplimiento</label>
          <input type="number" placeholder="Cumplimiento" value={cumplimiento} onChange={(e) => setCumplimiento(e.target.value)} ></input>
        </Form.Field>
        <Form.Field>
          <label>Área</label>
          <input placeholder="Área" value={area} onChange={(e) => setArea(e.target.value)} ></input>
        </Form.Field>
        <Button type="submit" onClick={postData}>Crear</Button>
      </Form>
    </div>
  );
}

