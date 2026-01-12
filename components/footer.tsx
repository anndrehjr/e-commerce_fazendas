import Link from "next/link"
import { Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="font-serif text-3xl text-white">Fazendas Premium</span>
            </Link>
            <p className="text-white/60 leading-relaxed max-w-md">
              Consultoria especializada na comercialização de ativos rurais e estruturação de negócios em todo o Brasil.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-6">Navegação</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-white/60 hover:text-accent transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/#sobre" className="text-white/60 hover:text-accent transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/catalogo" className="text-white/60 hover:text-accent transition-colors">
                  Catálogo
                </Link>
              </li>
              <li>
                <Link href="/#contato" className="text-white/60 hover:text-accent transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-6">Contato</h4>
            <ul className="space-y-4 text-white/60">
              <li>(11) 99999-9999</li>
              <li>contato@fazendaspremium.com</li>
              <li>São Paulo, SP</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-sm">© 2026 Fazendas Premium. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-accent transition-colors" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-white/40 hover:text-accent transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-white/40 hover:text-accent transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
