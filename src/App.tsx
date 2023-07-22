import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
