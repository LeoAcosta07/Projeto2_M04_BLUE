import './Navbar.css';
import logo from './logo.png';
import { FaRegUser, FaUserPlus } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';
export default function Navbar() {
  return (

    <div className='navbar'>

      <div className='navbar__direita'>
        <a className='navbar__logo' href='/'>
          <img className='navbar__image' src={logo} alt='Epic Games'></img>
        </a>
        <div className='navbar__links'>
          <ul className='navbar__links__list'>
            <li>
              <a className='items' href='/store'>
                <span className='text'>STORE</span>
              </a>
            </li>
            <li>
              <a className='items' href='/wishlist'>
                <span className='text'>JOGOS DESEJADOS</span>
              </a>
            </li>
            <li>
              <a className='items' href='https://www.epicgames.com/site/pt-BR/epic-games-store-faq'>
                <span className='text'>PREGUNTAS FREQUENTES</span>
              </a>
            </li>
            <li>
              <a className='items' href='https://www.epicgames.com/help/pt-BR/'>
                <span className='text'>AJUDA</span>
              </a>
            </li>
            <li>
              <a className='items' href='https://www.unrealengine.com/en-US/'>
                <span className='text'>UNREAL ENGINE</span>
              </a>
            </li>
          </ul>
          </div>
        </div>

        <div className='navbar__esquerda'>
        <div className='navbar__links'>
          <ul className='navbar__links__list'>
          <li>
              <a className='items' href='/register'>
                <FaUserPlus />
                <span className='text'>CRIAR</span>
              </a>
            </li>
            <li>
              <a className='items' href='/login'>
                <FiLogIn />
                <span className='text'>LOGIN</span>
              </a>
            </li>
            <li>
              <a className='items' href='/profile'>
                <FaRegUser />
                <span className='text'>PERFIL</span>
              </a>
            </li>
          </ul>
          </div>
        </div>


    </div>
  )
}