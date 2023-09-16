import { BrowserRouter as Router } from "react-router-dom";
import Content from "./components/content";
import Navbar from "./components/navbar";

function App() {
  return (
    <Router>
      <div className="h-[100svh] grid grid-rows-[10%,90%]">
        <Navbar />
        <Content />
      </div>
    </Router>
  );
}

export default App;
