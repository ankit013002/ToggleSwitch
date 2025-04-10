import { useState } from "react";
import "./App.css";
import ToggleSwitch from "./components/ToggleSwitch";

function App() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <>
      <ToggleSwitch isToggled={isToggled} setIsToggled={setIsToggled} />
    </>
  );
}

export default App;
