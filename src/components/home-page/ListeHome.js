import React from 'react';
import logementListe from '../../data/logements'
import Card from './CardHome';


export default function ListeHome() {
    return (
        // .map ce qui va retourner pour chaque élément du tableau une Card pour le logement 
        <div className='liste-home'> 
            {logementListe.map((logement) => (
                <Card
                key={logement.id}
                title={logement.title}//prop valeur qui me serviront dans mon composant card
                cover={logement.cover}//prop valeur qui me serviront dans mon composant card
                id={logement.id}//prop valeur qui me serviront dans mon composant card
                />
                ))}
        </div>
    )
}