import logo from "./logo.svg";
import "./App.css";
import News from "./Component.js/News";
import Navi from "./Component.js/Navi";
function App() {
  return (
    <div style={{ backgroundColor: "azure" }} className="App">
      <Navi />
      <News />
    </div>
  );
}

export default App;
