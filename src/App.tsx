import { Application } from "./Componnets/Application/Application";
import Application2 from "./Componnets/Application2/Application2";
import Greet from "./Componnets/FirstTest/Greet";
import Button from "./Componnets/MuiButton/Button";

function App() {
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
      <Application2 />
    </div>
  );
}

export default App;
