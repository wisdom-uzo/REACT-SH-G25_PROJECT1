import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/About.js";
import Contact from "./components/Contact";
import Product from "./components/Product";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="products" element={<Product />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
