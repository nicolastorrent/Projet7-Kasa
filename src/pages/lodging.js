import React from 'react'
import Slider from '../components/Slider'
import DropDown from '../components/DropDown'
import logementListe from '../data/logements'
import Error from '../pages/Error';
import starFull from '../img/star_full.png'
import starEmpty from '../img/star_empty.png'
import { useParams } from 'react-router-dom'


export default function Fiche() {
  // useParams() pour récupérer id du logement dans les paramettre 
  const { id } = useParams();
  console.log(id);
  // .find pour récupérer le logement qui a l’id qui est === a celui récupérer dans les paramettre 
  const found = logementListe.find((logement) => logement.id === id);
  if (!found) {
    return <Error />
  }
  console.log(found);
//tableau avec le nombre d'étoile max 
  const rang = [1, 2, 3, 4, 5]
  console.log(found.rating);

  return (
    <div>
      <section>
        <Slider pictures={found.pictures} />
      </section>


      <section >
        <div className='lodging'>
          <div className='lodging-location'>
            <h1>{found.title}</h1>
            <h2>{found.location}</h2>
            <ul className='lodging-tags'>
              {found.tags.map((tags, index) => (
                <li key={`${index}-${tags}`}>{tags}</li>
              ))}
            </ul>
          </div>

          <div className='account'>
            <div className='account-host'>
                <span className='account-host-name'>{found.host.name}</span>
                <img src={found.host.picture} alt={`Visage de ${found.host.name}`} className='account-host-img' />
              
            </div>
            <div className='account-star-bloc'>
            {/* grace a .map sur tabl rang affiche le nombre de star */}
            <div className='account-star'>{rang.map((rangElement) =>
              found.rating >= rangElement ? <span key={rangElement}> <img src={starFull} alt='starFull' className='account-host-star' /></span> : <span key={rangElement}><img src={starEmpty} alt='starEmpty' className='account-host-star' /></span>
            )}
            </div>
            </div>
          </div>
        </div>


        <div className='lodging-description-bloc'>

          <DropDown
            name='Description'
            description={<p>{found.description}</p>} />


          <DropDown
            name='Équipements'
            description={<ul>{found.equipments.map((equipments, index) => (
              <li key={`${index}-${equipments}`}>{equipments}</li>
            ))}</ul>} />

        </div>

      </section>
    </div>
  )
}
