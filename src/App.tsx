import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Header from "./Components/Header";
import FloatButtons from "./Components/FloatButtons";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/my-resume" element={<Resume />} />
      </Routes>
      <FloatButtons />
    </>
  );
}

export default App;
