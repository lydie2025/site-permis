import Home from '../pages/home/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from '../pages/accueil/Accueil'
import Services from '../pages/services/Services'
import Contact from '../pages/contact/Contact'
import About from '../components/about/About';

export default function AppRoutes () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
