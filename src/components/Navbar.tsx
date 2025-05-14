
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold text-realestate-800">
              ImovelValor<span className="text-realestate-600">SP</span>
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#recursos" className="text-sm font-medium text-gray-700 hover:text-realestate-600 transition-colors">
              Recursos
            </a>
            <a href="#como-funciona" className="text-sm font-medium text-gray-700 hover:text-realestate-600 transition-colors">
              Como Funciona
            </a>
            <a href="#precos" className="text-sm font-medium text-gray-700 hover:text-realestate-600 transition-colors">
              Preços
            </a>
            <Button variant="outline" className="text-sm font-medium text-realestate-600 border-realestate-600 hover:text-realestate-700 hover:border-realestate-700">
              Entrar
            </Button>
            <Button className="text-sm font-medium bg-realestate-600 hover:bg-realestate-700">
              Começar Grátis
            </Button>
          </nav>
          
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a 
                href="#recursos" 
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Recursos
              </a>
              <a 
                href="#como-funciona" 
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Como Funciona
              </a>
              <a 
                href="#precos" 
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Preços
              </a>
              <div className="flex flex-col space-y-2 px-4">
                <Button variant="outline" className="w-full justify-center text-realestate-600 border-realestate-600 hover:text-realestate-700 hover:border-realestate-700">
                  Entrar
                </Button>
                <Button className="w-full justify-center bg-realestate-600 hover:bg-realestate-700">
                  Começar Grátis
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
