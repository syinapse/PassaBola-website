import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PortalInicial } from './pages/PortalInicial'
import Noticias from './pages/Noticias'
import { Error404 } from './pages/Error404'

export const AppRouter = () => {
  return (
    <div>
    <Routes>
    <Route path='/' element={<PortalInicial/>}/>
    <Route path='/noticias' element={<Noticias/>}/>
    <Route path='*' element={<Error404/>}/>

    </Routes>

    </div>
  )
}
