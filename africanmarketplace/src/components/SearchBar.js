import React from 'react'
import {useState} from 'react'
import Commodities from './Commodities.json'


function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('')

    return(
        
        <div className = 'SearchBar'>
        <input
            type="text"
            id="searchBar"
            placeholder="Search..."
            onChange = {(event) => {
                setSearchTerm(event.target.value)
            }}
        />
        {Commodities.filter((val) => {
            if (searchTerm == '') {
                return val
            } else if (val.procedurecommodity.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
        }
    }).map((val, key) => {
        return (
            <div className = 'Product' key = {key}>
                <p> {val.procedurecommodity} </p>
                </div>
        )
    })}
        {/*<button type="submit">Submit</button>*/}
    </div>
    )
}

export default SearchBar
