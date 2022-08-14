import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Menu from "./components/layout/Menu";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About.jsx";
import ContactPage from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
