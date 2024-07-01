import "./App.css";
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header";
import Home from "./Pages/Home";
import LeetCode from "./Pages/LeetCode";
import Medium from "./Pages/Medium";
import Github from "./Pages/Github";
import About from "./Pages/About";
import Footer from "./components/Footer";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Projects from "./Pages/Projects";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="leetcode" element={<LeetCode />} />
        <Route path="medium" element={<Medium />} />
        <Route path="github" element={<Github/>} />
      </Routes> 
      <Footer />
    </div>
  );
}

export default App;
