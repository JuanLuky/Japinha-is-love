import './styles/global.css'
import Amora from './image/japa.png';
import { Loading } from './loading/Loading';
import { useState } from 'react';
import { useEffect } from 'react';

export function App() {
  const [showLoading, setShowLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false)
    }, 3500);
  }, []);


  return (
    <>
    {showLoading === true ? <Loading/> : (
      <div className='container'>
      <div className='container-img'>
        <img src={Amora}/>
      </div>
      <strong>Japinha ❤️</strong>

      <div>
        <h3> Lista das coisas que ela não gosta </h3>
        <ul>
          <li>Filmes</li>
          <li>Tatuagens</li>
          <li>Brincos</li>
          <li>Futebol</li>
          <li>Uno</li>
        </ul>
      </div>

      <a href="https://www.instagram.com/jamilipinto_/">Siga-me</a>
    </div>
    )}
    </>
    
  )
}