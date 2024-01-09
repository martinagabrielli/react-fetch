import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [catFact, setCatFact] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const getCatFact = () => {
    setIsLoading(true)
    fetch("https://catfact.ninja/fact")
    .then(res => res.json())
    .then((data) =>  {
      setCatFact(data.fact)
      setIsLoading(false)
    })
    .catch(() => {
      setIsLoading(true)
    })
  }

  useEffect(()=> {
    getCatFact()
  }, [])

  return (
    <>
      <button onClick={getCatFact} disabled={isLoading}>Get cat fact</button>
      {isLoading ? <p>Loding...</p> : <p>{catFact}</p>}
    </>
  )
}

export default App
