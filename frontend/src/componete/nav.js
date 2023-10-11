import React from 'react';
import logo from '../Img/KARIO_LOGO.png'
import bug from '../Img/bug.png'
import reload from '../Img/relaod.png'
import trash from '../Img/trash.png'
import ayuda from '../Img/ayuda.png'
import agregar from '../Img/agregar.png'
import settings from '../Img/settings.png'
import campanita from '../Img/campanita.png'
import Foto from '../Img/Pedro.jpeg'

import { BrowserRouter as Router } from 'react-router-dom';
import {Link} from 'react-router-dom'
import './nav.css'; 

const Navigation = () => {
  return (
    <Router>
       <nav className="nav">
      <div className="links">

        <div className='logos' >
        <img className='logoss' src={agregar} ></img>
          <Link to="/" className="link">Añadir</Link>
        </div>

        <div className='logos' >
          <img className='logoss' src={reload} ></img>
          <Link to="/page2" className="link">Refrescar</Link>
        </div>

        <div className='logos' >
          <img className='logoss' src={trash} ></img>
          <Link to="/page3" className="link">Eliminar</Link>
        </div>

        <div className='logos' >
        <img className='logo'  src={logo} ></img>
        </div>
 
        <div className='logos'>
          <img className='logoss' src={bug} ></img>
          <Link to="/page4" className="link">Reportar</Link>
        </div>

        <div className='logos' >
        <img className='logoss' src={ayuda} ></img>
          <Link to="/page5" className="link">Ayuda</Link>
        </div>

        <div className='settingsContenedor' >
        <img className='settings' src={settings} ></img>
        <img className='settingss' src={campanita} ></img>
        <img className='logoFoto' src={Foto} ></img>
      </div>

      </div>
    </nav>
    </Router>
   
  );
};

export default Navigation;
