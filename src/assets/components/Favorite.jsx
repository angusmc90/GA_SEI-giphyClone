import { useState } from 'react';

export default function Search(props) {
    const [searchesLeft, setSearchesLeft] = useState(props.searchCount);
    const gifArry = props.foundGifs;
    const [gifObj, setGifObj] = useState(gifArry[0]);

    function handleClick() {
        //we only rendered 5 gifs and want to let the user know they gave run out of results when they shuffled endlessly
        let count = searchesLeft--;
        count === -1 ? setSearchesLeft(5) : setSearchesLeft(count)
    }

    return (
        // <div>
        //     <img src="">
        // </div>
    )
}