import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Favorite from './assets/components/Favorite'
import Result from './assets/components/Result'
// import Search from './assets/components/Search'

function App() {
  // const [count, setCount] = useState(0)
  const [searchTerm, setSearchTerm] = useState()
  const [foundGifs, setFoundGifs] = useState({
    results:[],
    guesses: 5,
  })
  const [savedFave, setSavedFave] = useState()
  const [loading, setLoading] = useState(falsse)

  async function findGif(){
    try {
      //
    } catch (err){
      console.log(err)
      setLoading(false)
    }
  }

  return (
    <>
      <Search setSearchTerm={setSearchTerm}/>
      <Result />
      <Favorite />
    </>
  )
}

export default App
