import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import FazendaDetalhes from './pages/FazendaDetalhes';
import Catalogo from './pages/Catalogo';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <div className="flex flex-col min-h-screen bg-white">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalogo" element={<Catalogo />} />
              <Route path="/fazenda/:id" element={<FazendaDetalhes />} />
            </Routes>
          </main>
        </div>
      </Layout>
    </Router>
  );
}

export default App;
