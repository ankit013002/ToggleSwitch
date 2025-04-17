import { useState } from "react";
import "./App.css";
import ToggleSwitch from "./components/ToggleSwitch";

function App() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <>
      <div className="main-container">
        <ToggleSwitch isToggled={isToggled} setIsToggled={setIsToggled} />
      </div>
    </>
  );
}

export default App;
