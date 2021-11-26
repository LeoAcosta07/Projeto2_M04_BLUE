import Search from '../../components/Search/Search';
import Slider from '../../components/Slider/Slider';
import Container from '../../components/Container/Container';
import Card from '../../components/Card/Card';
import './Home.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home() {

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
    <div className='home'>
      <Search />
      <Slider 
        id='ad8db1c9-1e64-4532-bf58-820de7f60f35'
        classificationNumber='L'
        classificationText='Livre para qualquer idade'
      />
      <div className='home__card'>
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