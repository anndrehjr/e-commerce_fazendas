import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-green-800 via-green-600 to-yellow-500">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Cultivando Negócios,
            <br />
            <span className="text-yellow-300">Semeando Confiança.</span>
          </h1>
          <Link
            to="/catalogo"
            className="inline-block mt-8 px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-green-800 font-bold text-xl rounded-full transition-colors duration-300 transform hover:scale-105"
          >
            Ver Catálogo de Fazendas
          </Link>
        </div>
      </section>

      {/* Descrição da empresa */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-xl text-center text-gray-700">
            A xxxxx é especializada na comercialização de ativos rurais e estruturação de negócios em todo o Brasil.
          </p>
        </div>
      </section>

      {/* Quem Somos Section */}
      <section className="py-20 bg-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-yellow-300">SOBRE</span>
                <br />
                QUEM SOMOS
              </h2>
              <p className="mb-4">
               XXXXXXX é especializada na comercialização de ativos rurais e estruturação de negócios em todo o Brasil.
              </p>
              <p>
                Somos uma consultoria especializada na compra, venda, avaliação e estruturação de negócios envolvendo ativos rurais. 
              </p>
            </div>
            <div className="flex-1">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Campo ao pôr do sol"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>



      {/* Serviços Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-800 mb-12">
            <span className="text-yellow-500">NOSSOS</span>
            <br />
            SERVIÇOS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="M&A"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-green-800">Fusões e Aquisições (M&A)</h3>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Banco de Terras"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-green-800">Banco de Terras</h3>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Desenvolvimento"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-green-800">Desenvolvimento de Projetos</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">144</div>
              <div className="text-xl">mil hectares</div>
              <div className="text-sm text-yellow-300">distribuídos em 159 fazendas agenciadas no Brasil</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">7.719</div>
              <div className="text-xl">bilhões de reais</div>
              <div className="text-sm text-yellow-300">destinados a aquisição de 551.800 hectares</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">58</div>
              <div className="text-xl">mil hectares</div>
              <div className="text-sm text-yellow-300">em prospecção pelo nosso Banco de Terras</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

