import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      // Here you would typically send the email to your backend
    }
  };

  return (
    <section className="py-16 bg-green-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Receba Nossas Ofertas
          </h2>
          <p className="text-green-100 mb-8">
            Inscreva-se em nossa newsletter e receba ofertas exclusivas, dicas de receitas e novidades diretamente no seu email.
          </p>

          {isSubmitted ? (
            <div className="bg-green-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Obrigado por se inscrever!</h3>
              <p>Em breve você receberá nossas melhores ofertas e novidades.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor email"
                className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-medium px-6 py-3 rounded-lg transition-colors flex items-center justify-center"
              >
                Inscrever-se
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;