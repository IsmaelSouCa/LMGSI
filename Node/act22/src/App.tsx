import { useState } from 'react'
import './App.css'
import { WinesDashboard } from './components/winesDashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WinesDashboard />
    </>
  )
}

export default App
