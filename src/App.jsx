import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [catFact, setCatFact] = useState('');

  const getCatFact = () => {
    fetch("https://catfact.ninja/fact").then(res => res.json()).then((data) => setCatFact(data.fact))
  }

  useEffect(()=> {
    getCatFact()
  }, [])
  
  return (
    <>
      <button onClick={getCatFact}>Get cat fact</button>
      <p>{catFact}</p>
    </>
  )
}

export default App
