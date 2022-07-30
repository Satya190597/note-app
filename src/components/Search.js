import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({handleSearchText,text}) => {
    return <>
        <div className="search">
            <MdSearch className="search-icon" size="1.3em" />
            <input type="text" value={text} placeholder="Type To Search ..." onChange={(event)=>handleSearchText(event.target.value)} />
        </div>
    </>
}

export default Search;