import './Login.css';
import { useState } from 'react';
import { SiEpicgames } from 'react-icons/si'
import axios from 'axios';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    const login = {
      email: email,
      password: password
    }

    axios.post('/auth/login', login)
    .then(response => {
      const token = response.data.token;
      localStorage.setItem('token', token)
    })
  }

  return (
    <div className='login'>
      <h2 className='login-title'>Conta Epic Games</h2>
      <div className='logo__epic'>
        <SiEpicgames />
        </div>
      <div className='login-container'>
        
        <form className='login-form' onSubmit={handleSubmit}>

          <input type='text' placeholder='Endereço de e-mail' required
            onChange={event => setEmail(event.target.value)}
          />

          <input type='password' placeholder='Senha' 
            onChange={event => setPassword(event.target.value)}
          />

          <div className='login-ok'>
            <a href='!#'>
              <span>Esqueceu sua senha?</span>
            </a>
            <input type='submit' value='Fazer login' />
          </div>
        </form>
        <div className='login-create'>
          <span>Ainda não possui uma conta?</span>
          <a className='btn-create' href='/register'>Criar conta em Epic Games</a>
        </div>
      </div>
    </div>
  )
}