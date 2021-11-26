import Container from '../../components/Container/Container';
import Card from '../../components/Card/Card';
import './Store.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Store() {

  const [games, setGames] = useState([]);
  const [mounted, setMounted] = useState(false);

  const getData = async () => {
    await axios.get('/game/findMany')
    .then(response => {
      if(mounted) {
        setGames(response.data)
      }
    })
  
  }

  useEffect(() => {
    setMounted(true)
    getData()
  }, [mounted])

  return (
    <div className='store'>
      <div className='store__card'>
      <Container title='Store'>
      {
        games.map(game => (
          <Card 
            id={game.id}
            image={game.image}
            title={game.name}
            preco={game.price}
            key={game.id}
          />
        ))
      }
      </Container>
      <Card 

id='08014b08-6cbc-4c49-b5b9-1886fd44c2ac'
image='https://assets.nintendo.com/image/upload/f_auto,q_auto,w_960,h_540/Play%20Nintendo/Mario%20Party%20Superstars/posters/Switch_MPS_LaunchTRL_5994_AvailableNow_YouTube_H264_UPDATED'
title='Mario Party™ Superstars'
preco= '299'

/>
      </div>
    </div>
  )
}