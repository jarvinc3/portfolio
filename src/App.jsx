import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h2>Hola, soy:</h2>
      </div>
      <h1>Jarvin Collado</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Toca {count}
        </button>
        <p>
          Desarrollador web full-stack. Apasionado por aprender.
        </p>
      </div>
      <div className="read-the-docs">
        <a href="#">
        <button>
            Descargar CV
        </button>
        </a>
        <a href="#">
        <button>
            Contactame
        </button>
        </a>
      </div>
    </>
  )
}

export default App
