import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PortalInicial } from './pages/PortalInicial'

import { Error404 } from './pages/Error404'
import { Noticias } from './pages/Noticias'

export const AppRouter = () => {
  return (
    <div>
    <Routes>
    <Route path='/' element={<PortalInicial/>}/>
    <Route path='*' element={<Error404/>}/>
    <Route path='/noticias' element={<Noticias/>}/>

    </Routes>

    </div>
  )
}
