import React from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Header = ({ handleToggleDarkMode, mode }) => {
  return (
    <>
      <div className="header">
        <h1>Notes</h1>
        {mode && (
          <div onClick={() => handleToggleDarkMode((value) => !value)}>
            <MdLightMode
              size="1.3em"
              style={{ color: "white", cursor: "pointer" }}
            />
          </div>
        )}
        {!mode && (
          <div onClick={() => handleToggleDarkMode((value) => !value)}>
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
