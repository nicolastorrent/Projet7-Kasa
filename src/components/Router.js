import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home';
import About from '../pages/About';
import Fiche from '../pages/lodging';
import Error from '../pages/Error';
import '../css/styles.css'

export default function Router() {
    return (
        // j'englobe mes mes different routes <Route>
        <Routes>
            {/* <Route> path je donne le nom du chemin dans lequel je veux aller
            element = page qui sera afficher en fonction du chemin*/}
            <Route path="/" element={<Home />} />
            <Route path="/A-Propos" element={<About />} />
            <Route path="/Fiche-Logement/:id" element={<Fiche />} />
            <Route path="*" element={<Error />} />
        </Routes>
    )
}
