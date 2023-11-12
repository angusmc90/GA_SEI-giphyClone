// store object with 5 results at the app level
// have a variable here for an object that keeps:
// currently presented gif
// number of reshuffles

// store the URLz, nothing else.
// IDs are helpful for other APIs down the road, but need to minimize API calls due to the number of calls/day


import React, { useState, useEffect } from 'react';

export default function Search(props) {
    const [searchesLeft, setSearchesLeft] = useState(props.searchCount);
    const gifArray = props.foundGifs;
    const [gifObj, setGifObj] = useState({});
    const [imgURL, setImgURL] = useState('');

    //show a new image each time the searchesLeft updates
    //because searches left witll be equal to the length
    //data array pulled from giphy, so that can we used 
    //as a faux-shuffler through gifts provided
    useEffect(() => {
        console.log('USE EFFECT IS RUNNING')

        const pos = searchesLeft;
        const singleObj = gifArray[pos]
        setGifObj(singleObj);
        const imgSrc = gifObj.images.original.url;
        setImgURL(imgSrc);

    }, [searchesLeft])


    function handleShuffle() {
        //we only rendered 5 gifs and want to let the user know they gave run out of results when they shuffled endlessly
        let count = searchesLeft--;
        count === -1 ? setSearchesLeft(5) : setSearchesLeft(count)
    }

    function handleSave() {
        console.log('results comp use-efect is engaged')


    }

    return(
        <div>
            <div> {/* To keep the buttons on one line */}
                <button on>Shuffle</button>
            </div>
            <img id={gifObj.id} src={imgURL}/>            
        </div>
    )

}