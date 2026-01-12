import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/aerial-view-of-beautiful-green-farmland-countrysid.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-white/80 text-sm uppercase tracking-[0.3em] mb-6">Excelência em Negócios Rurais</p>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight text-balance">
          Cultivando Sonhos,
          <br />
          <span className="text-accent">Colhendo Resultados</span>
        </h1>

        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Consultoria especializada na comercialização de ativos rurais e estruturação de negócios em todo o Brasil.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/catalogo"
            className="group inline-flex items-center gap-3 bg-white text-foreground px-8 py-4 text-sm uppercase tracking-wider hover:bg-accent hover:text-white transition-all duration-300"
          >
            Ver Catálogo
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/#contato"
            className="inline-flex items-center gap-3 border border-white/50 text-white px-8 py-4 text-sm uppercase tracking-wider hover:bg-white/10 transition-all duration-300"
          >
            Fale Conosco
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-white/30" />
      </div>
    </section>
  )
}
