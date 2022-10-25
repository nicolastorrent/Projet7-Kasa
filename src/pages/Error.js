import React from 'react';
import { Link } from 'react-router-dom';


export default function Error() {
    return (
        <section className='error'>
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <Link to='/' className='error-link'><p>Retourner sur la page d’accueil</p></Link>

        </section>
    )
}
