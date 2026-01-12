"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ArrowLeft, MapPin, Ruler, Phone, Check } from "lucide-react"

const fazendasMock = [
  {
    id: 1,
    nome: "Fazenda Bela Vista",
    localizacao: "Ribeirão Preto, SP",
    preco: 5000000,
    imagemPrincipal: "/beautiful-cattle-farm-green-pastures-aerial.jpg",
    descricao:
      "Uma bela fazenda com 500 hectares de terra fértil, ideal para cultivo de cana-de-açúcar e soja. Localização privilegiada com fácil acesso a rodovias e centros urbanos.",
    area: 500,
    tipo: "Agricultura",
    infraestrutura: [
      "Casa sede com 4 quartos",
      "Galpões de 2000m²",
      "Sistema de irrigação completo",
      "Energia elétrica trifásica",
      "Poços artesianos",
    ],
    imagens: [
      "/farm-house-main-building-luxury.jpg",
      "/green-crop-fields-aerial-view.jpg",
      "/farm-barn-storage-building.jpg",
      "/placeholder.svg?height=800&width=1200",
    ],
  },
  {
    id: 2,
    nome: "Fazenda da Mata",
    localizacao: "São Paulo, SP",
    preco: 10000000,
    imagemPrincipal: "/large-farm-with-forest-and-fields-aerial.jpg",
    descricao:
      "Fazenda excepcional com 1000 hectares, combinando áreas para pecuária e agricultura. Reserva legal preservada e rica biodiversidade.",
    area: 1000,
    tipo: "Mista",
    infraestrutura: [
      "Casa sede luxuosa",
      "Curral para 500 cabeças",
      "Área de lazer completa",
      "Lagos artificiais",
      "Pista de pouso",
    ],
    imagens: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
  },
]

export default function FazendaDetalhesPage() {
  const params = useParams()
  const fazenda = fazendasMock.find((f) => f.id === Number(params.id))
  const [imagemPrincipal, setImagemPrincipal] = useState(fazenda?.imagemPrincipal || "")

  if (!fazenda) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl text-foreground mb-4">Propriedade não encontrada</h1>
            <Link href="/catalogo" className="text-primary hover:text-accent transition-colors">
              Voltar ao catálogo
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  const handleWhatsAppClick = () => {
    const mensagem = encodeURIComponent(`Olá, estou interessado na ${fazenda.nome}`)
    window.open(`https://wa.me/5511999999999?text=${mensagem}`, "_blank")
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Back Link */}
          <Link
            href="/catalogo"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            <span className="text-sm uppercase tracking-wider">Voltar ao Catálogo</span>
          </Link>

          {/* Header */}
          <div className="mb-12">
            <span className="text-accent text-sm uppercase tracking-wider">{fazenda.tipo}</span>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mt-2 mb-4">{fazenda.nome}</h1>
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>{fazenda.localizacao}</span>
              </div>
              <div className="flex items-center gap-2">
                <Ruler size={18} />
                <span>{fazenda.area} hectares</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Gallery */}
            <div className="lg:col-span-2">
              <div className="mb-4">
                <img
                  src={imagemPrincipal || fazenda.imagemPrincipal}
                  alt={fazenda.nome}
                  className="w-full aspect-[16/10] object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {fazenda.imagens.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setImagemPrincipal(img)}
                    className={`aspect-square overflow-hidden border-2 transition-all ${
                      imagemPrincipal === img ? "border-accent" : "border-transparent hover:border-muted"
                    }`}
                  >
                    <img
                      src={img || "/placeholder.svg"}
                      alt={`${fazenda.nome} - ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-secondary p-8">
                <p className="font-serif text-4xl text-primary mb-2">R$ {fazenda.preco.toLocaleString("pt-BR")}</p>
                <p className="text-muted-foreground text-sm mb-8">Valor negociável</p>

                <div className="mb-8">
                  <h3 className="text-sm uppercase tracking-wider text-foreground mb-4">Descrição</h3>
                  <p className="text-muted-foreground leading-relaxed">{fazenda.descricao}</p>
                </div>

                <div className="mb-8">
                  <h3 className="text-sm uppercase tracking-wider text-foreground mb-4">Infraestrutura</h3>
                  <ul className="space-y-3">
                    {fazenda.infraestrutura.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <Check size={16} className="text-accent mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={handleWhatsAppClick}
                  className="w-full flex items-center justify-center gap-3 bg-primary text-primary-foreground py-4 text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors"
                >
                  <Phone size={18} />
                  Falar com Corretor
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
