import React from 'react'
import { Link } from 'react-router-dom';
import logoHeader from "../../img/LOGO.png";

export default function Header() {
  return (
    <header className='kasa-header'>
      <div>
          <img src={logoHeader} alt="logo Kasa" />
      </div>
      <nav className='nav-bar'>
        <ul>
          <li><Link to='/' className='nav-bar-link'>Accueil</Link></li>
          <li><Link to='/A-Propos' className='nav-bar-link'>A Propos</Link></li>
        </ul>
      </nav>

    </header>
  )
}
