import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PortalInicial } from './pages/PortalInicial'

import { Error404 } from './pages/Error404'
import { Noticias } from './pages/Noticias'
import { CadatroNova } from './pages/CadatroNova'
import { Login } from './pages/Login'
import { SessaoJogadores } from './pages/SessaoJogadores'

export const AppRouter = () => {
  return (
    <div>
    <Routes>
    <Route path='/' element={<PortalInicial/>}/>
    <Route path='*' element={<Error404/>}/>
    <Route path='/noticias' element={<Noticias/>}/>
    <Route path='/cadastro' element={<CadatroNova/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/jogadores' element={<SessaoJogadores/>}/>

    </Routes>

    </div>
  )
}
