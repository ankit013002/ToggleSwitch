import { useRef, useState } from "react";
import "./App.css";
import ToggleSwitch from "./components/ToggleSwitch";
import MenuSelection from "./components/MenuSelection";

function App() {
  // Toggle Switch
  const [isToggled, setIsToggled] = useState(false);

  // Menu selection
  const [options, setOptions] = useState(["a","b","a","b","a","b","a","b"])
  const [selectedItem, setSelectedItem] = useState(options[0])


  return (
    <>
      <div className="main-container">
        <ToggleSwitch isToggled={isToggled} setIsToggled={setIsToggled} />
        <div className="main-menu-selection-container">
          <MenuSelection selectedItem={selectedItem} setSelectedItem={setSelectedItem} options={options}/>
        </div>
      </div>
    </>
  );
}

export default App;
