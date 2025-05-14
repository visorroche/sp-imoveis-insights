
const steps = [
  {
    number: "01",
    title: "Cadastre-se",
    description: "Crie sua conta em poucos minutos e escolha o plano que melhor atende suas necessidades."
  },
  {
    number: "02",
    title: "Busque imóveis",
    description: "Digite o endereço ou CEP e encontre todos os imóveis comercializados na região."
  },
  {
    number: "03",
    title: "Analise os dados",
    description: "Visualize histórico de preços, projeções de valorização e todos os detalhes do imóvel."
  },
  {
    number: "04",
    title: "Tome decisões informadas",
    description: "Use nossos dados para tomar as melhores decisões de compra, venda ou investimento."
  }
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Como Funciona
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Em apenas quatro passos simples, você terá acesso a todas as informações
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm h-full">
                <div className="text-realestate-600 font-bold text-2xl mb-4">{step.number}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 w-full h-0.5 bg-gray-200 -z-10 transform translate-x-1/2">
                  <div className="absolute top-1/2 right-0 h-2 w-2 bg-realestate-600 rounded-full transform -translate-y-1/2 translate-x-1/2"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
