import React from 'react'
import bannerImg from '../img/banner_montagne.png'
import DropDown from '../components/DropDown'

export default function About() {
  return (
    <div>
      <section className='banner banner-about'>
        <img src={bannerImg} alt='Sommet de montagne enneigée'></img>
      </section>
      <section >
        <div className='about-list'>
          <DropDown
            name='Fiabilité'
            description={<p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>}
          />
          <DropDown
            name='Respect'
            description={<p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>}
          />
          <DropDown
            name='Service'
            description={<p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>}
          />
          <DropDown
            name='Sécurité'
            description={<p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>}
          />
        </div>
      </section>
    </div>
  )
}
