import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import FazendaDetalhes from './pages/FazendaDetalhes';
import Catalogo from './pages/Catalogo';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/fazenda/:id" element={<FazendaDetalhes />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

