import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-3xl mb-5'>Tailwind Test</h1>

      <Card userName="Manish" btnText="Click Me" />
      <Card userName="Virgat" />
      {/* btnText is not added in the 2nd card component. So a default text will be added. Check Card.jsx for more */}

    </>
  )
}

export default App
