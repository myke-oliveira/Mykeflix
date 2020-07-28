import React from 'react';
import Logo from '../../assets/img/Logo.png';
// import ButtonLink from './components/ButtonLink';
import Button from './components/Button';
import './menu.css'

function Menu() {
  return <nav className="Menu">
    <a href="/">
      <img className="logo" src={Logo} alt="Logotipo MykeFlix"/>
    </a>
    <Button as="a">
      Novo Vídeo
    </Button>
  </nav>;
}

export default Menu;
