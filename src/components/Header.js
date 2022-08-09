import React,{useContext} from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import {ThemeContext} from "../App";

const Header = ({ handleToggleDarkMode, mode }) => {
  const theme = useContext(ThemeContext);
  return (
    <>
      <div className="header">
        <h1>Notes</h1>
        {theme.mode && (
          <div onClick={() => theme.setMode((value) => !value)}>
            <MdLightMode
              size="1.3em"
              style={{ color: "white", cursor: "pointer" }}
            />
          </div>
        )}
        {!theme.mode && (
          <div onClick={() => theme.setMode((value) => !value)}>
            <MdDarkMode
              size="1.3em"
              style={{ cursor: "pointer" }}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
