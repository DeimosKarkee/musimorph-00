import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AirTools from "./pages/AirTools";
import SoundObjects from "./pages/SoundObjects";
import SoundTime from "./pages/SoundTime";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/airtools"} element={<AirTools />} />
        <Route path={"/soundobjects"} element={<SoundObjects />} />
        <Route path={"/soundtime"} element={<SoundTime />} />
      </Routes>
    </Router>
  );
}

export default App;
