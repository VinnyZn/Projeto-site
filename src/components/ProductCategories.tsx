import React from 'react';
import { BookOpen, Utensils, Leaf } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const categories = [
  {
    id: 1,
    name: 'Agricultura Orgânica',
    description: 'Aprenda sobre técnicas de cultivo orgânico e sustentável.',
    image: 'https://images.pexels.com/photos/2751755/pexels-photo-2751755.jpeg',
    icon: Leaf,
  },
  {
    id: 2,
    name: 'Receitas Saudáveis',
    description: 'Descubra receitas deliciosas com produtos orgânicos.',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
    icon: Utensils,
  },
  {
    id: 3,
    name: 'Guia do Produtor',
    description: 'Dicas e orientações para agricultores orgânicos.',
    image: 'https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg',
    icon: BookOpen,
  },
];

const BlogCategories = () => {
  return (
    <section id="categorias" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
              Categorias do Blog
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore nosso conteúdo organizado por temas para encontrar exatamente o que você procura.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <ScrollAnimation key={category.id} threshold={0.2}>
              <div 
                className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-white text-2xl font-bold">{category.name}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <category.icon className="h-6 w-6 text-green-600 mr-2" />
                    <h3 className="text-xl font-semibold text-gray-800">{category.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <a 
                    href="#" 
                    className="inline-block text-green-600 font-medium hover:text-green-700 transition-colors"
                  >
                    Ler artigos →
                  </a>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCategories;