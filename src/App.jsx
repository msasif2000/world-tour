import './App.css'
import { useState } from 'react'
import Countries from './components/Countries/Countries'
import { useEffect } from 'react';
function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  }, [])
  return (
    <>
      <h1>Countries: {countries.length}</h1>
      <Countries></Countries>
    </>
  )
}

export default App
