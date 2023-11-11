import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Favorite from './assets/components/Favorite'
import Result from './assets/components/Result'
import Search from './assets/components/Search'

function App() {
  // const [count, setCount] = useState(0)
  const [searchTerm, setSearchTerm] = useState('') 
    // ^to store what the user is searching for and render results
  const [foundGifs, setFoundGifs] = useState([])
    // ^array of 5 gifs for the user to cycle through that they searched for
  const [searchCount, setSearchCount] = useState(5);
    // ^count of how many times they ahve reshuffled and forcing then to use a new search term
  const [savedFave, setSavedFave] = useState()
    // ^to store the urls of the gif the user selects as a fave
 // const [loading, setLoading] = useState(false)
    // ^feedback to user that the page is still rendering

  useEffect(() => {


    function testingSearchComp() {
      try {
        console.log('USE EFFECT IS RUNNING | >')
      } catch (err){
        console.log(err)
        // setLoading(false)
      }
    }

    testingSearchComp()

  }, [setSearchTerm])

  
  return (
    <>
      <h1>Giphy Clone</h1>
      <h2>Angus McCann</h2>
      <Search setSearchTerm={setSearchTerm}/>
      <Result />
      {/* ^foundGifs.[refireCount], setSavedFave as well */}
      <Favorite />
      {/* ^savedFave */}
    </>
  )
}

export default App
