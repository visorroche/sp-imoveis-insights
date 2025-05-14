
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    title: "Plano Individual",
    price: "29,90",
    period: "/mês",
    description: "Ideal para pessoas físicas que precisam de informações sobre imóveis.",
    features: [
      "Busca ilimitada por endereço e CEP",
      "Histórico de preços de imóveis",
      "Detalhes completos dos imóveis",
      "Projeções de valorização básicas",
      "Acesso via computador e celular",
      "1 usuário"
    ],
    cta: "Assinar Plano Individual",
    popular: false
  },
  {
    title: "Plano Empresarial",
    price: "199,90",
    period: "/mês",
    description: "Perfeito para imobiliárias e empresas do setor.",
    features: [
      "Todos os recursos do plano individual",
      "Projeções avançadas de valorização",
      "Exportação de relatórios em PDF",
      "API de integração disponível",
      "Suporte prioritário",
      "8 usuários simultâneos"
    ],
    cta: "Assinar Plano Empresarial",
    popular: true
  }
];

const Pricing = () => {
  return (
    <section id="precos" className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Planos e Preços
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Escolha o plano que melhor atende às suas necessidades
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-xl border ${
                plan.popular 
                  ? 'border-realestate-500 shadow-lg' 
                  : 'border-gray-200 shadow-sm'
              } overflow-hidden`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-realestate-500 text-white text-xs font-semibold px-3 py-1 rounded-bl">
                  Mais escolhido
                </div>
              )}
              
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {plan.title}
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl md:text-4xl font-bold text-gray-900">
                    R$ {plan.price}
                  </span>
                  <span className="text-gray-500 ml-1">
                    {plan.period}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">
                  {plan.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-realestate-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-realestate-600 hover:bg-realestate-700' 
                      : 'bg-gray-900 hover:bg-gray-800'
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <p className="text-gray-500">
            Todos os planos incluem 7 dias de teste grátis. Cancele a qualquer momento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
