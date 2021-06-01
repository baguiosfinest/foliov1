import Home from "./components/Home";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Home />
      </div>
    </BrowserRouter>
  );
}

export default App;
