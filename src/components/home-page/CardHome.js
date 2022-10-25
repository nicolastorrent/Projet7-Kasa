import React from 'react'
import { Link } from 'react-router-dom';

export default function card(logement) {

  return (
    // lien vers la page du logemnt add dans url l'id du logement 
    <Link to={`/Fiche-Logement/${logement.id}`} className='card'>
      <img src={logement.cover} alt={logement.title} />
      <p>{logement.title}</p>
    </Link>
  )
}
