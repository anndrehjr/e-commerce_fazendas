import React from 'react';
import { Link } from 'react-router-dom';

const FazendaCard = ({ fazenda }) => {
  return (
    <Link to={`/fazenda/${fazenda.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <img src={fazenda.imagemPrincipal} alt={fazenda.nome} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{fazenda.nome}</h2>
          <p className="text-gray-600 mb-2">{fazenda.localizacao}</p>
          <p className="text-green-600 font-bold">R$ {fazenda.preco.toLocaleString()}</p>
        </div>
      </div>
    </Link>
  );
};

export default FazendaCard;

