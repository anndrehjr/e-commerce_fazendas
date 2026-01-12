import { ArrowUpRight } from "lucide-react"

const services = [
  {
    number: "01",
    title: "Venda de Propriedades",
    description:
      "Nossa equipe especializada oferece as melhores oportunidades para a venda do seu imóvel, garantindo atendimento personalizado e resultados excepcionais.",
    image: "/handshake-business-deal-farm-property.jpg",
  },
  {
    number: "02",
    title: "Avaliação de Propriedades",
    description:
      "Conte com nossa expertise para uma avaliação precisa e justa do seu imóvel, assegurando a valorização do seu patrimônio.",
    image: "/farm-land-evaluation-aerial-view.jpg",
  },
  {
    number: "03",
    title: "Consultoria Especializada",
    description:
      "Orientação completa em todas as etapas do processo, desde a análise inicial até a conclusão do negócio com total segurança.",
    image: "/agriculture-consulting-meeting-farmers.jpg",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-muted-foreground text-sm uppercase tracking-[0.2em] mb-4">Nossos Serviços</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground max-w-3xl mx-auto leading-tight">
            Soluções Completas para
            <span className="text-primary"> Seu Negócio Rural</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.number} className="group bg-card hover:shadow-xl transition-all duration-500">
              <div className="overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <span className="text-accent font-serif text-lg">{service.number}</span>
                <h3 className="font-serif text-2xl text-foreground mt-2 mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                <button className="inline-flex items-center gap-2 text-primary text-sm uppercase tracking-wider group-hover:text-accent transition-colors">
                  Saiba Mais
                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
