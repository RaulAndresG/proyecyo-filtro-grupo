
import './login.css'
import React, { useEffect } from 'react';
import { BrowserRouter as  useHistory } from 'react-router-dom';

export default function Logueo(){
    const history = useHistory();

    useEffect(() => {
      const timer = setTimeout(() => {
        history.push('/'); // Cambia la URL de destino según tus necesidades
      }, 2500);
  
      return () => clearTimeout(timer);
    }, [history]);  
    return(
        <div className="contenedor1">
           <div className="logo">logo</div>
          <h1>Título</h1>
           <div className="foto-usuario">foto usuario</div>
           <div className="nombre-usuario">usuario</div>
           <div className="rol">rol</div>
         </div>
    )
}