import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Importa Routes y Route
import logo from '../Img/KARIO_LOGO.png'
import bug from '../Img/bug.png'
import reload from '../Img/relaod.png'
import trash from '../Img/trash.png'
import ayudas from '../Img/ayuda.png'
import agregar from '../Img/agregar.png'
import settings from '../Img/settings.png'
import campanita from '../Img/campanita.png'
import Foto from '../Img/Pedro.jpeg'
import AyudaCrud from './ayuda';
import './nav.css' 



const Navigation = () => {
  return (
    <Router>
      <nav className="nav">
        <div className="links">
          <div className='logos'>
            <img className='logoss' src={agregar} />
            <Link to="/" className="link">Añadir</Link>
          </div>

          <div className='logos'>
            <img className='logoss' src={reload} />
            <Link to="/page2" className="link">Refrescar</Link>
          </div>

          <div className='logos'>
            <img className='logoss' src={trash} />
            <Link to="/page3" className="link">Eliminar</Link>
          </div>

          <div className='logos'>
            <img className='logo' src={logo} />
          </div>

          <div className='logos'>
            <img className='logoss' src={bug} />
            <Link to="/page4" className="link">Reporte</Link>
          </div>

          <div className='logos'>
            <img className='logoss' src={ayudas} />
            <Link to="/ayuda" className="link">Ayuda</Link>
          </div>
          <div className='settingsContenedor' >
            <img className='settings' src={settings} ></img>
            <img className='settingss' src={campanita} ></img>
            <img className='logoFoto' src={Foto} ></img>
          </div>
        </div>

        
      </nav>
      <Routes>
        <Route path="/ayuda" element={<AyudaCrud />} />
      </Routes>
    </Router>
  );
};

export default Navigation;


