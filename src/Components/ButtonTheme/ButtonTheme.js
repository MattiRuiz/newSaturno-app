import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { FaRegMoon, FaSun } from "react-icons/fa";
import ThemeContext from "../../Contexts/ThemeContext/ThemeContext";

const ButtonTheme = () => {
  const { theme, handleTheme } = useContext(ThemeContext);

  return (
    <div>
      <Button
        onClick={handleTheme}
        variant="primary"
        className="me-2"
        name="theme"
        id="light"
        value="light"
      >
        <FaSun className="me-0" />
      </Button>
      <Button
        onClick={handleTheme}
        variant="secondary"
        name="theme"
        id="dark"
        value="dark"
      >
        <FaRegMoon className="me-0" />
      </Button>
    </div>
  );
};

export default ButtonTheme;
