import React from 'react'
import { useState } from 'react'
import vectorRight from '../img/Vector_right.png'
import vectorLeft from '../img/Vector_left.png'


export default function Slider(slides) {
  // const contenant current 1er val et setCurrent qui va modifier
  const [current, setCurrent] = useState(0);// useStale initialization a 0 pour 1er image 
  const length = slides.pictures.length;

// si la valeur est === a la dernier image alors retour 1er image sinon +1
  const next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  };
// si est === a la 1er image alors va a la derniere sinon -1 
  const previous = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className='carousel'>
      {/* "length > 1"   si il y a plus de 1 image alors affiche */}
      {length > 1 && (<div onClick={previous}><img src={vectorLeft} alt='flèche vers la gauche' className="carousel-btn-left" /></div>)}
      {length > 1 && (<div onClick={next}><img src={vectorRight} alt='flèche vers la droite' className="carousel-btn-right" /></div>)}

      {slides.pictures.map((image, index) => {
        return (
          <div key={index}>
            {/* affiche l'image de la liste avec l’index de l'élément en cour  */}
            {index === current && (<img src={image} alt="Exemple du logement" className='carousel-img' />)}


          </div>
        )
      })}
    </div>
  )
}









