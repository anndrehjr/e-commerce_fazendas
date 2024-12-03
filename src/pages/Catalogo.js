import React from 'react';
import FazendaCard from '../components/FazendaCard';

const fazendasMock = [
  { id: 1, nome: "Fazenda Bela Vista", localizacao: "Ribeirão Preto, SP", preco: 5000000, imagemPrincipal: "https://via.placeholder.com/400x300" },
  { id: 2, nome: "Rancho Dourado", localizacao: "Uberaba, MG", preco: 3500000, imagemPrincipal: "https://via.placeholder.com/400x300" },
  { id: 3, nome: "Sítio Esperança", localizacao: "Campinas, SP", preco: 2000000, imagemPrincipal: "https://via.placeholder.com/400x300" },
  { id: 4, nome: "Fazenda Horizonte", localizacao: "Goiânia, GO", preco: 7000000, imagemPrincipal: "https://via.placeholder.com/400x300" },
  { id: 5, nome: "Estância Feliz", localizacao: "Cuiabá, MT", preco: 4500000, imagemPrincipal: "https://via.placeholder.com/400x300" },
  { id: 6, nome: "Fazenda Primavera", localizacao: "Barretos, SP", preco: 6000000, imagemPrincipal: "https://via.placeholder.com/400x300" },
];

const Catalogo = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-800">Catálogo de Fazendas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {fazendasMock.map(fazenda => (
          <FazendaCard key={fazenda.id} fazenda={fazenda} />
        ))}
      </div>
    </div>
  );
};

export default Catalogo;

