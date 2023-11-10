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
    // ^to store what the user is searching for and render results
  const [foundGifs, setFoundGifs] = useState([])
    // ^array of 5 gifs for the user to cycle through that they searched for
  const [refireCount, setRefireCount] = useState(5);
    // ^count of how many times they ahve reshuffled and forcing then to use a new search term
  const [savedFave, setSavedFave] = useState()
    // ^to store the urls of the gif the user selects as a fave
  const [loading, setLoading] = useState(falsse)
    // ^feedback to user that the page is still rendering

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
      <Search setSearchTerm={setSearchTerm} setRefireCount={setRefireCount}/>
      <Result />
      // ^foundGifs.[refireCount], setSavedFave as well
      <Favorite />
      // ^savedFave
    </>
  )
}

export default App
