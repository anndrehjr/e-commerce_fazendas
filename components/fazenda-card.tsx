import Link from "next/link"
import { MapPin, Ruler, ArrowUpRight } from "lucide-react"

interface Fazenda {
  id: number
  nome: string
  localizacao: string
  preco: number
  imagemPrincipal: string
  area?: number
  tipo?: string
}

interface FazendaCardProps {
  fazenda: Fazenda
}

export default function FazendaCard({ fazenda }: FazendaCardProps) {
  return (
    <Link href={`/fazenda/${fazenda.id}`} className="group block">
      <article className="bg-card overflow-hidden hover:shadow-xl transition-all duration-500">
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={
              fazenda.imagemPrincipal ||
              "/placeholder.svg?height=400&width=600&query=beautiful farm property aerial view"
            }
            alt={fazenda.nome}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          {fazenda.tipo && (
            <span className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-1 text-xs uppercase tracking-wider">
              {fazenda.tipo}
            </span>
          )}
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <h2 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors">
              {fazenda.nome}
            </h2>
            <ArrowUpRight
              size={20}
              className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
            />
          </div>

          <div className="flex items-center gap-4 text-muted-foreground text-sm mb-4">
            <div className="flex items-center gap-1">
              <MapPin size={14} />
              <span>{fazenda.localizacao}</span>
            </div>
            {fazenda.area && (
              <div className="flex items-center gap-1">
                <Ruler size={14} />
                <span>{fazenda.area} ha</span>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-border">
            <p className="text-primary font-serif text-2xl">R$ {fazenda.preco.toLocaleString("pt-BR")}</p>
          </div>
        </div>
      </article>
    </Link>
  )
}
