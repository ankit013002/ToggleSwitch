import "./ToggleSwitch.css";
import { CiSun } from "react-icons/ci";
import { FaMoon, FaSun } from "react-icons/fa";

const ToggleSwitch = (props) => {
  return (
    <>
      <button
        className="toggle-switch-button-container"
        onClick={() => props.setIsToggled(!props.isToggled)}
      >
        <div
          className={`toggle-switch-container${
            props.isToggled
              ? " toggle-switch-container-night"
              : " toggle-switch-container-day"
          }`}
        >
          <div className="toggle-switch-background">
            <FaSun className="sun"></FaSun>
            <FaMoon className="moon"></FaMoon>
          </div>
          <div
            className={`toggle-switch-button${
              props.isToggled
                ? " toggle-switch-button-right"
                : " toggle-switch-button-left"
            }`}
          ></div>
        </div>
      </button>
    </>
  );
};

export default ToggleSwitch;
