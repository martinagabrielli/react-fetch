import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [catFact, setCatFact] = useState('');
  useEffect(()=> {
    fetch("https://catfact.ninja/fact").then(res => res.json()).then((data) => setCatFact(data.fact))
  }, [])
  return (
    <>
      <p>{catFact}</p>
    </>
  )
}

export default App
