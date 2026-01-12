"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FazendaCard from "@/components/fazenda-card"
import PageTransition from "@/components/page-transition"
import { Search, SlidersHorizontal } from "lucide-react"
import { motion } from "framer-motion"

const fazendasMock = [
  {
    id: 1,
    nome: "Fazenda Bela Vista",
    localizacao: "Ribeirão Preto, SP",
    preco: 5000000,
    imagemPrincipal: "/beautiful-cattle-farm-green-pastures.jpg",
    area: 500,
    tipo: "Agricultura",
  },
  {
    id: 2,
    nome: "Fazenda da Mata",
    localizacao: "São Paulo, SP",
    preco: 10000000,
    imagemPrincipal: "/large-farm-with-forest-and-fields-aerial.jpg",
    area: 1000,
    tipo: "Mista",
  },
  {
    id: 3,
    nome: "Sítio Esperança",
    localizacao: "Campinas, SP",
    preco: 2000000,
    imagemPrincipal: "/small-farm-countryside-beautiful-landscape.jpg",
    area: 250,
    tipo: "Agricultura",
  },
  {
    id: 4,
    nome: "Rancho Dourado",
    localizacao: "Uberaba, MG",
    preco: 3500000,
    imagemPrincipal: "/ranch-with-horses-golden-hour.jpg",
    area: 800,
    tipo: "Pecuária",
  },
  {
    id: 5,
    nome: "Fazenda Santa Clara",
    localizacao: "Piracicaba, SP",
    preco: 7500000,
    imagemPrincipal: "/sugar-cane-farm-aerial-view-sunset.jpg",
    area: 1200,
    tipo: "Agricultura",
  },
  {
    id: 6,
    nome: "Estância do Sol",
    localizacao: "Bauru, SP",
    preco: 4200000,
    imagemPrincipal: "/cattle-ranch-with-barn-morning-light.jpg",
    area: 650,
    tipo: "Pecuária",
  },
]

export default function CatalogoPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [precoFilter, setPrecoFilter] = useState("todos")
  const [tipoFilter, setTipoFilter] = useState("todos")
  const [showFilters, setShowFilters] = useState(false)

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
    <PageTransition>
      <main className="min-h-screen bg-background">
        <Navbar />

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="pt-32 pb-16 bg-secondary"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-muted-foreground text-sm uppercase tracking-[0.2em] mb-4"
            >
              Nosso Portfólio
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6"
            >
              Catálogo de <span className="text-primary">Propriedades</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-muted-foreground text-lg max-w-2xl"
            >
              Explore nossa seleção exclusiva de fazendas e propriedades rurais em todo o Brasil.
            </motion.p>
          </div>
        </motion.section>

        {/* Filters */}
        <section className="py-8 border-b border-border bg-background sticky top-20 z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative w-full md:w-96">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Buscar propriedades..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-secondary border-none text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all rounded-sm"
                />
              </div>

              {/* Filter Toggle (Mobile) */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden flex items-center gap-2 text-foreground"
              >
                <SlidersHorizontal size={18} />
                Filtros
              </button>

              {/* Desktop Filters */}
              <div className="hidden md:flex gap-4">
                <select
                  value={precoFilter}
                  onChange={(e) => setPrecoFilter(e.target.value)}
                  className="px-4 py-3 bg-secondary border-none text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer rounded-sm"
                >
                  <option value="todos">Todos os preços</option>
                  <option value="ate-5m">Até R$ 5 milhões</option>
                  <option value="acima-5m">Acima de R$ 5 milhões</option>
                </select>

                <select
                  value={tipoFilter}
                  onChange={(e) => setTipoFilter(e.target.value)}
                  className="px-4 py-3 bg-secondary border-none text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer rounded-sm"
                >
                  <option value="todos">Todos os tipos</option>
                  <option value="Agricultura">Agricultura</option>
                  <option value="Pecuária">Pecuária</option>
                  <option value="Mista">Mista</option>
                </select>
              </div>
            </div>

            {/* Mobile Filters */}
            <div
              className={`md:hidden flex flex-col gap-4 overflow-hidden transition-all duration-300 ${
                showFilters ? "mt-4 pt-4 max-h-40 opacity-100 border-t border-border" : "max-h-0 opacity-0"
              }`}
            >
              <select
                value={precoFilter}
                onChange={(e) => setPrecoFilter(e.target.value)}
                className="px-4 py-3 bg-secondary border-none text-foreground focus:outline-none rounded-sm"
              >
                <option value="todos">Todos os preços</option>
                <option value="ate-5m">Até R$ 5 milhões</option>
                <option value="acima-5m">Acima de R$ 5 milhões</option>
              </select>

              <select
                value={tipoFilter}
                onChange={(e) => setTipoFilter(e.target.value)}
                className="px-4 py-3 bg-secondary border-none text-foreground focus:outline-none rounded-sm"
              >
                <option value="todos">Todos os tipos</option>
                <option value="Agricultura">Agricultura</option>
                <option value="Pecuária">Pecuária</option>
                <option value="Mista">Mista</option>
              </select>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground text-sm mb-8"
            >
              {filteredFazendas.length}{" "}
              {filteredFazendas.length === 1 ? "propriedade encontrada" : "propriedades encontradas"}
            </motion.p>

            {filteredFazendas.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">
                  Nenhuma propriedade encontrada com os filtros selecionados.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredFazendas.map((fazenda, index) => (
                  <motion.div
                    key={fazenda.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.1 * index,
                      duration: 0.5,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    <FazendaCard fazenda={fazenda} />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        <Footer />
      </main>
    </PageTransition>
  )
}
