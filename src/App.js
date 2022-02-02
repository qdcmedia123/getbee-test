import { Routes, Route } from "react-router-dom";
import "./scss/main.scss";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
