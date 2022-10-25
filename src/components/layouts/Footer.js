import React from 'react'
import { Link } from 'react-router-dom';
import logoFooter from '../../img/logo_footer.png'

export default function Footer() {
  return (
    <footer>
      <div>
        <Link to='/'>
          <img src={logoFooter} alt='logo Kasa' />
        </Link>
        <h3>© 2020 Kasa. All rights reserved</h3>
      </div>
    </footer>
  )
}
