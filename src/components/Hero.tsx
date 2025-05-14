
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-16 hero-gradient bg-pattern">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 md:space-y-6 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight animate-fade-in">
            Análise Completa de Imóveis em <span className="text-realestate-600">São Paulo</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto animate-fade-in animate-delay-100">
            Acesse o histórico de valores, projeções de valorização e informações detalhadas de todos os imóveis comercializados na cidade de São Paulo.
          </p>
          
          <div className="w-full max-w-xl mx-auto mt-6 relative animate-fade-in animate-delay-200">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Digite um endereço ou CEP..." 
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-realestate-500 focus:border-transparent"
                />
              </div>
              <Button className="bg-realestate-600 hover:bg-realestate-700 h-[46px]">
                Buscar Imóveis
              </Button>
            </div>
          </div>
          
          <div className="pt-6 animate-fade-in animate-delay-300">
            <p className="text-gray-500 text-sm">
              Mais de 500.000 imóveis analisados em nossa base de dados
            </p>
          </div>
          
          <div className="w-full flex justify-center mt-8 md:mt-12 animate-fade-in animate-delay-400">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-4xl w-full">
              <img 
                src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Dashboard da plataforma" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
