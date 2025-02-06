"use client"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Seção Início */}
      <section id="inicio" className="relative h-screen bg-gradient-to-br from-green-800 via-green-600 to-yellow-500">
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

      {/* Seção Sobre */}
      <section id="sobre" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-green-800">Sobre Nós</h2>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1">
              <p className="text-xl mb-4">
                A Fazendas Premium é especializada na comercialização de ativos rurais e estruturação de negócios em
                todo o Brasil.
              </p>
              <p className="text-xl">
                Somos uma consultoria especializada na compra, venda, avaliação e estruturação de negócios envolvendo
                ativos rurais.
              </p>
            </div>
            <div className="flex-1">
              <img
                src="/imagens/sol.jpg?height=400&width=600"
                alt="Campo ao pôr do sol"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Seção Serviços */}
      <section className="py-20 bg-green-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-yellow-300">NOSSOS</span> SERVIÇOS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center mx-auto max-w-4xl">
            <div className="bg-white rounded-lg overflow-hidden text-green-800">
              <img
                src="/imagens/Negocios.jpeg"
                alt="Negócios"
                width="300"
                height="400"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">Venda De Propriedades</h3>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden text-green-800">
              <img
                src="/imagens/avaliar.webp"
                alt="Avaliação"
                width="300"
                height="400"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">Avaliação De Propriedades</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Contato */}
      <section id="contato" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-green-800">Entre em Contato</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-4">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
                  Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows="4"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

