import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Maria Oliveira',
    comment: 'Os produtos são sempre frescos e de ótima qualidade. As entregas são pontuais e o atendimento é excelente!',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Carlos Santos',
    comment: 'As frutas são sempre doces e no ponto certo de maturação. Recomendo a todos que buscam qualidade.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ana Lima',
    comment: 'Adoro a variedade de produtos orgânicos. Desde que comecei a comprar aqui, nunca mais fui ao supermercado.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A satisfação dos nossos clientes é nossa maior recompensa. Confira os depoimentos de quem já experimentou nossos produtos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;