import React from "react";

const Header = ({ handleToggleDarkMode,mode }) => {
  return (
    <>
      <div className="header">
        <h1>Notes</h1>
        <button
          className={`${mode && "save-dark"} ${!mode && "save"}`}
          onClick={() =>
            handleToggleDarkMode((previousState) => !previousState)
          }
        >
          Toggle Mode
        </button>
      </div>
    </>
  );
};

export default Header;
