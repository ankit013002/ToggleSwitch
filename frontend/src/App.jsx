import { useRef, useState } from "react";
import "./App.css";
import ToggleSwitch from "./components/ToggleSwitch";
import MenuSelection from "./components/MenuSelection";
import TopNavBar from "./components/TopNavBar";

import { FaHome, FaUser, FaEnvelope, FaCog, FaSearch } from 'react-icons/fa';



function App() {
  // Toggle Switch
  const [isToggled, setIsToggled] = useState(false);

  // Menu selection
  const [options, setOptions] = useState(["a","b","a","b","a","b","a","b"])
  const [selectedItem, setSelectedItem] = useState(options[0])

  // Top Nav Bar
  const [navBarOpts, setNavBarOpts] = useState([
    {
      title: "Home",
      icon:  <FaHome/>
    },
    {
      title: "User",
      icon:  <FaUser/>
    },
    {
      title: "Envelope",
      icon:  <FaEnvelope/>
    },
    {
      title: "Settings",
      icon:  <FaCog/>
    },
    {
      title: "Search",
      icon:  <FaSearch/>
    },])
  const [selectedNavBarOpt, setSelectedNavBarOpt] = useState(navBarOpts[0])

  return (
    <>
      <div className="main-container">
        <ToggleSwitch isToggled={isToggled} setIsToggled={setIsToggled} />
        <div className="main-menu-selection-container">
          <MenuSelection selectedItem={selectedItem} setSelectedItem={setSelectedItem} options={options}/>
        </div>
        <div className="main-menu-selection-container">
          <TopNavBar options={navBarOpts} selectedOption={selectedNavBarOpt} setSelectedOption={setSelectedNavBarOpt}/>
        </div>
      </div>
    </>
  );
}

export default App;
