import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginUser from "./components/LoginUser";
import LoginLawyer from "./components/LoginLawyer";
import SignupUser from "./components/SignupUser";
import SignupLawyer from "./components/SignupLawyer";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/login/user" element={<LoginUser />} />
        <Route path="/login/lawyer" element={<LoginLawyer />} />
        <Route path="/signup/user" element={<SignupUser />} />
        <Route path="/signup/lawyer" element={<SignupLawyer />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
