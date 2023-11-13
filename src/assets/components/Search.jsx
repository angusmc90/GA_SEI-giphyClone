import React, { useState } from 'react'

export default function Search(props) {
    const [searchWord, setSearchWord] = useState('');

    function handleChange(e) {
        setSearchWord(e.target.value)
        // console.log(searchWord)
    }

    function handleSubmit(e) {
        try {
            e.preventDefault();
            props.setNumGifs(5); // to set the numer of gif counts
            props.setSearchTerm(e.target.value);
            // console.log(searchWord)
        } catch (err) {
            consol.log(err)
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={searchWord} onChange={handleChange} placeholder='Search'></input>
            <button>Search</button>
        </form>
    )
}