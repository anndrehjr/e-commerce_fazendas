"use client"

import { useState } from "react"
import FazendaCard from "../components/FazendaCard"

const fazendasMock = [
  {
    id: 1,
    nome: "Fazenda Bela Vista",
    localizacao: "Ribeirão Preto, SP",
    preco: 5000000,
    imagemPrincipal: "/fazendas/1.jpg",
    area: 500,
    tipo: "Agricultura" ,
  },
  {

    id: 2,
    nome: "Fazenda da Mata",
    localizacao: "São Paulo, SP",
    preco: 10000000,
    imagemPrincipal: "/fazendas/6.jpg",
    descricao: "Fazenda com área para pecuária e agricultura.",
    area: 1000,
    tipo: "Mista",
  },
  {
    id: 3,
    nome: "Sítio Esperança",
    localizacao: "Campinas, SP",
    preco: 2000000,
    imagemPrincipal: "/fazendas/6.jpg",
    area: 250,
    tipo: "Agricultura" ,
  }
  // ... outros itens do mock
]

const Catalogo = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [precoFilter, setPrecoFilter] = useState("todos")
  const [tipoFilter, setTipoFilter] = useState("todos")

  const filteredFazendas = fazendasMock.filter((fazenda) => {
    const matchesSearch =
      fazenda.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      fazenda.localizacao.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesPreco =
      precoFilter === "todos" ||
      (precoFilter === "ate-5m" && fazenda.preco <= 5000000) ||
      (precoFilter === "acima-5m" && fazenda.preco > 5000000)
    const matchesTipo = tipoFilter === "todos" || fazenda.tipo === tipoFilter

    return matchesSearch && matchesPreco && matchesTipo
  })

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-800">Catálogo de Fazendas</h1>

      <div className="max-w-4xl mx-auto mb-8">
        <div className="grid gap-4 md:grid-cols-3">
          <input
            type="search"
            placeholder="Buscar fazendas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <select
            value={precoFilter}
            onChange={(e) => setPrecoFilter(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="todos">Todos os preços</option>
            <option value="ate-5m">Até R$ 5 milhões</option>
            <option value="acima-5m">Acima de R$ 5 milhões</option>
          </select>

          <select
            value={tipoFilter}
            onChange={(e) => setTipoFilter(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="todos">Todos os tipos</option>
            <option value="Agricultura">Agricultura</option>
            <option value="Pecuaria">Pecuária</option>
            <option value="Mista">Mista</option>
          </select>
        </div>
      </div>

      {filteredFazendas.length === 0 ? (
        <div className="text-center text-gray-500 py-8">Nenhuma fazenda encontrada com os filtros selecionados.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFazendas.map((fazenda) => (
            <FazendaCard key={fazenda.id} fazenda={fazenda} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Catalogo

