// store object with 5 results at the app level
// have a variable here for an object that keeps:
// currently presented gif
// number of reshuffles

// store the URLz, nothing else.
// IDs are helpful for other APIs down the road, but need to minimize API calls due to the number of calls/day


import React, { useState, useEffect } from 'react';

export default function Result(props) {
    const [searchesLeft, setSearchesLeft] = useState(props.numGifs);
    const gifArray = props.foundGifs;
    console.log(props.foundGifts + " GIF ARRAY GIF ARRAY GIF ARRAY")
    const [gifObj, setGifObj] = useState({});
    const [imgURL, setImgURL] = useState('');

    //show a new image each time the searchesLeft updates
    //because searches left witll be equal to the length
    //data array pulled from giphy, so that can we used 
    //as a faux-shuffler through gifts provided
    useEffect(() => {
        console.log('USE EFFECT IS RUNNING')

        async function getGif(){
            const pos = searchesLeft - 1;
            // using pos to pull a gif from a particular POSITION
            // in the gifArray
            const singleObj = gifArray[pos];
            console.log('CONSOLE LOG SINGLEOBJ---'+singleObj)
            setGifObj(singleObj);
            const imgSrc = singleObj.images.original.url;
            // await didnt seem to work here?
            setImgURL(imgSrc);
        }

        getGif()

    }, [searchesLeft, gifArray])


    function handleShuffle() {
        //we only rendered 5 gifs and want to let the user know they gave run out of results when they shuffled endlessly
        let count = --searchesLeft;
        (count === 0) ? setSearchesLeft(5) : setSearchesLeft(count)
    }

    function handleSave() {
        console.log('results comp use-efect is engaged')
    }

    return(
        <div>
            <div>
                <br/> {/* To keep the buttons on one line */}
                <button onClick={handleShuffle}>Shuffle</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={handleSave}>Make Favorite</button>
                <br />
            </div>
            <img id={gifObj.id} src={imgURL}/>            
        </div>
    )

}