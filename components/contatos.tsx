import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contato" className="py-32 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div>
            <p className="text-white/60 text-sm uppercase tracking-[0.2em] mb-4">Contato</p>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-8 leading-tight">
              Vamos Conversar Sobre
              <span className="text-accent"> Seu Projeto</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-12">
              Estamos prontos para ajudá-lo a encontrar a propriedade perfeita ou vender seu ativo rural pelo melhor
              valor de mercado.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center">
                  <Phone size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-white/60 text-sm uppercase tracking-wider mb-1">Telefone</p>
                  <p className="text-white text-lg">(11) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center">
                  <Mail size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-white/60 text-sm uppercase tracking-wider mb-1">E-mail</p>
                  <p className="text-white text-lg">contato@fazendaspremium.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center">
                  <MapPin size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-white/60 text-sm uppercase tracking-wider mb-1">Endereço</p>
                  <p className="text-white text-lg">Av. Paulista, 1000 - São Paulo, SP</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="bg-white/5 backdrop-blur-sm p-8 lg:p-12">
            <h3 className="font-serif text-2xl text-white mb-8">Envie uma Mensagem</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/60 text-sm uppercase tracking-wider mb-2">Nome</label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-white/30 text-white py-3 focus:outline-none focus:border-accent transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-sm uppercase tracking-wider mb-2">Telefone</label>
                  <input
                    type="tel"
                    className="w-full bg-transparent border-b border-white/30 text-white py-3 focus:outline-none focus:border-accent transition-colors"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>
              <div>
                <label className="block text-white/60 text-sm uppercase tracking-wider mb-2">E-mail</label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-white/30 text-white py-3 focus:outline-none focus:border-accent transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-white/60 text-sm uppercase tracking-wider mb-2">Mensagem</label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-b border-white/30 text-white py-3 focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Como podemos ajudar?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent text-foreground py-4 text-sm uppercase tracking-wider hover:bg-accent/90 transition-colors mt-4"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
