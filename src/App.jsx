import './styles/global.css'
import Amora from './image/casados.png';
import { Loading } from './loading/Loading';
import { useRef, useState, useEffect } from 'react';

export function App() {
  const [showLoading, setShowLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false)
    }, 2000);
  }, []);


  const buttomRef = useRef();
  
  function handleNotButtom() {
    const numberAleatory = Math.floor(Math.random() * 750) + 1;
    const numberAleatory2 = Math.floor(Math.random() * 280) + 1;
    buttomRef.current.style = `left: ${numberAleatory2}px; top: ${numberAleatory}px`;
   }
 
  return (
    <>
    {showLoading === true ? <Loading/> : (
      <>
        <div className='container'>
      <div className='container-img'>
        <img src={Amora}/>
      </div>

      <strong>Quer namorar comigo?</strong>

        </div>
        <button onClick={() => alert("Você agora namora com Juan ❤")}>SIM</button>
        <button ref={buttomRef} className='notDisable' onClick={handleNotButtom}>NÃO</button>
      </>
      
    )}
    </>
    
  )
}
