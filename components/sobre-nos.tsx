export default function AboutSection() {
  return (
    <section id="sobre" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <p className="text-muted-foreground text-sm uppercase tracking-[0.2em] mb-4">Sobre Nós</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8 leading-tight">
              Tradição e Expertise em
              <span className="text-primary"> Negócios Rurais</span>
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                A Fazendas Premium é especializada na comercialização de ativos rurais e estruturação de negócios em
                todo o Brasil.
              </p>
              <p>
                Somos uma consultoria que une conhecimento técnico e paixão pelo campo, oferecendo suporte completo na
                compra, venda, avaliação e estruturação de negócios envolvendo propriedades rurais.
              </p>
              <p>
                Nossa equipe de especialistas trabalha com dedicação para encontrar as melhores oportunidades e garantir
                negociações seguras e transparentes.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
              <div>
                <p className="font-serif text-4xl text-primary mb-2">15+</p>
                <p className="text-sm text-muted-foreground">Anos de Experiência</p>
              </div>
              <div>
                <p className="font-serif text-4xl text-primary mb-2">200+</p>
                <p className="text-sm text-muted-foreground">Negócios Realizados</p>
              </div>
              <div>
                <p className="font-serif text-4xl text-primary mb-2">98%</p>
                <p className="text-sm text-muted-foreground">Clientes Satisfeitos</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src="/beautiful-sunset-over-green-farm-fields-with-golde.jpg"
                alt="Campo ao pôr do sol"
                className="w-full h-[500px] lg:h-[700px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
