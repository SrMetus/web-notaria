import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { Home } from "./views/home";
import { PageContact } from "./views/contact";
import { PageFormalities } from "./views/formalities";
import "../src/styles/app.css"


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<PageContact />} />
        <Route path="/tramites" element={<PageFormalities />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

