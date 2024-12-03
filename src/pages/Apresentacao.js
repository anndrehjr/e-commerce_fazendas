import React from 'react';
import { Link } from 'react-router-dom';

const Apresentacao = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-300">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="p-8">
            <img src="/logo.png" alt="Fazendas Premium Logo" className="w-64 mx-auto mb-8" />
            <h1 className="text-4xl font-bold text-center text-green-800 mb-6">Bem-vindo à Fazendas Premium</h1>
            <p className="text-xl text-gray-700 text-center mb-8">
              Somos especialistas em negócios rurais, oferecendo as melhores oportunidades em fazendas e propriedades rurais.
            </p>
            <div className="flex justify-center space-x-4">
              <Link to="/catalogo" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">
                Ver Catálogo
              </Link>
              <Link to="/contato" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">
                Fale Conosco
              </Link>
            </div>
          </div>
          <div className="bg-green-800 text-white p-8">
            <h2 className="text-2xl font-bold mb-4">Por que escolher a Fazendas Premium?</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Ampla seleção de propriedades rurais de alta qualidade</li>
              <li>Equipe de corretores especializados e experientes</li>
              <li>Suporte personalizado em todas as etapas da negociação</li>
              <li>Avaliações precisas e transparentes</li>
              <li>Rede de parceiros para facilitar seu investimento rural</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apresentacao;

