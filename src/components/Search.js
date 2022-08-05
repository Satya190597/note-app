import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({handleSearchText,text,mode}) => {
    return <>
        <div className={`${mode && "search-dark"} ${!mode && "search"}`}>
            <MdSearch className="search-icon" size="1.3em" />
            <input type="text" value={text} placeholder="Type To Search ..." onChange={(event)=>handleSearchText(event.target.value)} />
        </div>
    </>
}

export default Search;