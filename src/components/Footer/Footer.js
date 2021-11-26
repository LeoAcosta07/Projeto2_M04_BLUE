import './Footer.css';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare} from 'react-icons/fa';
import { SiUnrealengine, SiEpicgames } from 'react-icons/si'


export default function Footer() {
  return (
    <div className='footer'>

      <div className='footer__sec1'>
        <div className='social'>
          <a href='https://www.facebook.com/epicgames'><FaFacebookSquare /></a>
          <a href='https://twitter.com/epicgames'><FaTwitterSquare /></a>
          <a href='https://www.youtube.com/epicgamesinc'><FaYoutubeSquare /></a>
        </div>
      </div>

      <div className='footer__sec2'>
        <div className='info'>
          <div className='info__means'>
              <div className='meansTitle'>
                <span>Recursos</span>
              </div>
              
              <div className='means'>
                <div className='column'>
                <a href=''>Apoie-um-Criador</a>
                <a href=''>Publicar na Epic Games</a>
                <a href=''>Carreiras</a>
                </div>
                <div className='column'>
                <a href=''>Empresa</a>
                <a href=''>Politica de Fanart</a>
                <a href=''>UX Research</a>
                </div>
                <div className='column'>
                <a href=''>EULA da Loja</a>
                <a href=''>Serviços On-line</a>
                <a href=''>Regras da Comunidade</a>
                </div>
            </div>
          </div>

          <div className='info__made__in'>
              <div className='made__inTitle'>
                <span>Feito pela Epic Games</span>
              </div>
              <div className='means'>
                
                <div className='column'>
                  <a href=''>Battle Breakers</a>
                  <a href=''>Fortnite</a>
                  <a href=''>Infinity Blade</a>
                  </div>
                  <div className='column'>
                  <a href=''>Robo Recall</a>
                  <a href=''>Shadow Complex</a>
                  </div>
                  <div className='column'>
                  <a href=''>Spyjinx</a>
                  <a href=''>Unreal Tournament</a>
                  </div>
                </div>
              
        </div>
        </div>
      </div>

      <div className='footer__sec3'>
        <div className='direitos'>
          <span>© 2021, Epic Games, Inc. Todos os direitos reservados. Epic, Epic Games, o logotipo da Epic Games,
             Fortnite, o logotipo do Fortnite, Unreal, Unreal Engine, o logotipo do Unreal Engine, Unreal Tournament
              e o logotipo do Unreal Tournament são marcas comerciais ou registradas da Epic Games, Inc. nos Estados Unidos da América
               e em outros lugares. Outras marcas e nomes de produtos são marcas registradas de seus respectivos donos.
                Transações para além dos EUA são feitas através da Epic Games International, S.à r.l. </span>
          <span>Nintendo of America Inc. | A sede está localizada em Redmond, Washington (EUA) | Assistência.</span>
        </div>
      </div>

      <div className='footer__sec4'>
        <div className='poli_left'>
          <a href='https://www.epicgames.com/site/pt-BR/tos'>Termos de Serviço</a>
          <a href='https://www.epicgames.com/site/pt-BR/privacypolicy'>Política de Privacidade</a>
          <a href='https://www.epicgames.com/site/pt-BR/store-refund-policy'>Política de Reembolso da Loja</a>
        </div>
        <div className='poli_rigth'>
          <a href='https://twitter.com/NintendoAmerica'><SiEpicgames /></a>
          <a href='https://www.youtube.com/nintendo'><SiUnrealengine /></a>
        </div>
      </div>

    </div>
  )
}