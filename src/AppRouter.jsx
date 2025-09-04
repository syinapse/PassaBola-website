import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PortalInicial } from './pages/PortalInicial'
import Noticias from './pages/Noticias'

export const AppRouter = () => {
  return (
    <div>
    <Routes>
    <Route path='/' element={<PortalInicial/>}/>
    <Route path='/noticias' element={<Noticias/>}/>

    </Routes>

    </div>
  )
}
