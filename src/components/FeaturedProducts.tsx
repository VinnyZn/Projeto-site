import React from 'react';
import { Calendar, User, Clock } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const articles = [
  {
    id: 1,
    title: 'Como Começar sua Horta Orgânica',
    excerpt: 'Aprenda os passos essenciais para iniciar sua própria horta orgânica em casa.',
    image: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg',
    author: 'Maria Silva',
    date: '10 Mar 2024',
    readTime: '5 min',
    category: 'Agricultura',
  },
  {
    id: 2,
    title: 'Receitas com Produtos da Estação',
    excerpt: 'Descubra deliciosas receitas utilizando produtos frescos da época.',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
    author: 'João Santos',
    date: '8 Mar 2024',
    readTime: '4 min',
    category: 'Receitas',
  },
  {
    id: 3,
    title: 'Guia de Compostagem',
    excerpt: 'Tudo o que você precisa saber para fazer sua própria compostagem em casa.',
    image: 'https://images.pexels.com/photos/4503751/pexels-photo-4503751.jpeg',
    author: 'Ana Lima',
    date: '5 Mar 2024',
    readTime: '6 min',
    category: 'Sustentabilidade',
  },
  {
    id: 4,
    title: 'Benefícios dos Alimentos Orgânicos',
    excerpt: 'Entenda por que os alimentos orgânicos são melhores para sua saúde.',
    image: 'https://images.pexels.com/photos/892649/pexels-photo-892649.jpeg',
    author: 'Pedro Costa',
    date: '3 Mar 2024',
    readTime: '4 min',
    category: 'Saúde',
  },
];

const FeaturedArticles = () => {
  return (
    <section id="artigos" className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <span className="inline-block bg-green-100 text-green-800 font-medium px-4 py-1 rounded-full mb-4">
              Blog
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
              Artigos em Destaque
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Confira nossos artigos mais recentes sobre agricultura orgânica, receitas saudáveis e vida sustentável.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <ScrollAnimation key={article.id} threshold={0.2}>
              <article 
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-green-600 transition-colors">
                    <a href="#">{article.title}</a>
                  </h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {article.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {article.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                </div>
              </article>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation>
          <div className="mt-12 text-center">
            <a 
              href="#" 
              className="inline-block border-2 border-green-600 text-green-600 px-6 py-3 rounded-full font-medium hover:bg-green-50 transition-colors"
            >
              Ver Todos os Artigos
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default FeaturedArticles;