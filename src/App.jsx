import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import TaskZen from "./pages/taskZen/tasZen";
import Eots from "./pages/eots/eots";
import Cineza from "./pages/cineza/cineza";

import ScrollToTop from "./components/scroll/scroll";

export default function App() {
  return (
    <div className="bg-black h-full w-full">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/taskZen" element={<TaskZen />} />
          <Route path="/eye-on-the-sky" element={<Eots />} />
          <Route path="/cineza" element={<Cineza />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
