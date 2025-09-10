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
    <div className='min-h-screen flex'>
          <div className="w-1/2 bg-white flex items-center justify-center">
        {/*lado esqurdo da tela de ligin*/}
        <h1 className="text-3xl font-bold">Logo / Imagem</h1>
      </div>
        <div className='w-1/2 flex flex-col items-center justify-center bg-gray-100'>
              {/*lado direito da tela de ligin*/}
        <input type="text"
        placeholder='email'
        value={username}
        onChange={(e) => setUsername(e.target.value)} />
          <input type="password"
        placeholder='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)} />
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
