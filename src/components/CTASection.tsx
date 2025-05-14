
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-realestate-600 text-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-2xl md:text-4xl font-bold">
            Pronto para conhecer o valor dos imóveis em São Paulo?
          </h2>
          <p className="text-lg text-realestate-50">
            Comece agora com 7 dias de teste gratuito. Sem compromisso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="bg-white text-realestate-700 hover:bg-gray-100">
              Iniciar Teste Gratuito
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-realestate-700">
              Ver Demonstração
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
