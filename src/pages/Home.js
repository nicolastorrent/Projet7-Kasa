import React from 'react'
import ListeHome from '../components/home-page/ListeHome'
import bannerImg from '../img/IMG.png'

export default function Home() {
  return (
    <div>
      <section className='banner'>
        <img src={bannerImg} alt='bord de mer'></img>
        <h2>Chez vous, partout et ailleurs</h2>
      </section>
      <section className='liste'>
        <ListeHome />
      </section>
    </div>
  )
}
