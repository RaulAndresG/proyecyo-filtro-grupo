import logo from '../img/KARIO_LOGO.png'; 
import React, { useEffect } from 'react';
import { BrowserRouter as  useHistory } from 'react-router-dom';

export default function LogoAnimado() {
    const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => {
      history.push('/login'); // Cambia la URL de destino según tus necesidades
    }, 2500);

    return () => clearTimeout(timer);
  }, [history]);
  return (
    <div className="logoAnimado">
      <div className="img-animated-container">
        <img id="img-animated" src={logo} alt="Logo animado" />
      </div>
    </div>
  );
}
