import React,{useContext} from "react";
import { MdSearch } from "react-icons/md";
import {ThemeContext} from "../App";


const Search = ({handleSearchText,text,mode}) => {
    const theme = useContext(ThemeContext);
    return <>
        <div className={`${theme.mode && "search-dark"} ${!theme.mode && "search"}`}>
            <MdSearch className="search-icon" size="1.3em" />
            <input type="text" value={text} placeholder="Type To Search ..." onChange={(event)=>handleSearchText(event.target.value)} />
        </div>
    </>
}

export default Search;