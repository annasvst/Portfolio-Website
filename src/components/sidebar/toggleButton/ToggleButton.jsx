import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./ToggleButton.scss"

const ToggleButton = (props) => {
  const { setOpen } = props;

  const [menuBtn, setMenuBtn] = useState(false);

  const onClick = () => {
    setOpen((prev) => !prev);
    setMenuBtn((prev) => !prev);
  }

  return (
    <button onClick={onClick}>
      <div className={`hamburgerMenu ${menuBtn ? "hidden" : ""}`}>
        <MenuIcon />
      </div>
      <div className={`closeMenu ${!menuBtn ? "hidden" : ""}`}>
        <CloseIcon />
      </div>
    </button>
  );
};

export default ToggleButton;
