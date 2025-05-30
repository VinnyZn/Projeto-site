import React from 'react';
import { Leaf, MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contato" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Leaf className="h-8 w-8 text-green-500 mr-2" />
              <h3 className="text-xl font-bold">Hortifruti da Roça</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Oferecendo o melhor da roça para sua mesa desde 2010. Produtos frescos, orgânicos e de qualidade.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Categorias</h3>
            <ul className="space-y-2">
              {['Frutas', 'Legumes', 'Verduras', 'Orgânicos', 'Cestas Prontas', 'Produtos Especiais'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Informações</h3>
            <ul className="space-y-2">
              {['Sobre Nós', 'Política de Entrega', 'Termos e Condições', 'Política de Privacidade', 'FAQ', 'Trabalhe Conosco'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">Rua das Hortaliças, 123 - Centro, Sua Cidade - UF</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <a href="tel:+551199999999" className="text-gray-400 hover:text-green-500 transition-colors">
                  (11) 9999-9999
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <a href="mailto:contato@hortifrutidaorca.com" className="text-gray-400 hover:text-green-500 transition-colors">
                  contato@hortifrutidaorca.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>Segunda a Sexta: 8h às 19h</p>
                  <p>Sábados: 8h às 17h</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Hortifruti da Roça. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;