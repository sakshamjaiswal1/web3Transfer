import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <ToastContainer theme="dark" autoClose={1000} />
    </div>
  );
}

export default App;
