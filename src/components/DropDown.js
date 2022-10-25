import React from 'react'
import { useState } from 'react'
import vectorUp from '../img/Vector_up.png'
import vectorDown from '../img/Vector_down.png'


export default function DropDown(collapse) {
  // // tabl contenant current 1er val et setCurrent qui va modifier
  const [isClose, setIsClose] = useState(true)// useStale initialization a true pour colaps fermée
  return isClose ? (
    <div>
      {/* au click val passe a flase fait apparaître description  */}
      <button onClick={() => setIsClose(false)}>{collapse.name}<img src={vectorDown} alt="fleche vers le bas"></img></button>
    </div>
  ) : (
    <div >
      <button onClick={() => setIsClose(true)}>{collapse.name}<img src={vectorUp} alt="fleche vers le haut"></img></button>
      <div>{collapse.description}</div>
    </div>
  )
}























