
import { 
  Search, 
  LineChart, 
  Map, 
  Building, 
  Clock, 
  Smartphone 
} from "lucide-react";

const features = [
  {
    title: "Busca por Endereço ou CEP",
    description: "Encontre facilmente informações sobre qualquer imóvel comercializado em São Paulo nos últimos anos.",
    icon: Search,
  },
  {
    title: "Histórico de Valores",
    description: "Acesse o histórico completo de valores de imóveis comercializados ao longo do tempo na região.",
    icon: LineChart,
  },
  {
    title: "Mapa de Valorização",
    description: "Visualize a valorização dos imóveis por região através de mapas interativos.",
    icon: Map,
  },
  {
    title: "Detalhes Completos",
    description: "Informações sobre metragem, número de quartos, banheiros e outras características de cada imóvel.",
    icon: Building,
  },
  {
    title: "Projeções Futuras",
    description: "Análises de tendências e projeções de valorização baseadas em dados históricos.",
    icon: Clock,
  },
  {
    title: "Acesso Multiplataforma",
    description: "Utilize nosso sistema em qualquer dispositivo: computador, tablet ou smartphone.",
    icon: Smartphone,
  },
];

const Features = () => {
  return (
    <section id="recursos" className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Recursos Exclusivos
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Nossa plataforma oferece as ferramentas mais completas para análise imobiliária em São Paulo
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 bg-realestate-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-realestate-100 transition-colors">
                <feature.icon className="h-6 w-6 text-realestate-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
