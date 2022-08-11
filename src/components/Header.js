import React, { useContext } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { ThemeContext } from "../App";

const Icon = () => {
  const { mode } = useContext(ThemeContext);
  return (
    <>
      {mode && (
        <MdLightMode
          size="1.3em"
          style={{ color: "white", cursor: "pointer" }}
        />
      )}
      {!mode && <MdDarkMode size="1.3em" style={{ cursor: "pointer" }} />}
    </>
  );
};

const ThemeIcon = () => {
  const { setMode } = useContext(ThemeContext);
  return (
    <div onClick={() => setMode((value) => !value)}>
      <Icon />
    </div>
  );
};

const Header = ({ handleToggleDarkMode, mode }) => {
  return (
    <>
      <div className="header">
        <h1>Notes</h1>
        <ThemeIcon />
      </div>
    </>
  );
};

export default Header;
