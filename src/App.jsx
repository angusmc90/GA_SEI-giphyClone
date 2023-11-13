import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Favorite from './assets/components/Favorite'
import Result from './assets/components/Result'
import Search from './assets/components/Search'

function App() {
  // const [count, setCount] = useState(0)
  const [searchTerm, setSearchTerm] = useState("")
  // ^to store what the user is searching for and render results
  const [foundGifs, setFoundGifs] = useState([])
  // ^array of n-Gifs for the user to cycle through that they searched for
  const [numGifs, setNumGifs] = useState(0);
  // ^count of how many Gifs / reshuffles they have b4 forcing then to use a new search term
  const [savedFave, setSavedFave] = useState()
  // ^to store the urls of the gif the user selects as a fave
  // const [loading, setLoading] = useState(false)
  // ^feedback to user that the page is still rendering

  useEffect(() => {
    console.log('----USE EFFECT IS RUNNING')

    const api_key = 'jxA2kRYFuIc1S5ByCkSmZOXE8znZLOSt'
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${searchTerm}&limit=${numGifs}&offset=0&rating=r&lang=en&bundle=messaging_non_clips`

    async function getGifs() {
      try {
        console.log('WE ARE GETTING THE RESULTS')
        const response = await fetch(endpoint) // get response
        const body = await response.json(); // change response into JSON
        const gifBuffet = body.data // kesha saw us
        //console.dir(gifBuffet);
        setFoundGifs(gifBuffet);


        console.log('WE ARE UPDATING THE COUNTS SO WE CAN TELL USERS WHEN THEY HAVE SEEN ALL GIFS')

      } catch (err) {
        console.log(err)
        // setLoading(false)
      }
    }

    getGifs()

  }, [searchTerm])


  return (
    <>
      <h1>Giphy Clone</h1>
      <h2>Angus McCann</h2>
      <br/>
      <div>
        <Search setSearchTerm={setSearchTerm} setNumGifs={setNumGifs}/>
        <Result foundGifs={foundGifs} numGifs={numGifs} setSavedFave={setSavedFave}/>
      </div>


      {/* add favorite as a right-rail item with a border rather than verticle
      dont know how bit the originals are going to be but can set a determined width for the favorites gif */}
    
    
    </>
  )
}

export default App




// const body = (e){
//   for (let i = 0; i < 5; i++) {

//   }
// }