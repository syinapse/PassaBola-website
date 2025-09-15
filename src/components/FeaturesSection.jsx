// src/components/FeaturesSection.jsx
import React from 'react';
import { UsersIcon, ShoppingBagIcon, NewspaperIcon } from '@heroicons/react/24/outline';

export const FeaturesSection = () => {
  const features = [
    { icon: UsersIcon, title: 'Conexões', description: 'Conecte-se com pessoas que procuram o mesmo que você.' },
    { icon: ShoppingBagIcon, title: 'Loja Exclusiva', description: 'Loja exclusiva do Passe a Bola a um clique de você.' },
    { icon: NewspaperIcon, title: 'Notícias', description: 'Se mantenha sempre atualizado sobre o mundo da bola.' },
  ];

  return (
    <section id="features" className="bg-gray-100 py-20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-purple-100 p-4 rounded-lg mb-4">
              <feature.icon className="h-8 w-8 text-purple-600"/>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-gray-800">{feature.title}</h3>
            <p className="text-gray-600 ">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};