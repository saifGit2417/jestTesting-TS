import { Application } from "./Componnets/Application/Application";
import Application2 from "./Componnets/Application2/Application2";
import Greet from "./Componnets/FirstTest/Greet";
import Button from "./Componnets/MuiButton/Button";
import Skills from "./Componnets/Skills/Skills";

function App() {
  const skillArray = ["html", "css", "js", "react"];

  return (
    <div className="App">
      {/* <Button
        buttonText={"i am console"}
        functionText={"console log saif"}
        typeOfAction={console.log}
      />
      <br />
      <Button
        buttonText={"i am alert"}
        functionText={"alert saif"}
        typeOfAction={alert}
      />
      <Application/> */}
      {/* <Application2 /> */}
      <Skills skills={skillArray} status={true} />
    </div>
  );
}

export default App;
