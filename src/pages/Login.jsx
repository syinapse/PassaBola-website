import React, { useState } from 'react'
import { Header3 } from '../components/Header3'
import logoGoogle from '../assets/logos/googleLogo.svg'
import videoBg from '../assets/banners/videoBanner.mp4'

import email from '../assets/icons/emailBlack.svg'
import eyesIcon from '../assets/icons/eyesIcon.svg'
import passwordIcon from '../assets/icons/passwordIcon.svg'
export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
    
  const users = [
    { username: "leonardokina18@gmail.com", password: "1234" },
    { username: "mariaplays@gmail.com", password: "abcd" }
  ]
  
 const handleLogin = () => {
    const user = users.find(
      (u) => u.username === username && u.password === password
    )

    if (user) {
      setMessage("Login bem-sucedido! 🎉");
    } else {
      setMessage("Usuário ou senha incorretos!");
    }
  }

  return (
    <div className='h-screen overflow-hidden'>
         <Header3/>
    <div className='min-h-screen flex md:flex-row'>
          <div className="w-1/2 bg-white flex items-center justify-center">
        {/*lado esqurdo da tela de ligin*/}
        <video
    src={videoBg}
    autoPlay
    loop
    muted
     className="w-full h-full object-cover hidden md:block"
  />
      </div>


       <div className='w-full md:w-1/2 flex flex-col items-center justify-start pt-8 md:pt-20 gap-8 min-h-screen bg-background'>
              {/*lado direito da tela de ligin*/}
        <div className='flex flex-col items-start ml-8 md:ml-20 lg:ml-40 px-8 w-full gap-3'>
              <h2 className='text-4xl font-quando'>Login <span className='text-text-accent font-oswald text-3xl'>PASSA A BOLA</span></h2>
              <button className='bg-white p-2 rounded-2xl border-1 flex gap-1 border-gray-300 font-semibold cursor-pointer'><img src={logoGoogle} className="w-6 h-6 object-contain"  alt="google" /> Entre com Google</button>
          <hr className="border-t border-gray-400 w-2xl my-4" />
            </div>
<div className="flex flex-col gap-4 w-full max-w-md font-medium">
  <div className="flex flex-col">
    <p className="mb-1">Email</p>
    <div className="flex items-center border-2 border-secondary-2 rounded gap-2 px-2">
      <img src={email} className='w-5 h-5 object-contain' alt='email'/>
      <input
        type="text"
        placeholder="exemplo@email.com"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="flex-1 outline-none p-2 border-none " 
      />
    </div>
  </div>

  <div className="flex flex-col">
    <p className="mb-1">Senha</p>
    <div className="flex items-center border-2 border-secondary-2  rounded gap-2 px-2">
           <img src={passwordIcon} className='w-6 h-5 object-contain' alt='passwordIcon'/>
      <input
        type="password"
        placeholder="minhasenha1234"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="flex-1 outline-none p-2"
      />
          <img src={eyesIcon} className='w-6 h-6 object-contain' alt='eyesIcon'/>
    </div>
  </div>
  <p className='ml-auto text-gray-400 font-medium italic'>Esqueci minha senha...</p>
</div>
    <div className='flex flex-col gap-5'>
        <button className='bg-primary text-white font-semibold px-18 py-4 rounded-xl shadow-md text-xl' 
        onClick={handleLogin}>ACESSAR</button>
        <p className='font-medium'>Não possuí uma conta? <span className='text-primary underline'>Crie Agora!</span></p>
        </div>
          {message && (
          <p
            className={`text-center ${
              message.includes("bem-sucedido") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
        </div>
    </div>
    </div>
  )
}
