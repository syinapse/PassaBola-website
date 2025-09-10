import React, { useState } from 'react'
import { Header3 } from '../components/Header3'

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
    <div>
         <Header3/>
    <div className='min-h-screen flex  overflow-hidden'>
          <div className="w-1/2 bg-white flex items-center justify-center">
        {/*lado esqurdo da tela de ligin*/}
        <h1 className="text-3xl font-bold">Logo / Imagem</h1>
      </div>


        <div className='w-1/2 flex flex-col items-center justify-center gap-10 bg-background'>
              {/*lado direito da tela de ligin*/}
        <div className='flex flex-col items-start ml-20 w-full'>
              <h2>Login <span>PASSA A BOLA</span></h2>
              <button>Entre com Google</button>
            </div>
          <hr className="border-t border-gray-400 w-2xl my-4" />
<div className="flex flex-col gap-4 w-full max-w-md">
  <div className="flex flex-col">
    <p className="mb-1">Email</p>
    <div className="flex items-center border-2 border-secondary-2 rounded gap-2 px-2">
      <p>O</p>
      <input
        type="text"
        placeholder="exemplo@email.com"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="flex-1 outline-none p-2" 
      />
    </div>
  </div>

  <div className="flex flex-col">
    <p className="mb-1">Senha</p>
    <div className="flex items-center border-2 border-secondary-2 rounded gap-2 px-2">
      <p>O</p>
      <input
        type="password"
        placeholder="minhasenha1234"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="flex-1 outline-none p-2"
      />
      <p>O</p>
    </div>
  </div>
</div>

        <button onClick={handleLogin}>Clique</button>
          {message && (
          <p
            className={`mt-3 text-center ${
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
