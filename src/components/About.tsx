import React from 'react';
import { BookOpen, Users, Award, Heart } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Conteúdo de Qualidade',
    description: 'Artigos escritos por especialistas em agricultura orgânica.',
  },
  {
    icon: Users,
    title: 'Comunidade Engajada',
    description: 'Uma comunidade ativa de agricultores e entusiastas.',
  },
  {
    icon: Award,
    title: 'Conhecimento Certificado',
    description: 'Informações verificadas e atualizadas regularmente.',
  },
  {
    icon: Heart,
    title: 'Apoio ao Produtor',
    description: 'Valorizamos e apoiamos os produtores orgânicos.',
  },
];

const About = () => {
  return (
    <section id="sobre" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <span className="inline-block bg-green-100 text-green-800 font-medium px-4 py-1 rounded-full mb-4">
              Sobre o Blog
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
              Blog da Roça: Conhecimento e Tradição
            </h2>
            <p className="text-gray-600 mb-6">
              Fundado em 2010, o Blog da Roça nasceu da paixão pela agricultura orgânica e sustentável. Nossa missão é compartilhar conhecimento e experiências sobre cultivo orgânico, alimentação saudável e vida sustentável.
            </p>
            <p className="text-gray-600 mb-8">
              Trabalhamos com especialistas e agricultores experientes para trazer o melhor conteúdo sobre agricultura orgânica, receitas saudáveis e dicas de cultivo para nossos leitores.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <feature.icon className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/2751755/pexels-photo-2751755.jpeg" 
                  alt="Nossa História" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg max-w-xs">
                <div className="flex items-center mb-2">
                  <img 
                    src="https://images.pexels.com/photos/5428002/pexels-photo-5428002.jpeg" 
                    alt="Autor" 
                    className="w-12 h-12 rounded-full object-cover mr-3"
                  />
                  <div>
                    <h4 className="font-medium text-gray-800">João Silva</h4>
                    <p className="text-sm text-gray-600">Editor Chefe</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 italic">
                  "Nossa missão é compartilhar conhecimento e inspirar pessoas a viverem de forma mais sustentável."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;