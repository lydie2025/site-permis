import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/home/Home'
import { Accueil } from '../pages/Accueil'
import { Services } from '../pages/Services'
import { Contact } from '../pages/Contact'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/accueil" element={<Accueil />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}
