import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PortalInicial } from './pages/PortalInicial'



import { Error404 } from './pages/Error404'
import { Noticias } from './pages/Noticias'
import { CadatroNova } from './pages/CadatroNova'
import { Login } from './pages/Login'
import { SessaoJogadores } from './pages/SessaoJogadores'
import { SessaoClubes } from './pages/SessaoClubes'
import { MapaQuadras } from './pages/MapaQuadras'


import { Loja } from './pages/Loja'
import { PassaABola } from './pages/PassaABola'
import CadastroUsuario from './pages/CadastroUsuario'
import CadastroClube from './pages/CadastroClube'
import NoticiasComponent from './api/NoticiasComponent '



export const AppRouter = () => {
  return (
    <div>
    <Routes>
    <Route path='/' element={<PassaABola/>}/>
    <Route path='*' element={<Error404/>}/>
    <Route path='/noticias' element={<PortalInicial/>}/>
    <Route path='/saibamais' element={<Noticias/>}/>
    <Route path='/cadastro' element={<CadatroNova/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/jogadores' element={<SessaoJogadores/>}/>
    <Route path='/clubes' element={<SessaoClubes/>}/>
    <Route path='/mapaquadras' element={<MapaQuadras/>}/>
    <Route path='/loja' element={<Loja/>}/>
    <Route path='/cadastro-usuario' element={<CadastroUsuario/>}/>
    <Route path='/cadastro-clube' element={<CadastroClube/>}/>
    <Route path='/teste' element={<NoticiasComponent/>}/>



    </Routes>

    </div>
  )
}
