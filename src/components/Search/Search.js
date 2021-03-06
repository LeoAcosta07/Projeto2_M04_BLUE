import './Search.css';
import { IoSearchOutline } from 'react-icons/io5';


export default function Search() {
  return (
    <div className='search'>

      <div className='procurar'>
        <form className='search-input'>
          <IoSearchOutline />
          <input className='type' type='text' placeholder='Pesquisar'></input>
          <input className='btn' type='submit' value='' />
        </form>
      </div>
      <div className='navbar__links'>
          <ul className='navbar__links__list'>
            <li>
              <a className='items' href='/store'>
                <span className='text'>Descobrir</span>
              </a>
            </li>
            <li>
              <a className='items' href='/store'>
                <span className='text'>Navegar</span>
              </a>
            </li>
            <li>
              <a className='items' href='store'>
                <span className='text'>Novidades</span>
              </a>
            </li>
          </ul>
        </div>
    </div>


  

  )
}

