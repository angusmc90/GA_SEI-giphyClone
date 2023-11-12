import { useState } from 'react';

export default function Search(props) {
    const [searchesLeft, setSearchesLeft] = useState(props.searchCount);
    const gifArry = props.foundGifs;
    const [gifObj, setGifObj] = useState(gifArry[0]);

    //show a new image each time the searchesLeft updates
    //because searches left witll be equal to the length
    //data array pulled from giphy, so that can we used 
    //as a faux-shuffler through gifts provided
    usefEffect(() => {

    }, [searchesLeft])


    function handleShuffle() {
        //we only rendered 5 gifs and want to let the user know they gave run out of results when they shuffled endlessly
        let count = searchesLeft--;
        count === -1 ? setSearchesLeft(5) : setSearchesLeft(count)
    }

    function handleSave(){
        //
    }

    // return (
    //     // <div>
    //     //     <img src={}>
    //             <button></button><button></button><button></button>
    //     // </div>
    // )
}