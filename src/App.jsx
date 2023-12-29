import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Loading from '../lib/Loading'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Loading color="primary.main" width="200px" />
    </>
  )
}

export default App
