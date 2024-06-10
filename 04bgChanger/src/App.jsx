import './App.css'
import { useState } from 'react'

function App() {

  const [color, setColor] = useState("white");

  return (
    <div style={{ backgroundColor: color, height: 500 }}>

      <button onClick={() => setColor("olive")} style={{ marginTop: 250 }}>Olive</button>
      <button onClick={() => setColor("black")} style={{ marginTop: 250 }}>Black</button>
      <button onClick={() => setColor("red")} style={{ marginTop: 250 }}>Red</button>
      <button onClick={() => setColor("blue")} style={{ marginTop: 250 }}>Blue</button>
      <button onClick={() => setColor("green")} style={{ marginTop: 250 }}>Green</button>
      <button onClick={() => setColor("pink")} style={{ marginTop: 250 }}>Pink</button>
    </div>
  )
}

export default App
