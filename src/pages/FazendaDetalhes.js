import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const fazendasMock = [
  {
    id: 1,
    nome: "Fazenda Bela Vista",
    localizacao: "Ribeirão Preto, SP",
    preco: 5000000,
    imagemPrincipal: "/fazendas/1.jpg",
    descricao: "Uma bela fazenda com 500 hectares de terra fértil, ideal para cultivo de cana-de-açúcar e soja.",
    area: 500,
    infraestrutura: ["Casa sede", "Galpões", "Sistema de irrigação"],
    imagens: [
      "/fazendas/1.jpg",
      "/fazendas/2.jpeg",
      "/fazendas/3.jpeg",
      "/fazendas/4.jpg",
      "/fazendas/5.jpg"
    ],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  // Adicione mais fazendas aqui...
];

const FazendaDetalhes = () => {
  const { id } = useParams();
  const fazenda = fazendasMock.find(f => f.id === parseInt(id));

  const [imagemPrincipal, setImagemPrincipal] = useState(fazenda?.imagemPrincipal);

  if (!fazenda) {
    return <div>Fazenda não encontrada</div>;
  }

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/5511999999999?text=Olá, estou interessado na ${fazenda.nome}`, '_blank');
  };

  const trocarImagem = (novaImagem) => {
    setImagemPrincipal(novaImagem);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">{fazenda.nome}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          {/* Imagem Principal */}
          <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md mb-4">
            <img 
              src={imagemPrincipal || '/placeholder.svg'} 
              alt={fazenda.nome}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Galeria de Miniaturas */}
          <div className="grid grid-cols-4 gap-4">
            {fazenda.imagens.slice(0, 4).map((img, index) => (
              <div 
                key={index}
                className="w-full h-[75px] rounded-lg overflow-hidden shadow-md cursor-pointer"
                onClick={() => trocarImagem(img)}
              >
                <img 
                  src={img} 
                  alt={`${fazenda.nome} - ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xl mb-4">{fazenda.descricao}</p>
          <p className="text-2xl font-bold text-green-600 mb-4">R$ {fazenda.preco.toLocaleString()}</p>
          <p className="mb-2"><strong>Localização:</strong> {fazenda.localizacao}</p>
          <p className="mb-2"><strong>Área:</strong> {fazenda.area} hectares</p>
          <h3 className="text-xl font-bold mt-4 mb-2">Infraestrutura:</h3>
          <ul className="list-disc list-inside mb-4">
            {fazenda.infraestrutura.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <button
            onClick={handleWhatsAppClick}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            Falar com o corretor
          </button>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4">Vídeo de apresentação</h3>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src={fazenda.video}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default FazendaDetalhes;

