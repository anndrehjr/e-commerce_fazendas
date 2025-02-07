"use client"
import { Link } from "react-router-dom"
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"

// Componente reutilizável para os cards de serviço
const ServiceCard = ({ imageSrc, alt, title, description, buttonLabel, buttonClass, extraBorder }) => (
  <div
    className={`bg-white rounded-lg shadow-lg overflow-hidden text-green-800 transform transition hover:scale-105 ${
      extraBorder ? "border-4 border-yellow-300" : ""
    }`}
  >
    <img src={imageSrc || "/placeholder.svg"} alt={alt} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="mb-4 text-gray-700">{description}</p>
      <button className={buttonClass}>{buttonLabel}</button>
    </div>
  </div>
)

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
            <span className="text-yellow-300">Nossos</span> Serviços
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card de Venda de Propriedades - Destaque */}
            <ServiceCard
              imageSrc="/imagens/Negocios.jpeg"
              alt="Venda de Propriedades"
              title="Venda de Propriedades"
              description="Nossa equipe especializada oferece as melhores oportunidades para a venda do seu imóvel,
              garantindo atendimento personalizado e resultados excepcionais."
              buttonLabel="Saiba Mais"
              buttonClass="bg-yellow-300 text-green-800 px-4 py-2 rounded hover:bg-yellow-400 transition"
              extraBorder={true}
            />

            {/* Card de Avaliação de Propriedades */}
            <ServiceCard
              imageSrc="/imagens/avaliar.webp"
              alt="Avaliação de Propriedades"
              title="Avaliação de Propriedades"
              description="Conte com nossa expertise para uma avaliação precisa e justa do seu imóvel, 
              assegurando a valorização do seu patrimônio e uma negociação transparente."
              buttonLabel="Saiba Mais"
              buttonClass="bg-green-800 text-yellow-300 border border-yellow-300 px-4 py-2 rounded hover:bg-green-700 transition"
            />
          </div>
        </div>
      </section>

      {/* Nova seção de Contatos (Footer) */}
      <section id="contato" className="bg-green-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="text-yellow-300">Entre em</span> Contato
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <FaPhone className="text-4xl mb-4 text-yellow-300" />
              <h3 className="text-xl font-semibold mb-2">Telefone</h3>
              <p>(XX) XXXX-XXXX</p>
            </div>
            <div className="flex flex-col items-center">
              <FaEnvelope className="text-4xl mb-4 text-yellow-300" />
              <h3 className="text-xl font-semibold mb-2">E-mail</h3>
              <p>contato@fazendaspremium.com</p>
            </div>
            <div className="flex flex-col items-center">
              <FaMapMarkerAlt className="text-4xl mb-4 text-yellow-300" />
              <h3 className="text-xl font-semibold mb-2">Endereço</h3>
              <p>Rua das Fazendas, 123 - Cidade, Estado</p>
            </div>
          </div>
          <div className="mt-12 flex justify-center space-x-6">
            <a href="#" className="text-3xl hover:text-yellow-300 transition-colors">
              <FaFacebook />
            </a>
            <a href="#" className="text-3xl hover:text-yellow-300 transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="text-3xl hover:text-yellow-300 transition-colors">
              <FaWhatsapp />
            </a>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2023 Fazendas Premium. Todos os direitos reservados.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

