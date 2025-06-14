import { useState } from 'react';
import '../styles/Main.scss'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

function Main() {
    const [count, setCount] = useState(0);

    return(
        <>
<div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Sara + Montse</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 5)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Visitanos para saber más 
      </p>
      <input type="text" placeholder='Pon aquí tu nombre' />
    </>
    )
}
export default Main; 