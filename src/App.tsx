import { Application } from "./Componnets/Application/Application";
import Application2 from "./Componnets/Application2/Application2";
import Greet from "./Componnets/FirstTest/Greet";
import Button from "./Componnets/MuiButton/Button";
import Skills from "./Componnets/Skills/Skills";
import "./App.css";
import Counter from "./Componnets/Counter/Counter";
import { AppProviders } from "./Providers/app-provider";
import { MuiMode } from "./Componnets/mui/mui-mode";

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
  /> */}
      {/* <Application2 /> */}
      {/* <Application />
      <Skills skills={skillArray} status={true} /> */}

      {/* <Counter/> */}
      <AppProviders>
        <div className="app">
          <MuiMode />
        </div>
      </AppProviders>
    </div>
  );
}

export default App;
