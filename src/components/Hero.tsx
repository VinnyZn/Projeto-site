import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="início" className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-800 mb-4">
              Blog da Roça
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Descubra o mundo da agricultura orgânica, receitas saudáveis e dicas para uma vida mais sustentável.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#artigos" 
                className="bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-colors flex items-center justify-center sm:justify-start"
              >
                Últimos Artigos
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#newsletter" 
                className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-full font-medium hover:bg-green-50 transition-colors flex items-center justify-center sm:justify-start"
              >
                Assinar Newsletter
              </a>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative rounded-xl overflow-hidden shadow-xl transform transition-transform hover:scale-[1.02] duration-300">
              <img 
                src="https://images.pexels.com/photos/2751755/pexels-photo-2751755.jpeg" 
                alt="Agricultura Orgânica" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 bg-white/90 px-4 py-2 rounded-lg text-green-800 font-semibold">
                Conteúdo Atualizado Semanalmente
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;