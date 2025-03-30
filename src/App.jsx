import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import recipeCode from './components/recipeCode'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Main/>
    </>
  )
}

export default App
