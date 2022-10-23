import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MagicClick from './components/MagicClick.jsx';
import Counter from './components/Counter.jsx';

function App() {
  const [count, setCount] = useState(0)
  const [magic, setMagic] = useState([])

  const updateMagic = () => {
    setMagic(arr => [...arr, `${arr.length}`]);
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          +
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          -
        </button>
        <MagicClick updateMagic={updateMagic}></MagicClick>
        <div>{magic.map(e =>
          <div key={e}>{e}</div>
        )}
        </div>
      </div>
      <div>
        <Counter counter={count} />
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}



export default App
