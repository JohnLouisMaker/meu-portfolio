import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import TaskZen from "./pages/taskZen/tasZen"; // confere se o nome do arquivo é esse mesmo

export default function App() {
  return (
    <div className="bg-black h-full w-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/taskZen" element={<TaskZen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
