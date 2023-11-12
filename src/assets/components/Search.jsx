import { useState } from 'react';

export default function Search(props){
    const [searchWord, setSearchWord] = useState('');

    function handleChange(e){
        setSearchWord(e.target.value)
        // console.log(searchWord)
    }

    function handleSubmit(e){
        e.preventDefault();
        props.setSearchTerm(searchWord)
        // console.log(searchWord)
    }


    return(
    <form onSubmit={handleSubmit}>
        <input type ="text" value={searchWord} onChange={handleChange} placeholder='Search'></input>
        <button>Search</button>
    </form>
    )
}