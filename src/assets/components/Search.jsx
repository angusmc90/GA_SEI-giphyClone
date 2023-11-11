import { useState } from 'react';

export default function Search(props){
    const [searchWord, setSearchWord] = useState('');

    function handleChange(e){
        setSearchWord(e.target.vslue)
    }

    function handleSubmit(e){
        e.preventDefault();
        props.setSearchTerm(searchWord)
        console.log('ERROR TESTING')
    }


    return(
    <form onSubmit={handleSubmit}>
        <input type ="text" value={searchWord} onChange={handleChange}></input>
        <button>Search</button>
    </form>
    )
}