'use client';

import { motion } from 'framer-motion';
import { Globe, Paintbrush, ShoppingCart, Search } from 'lucide-react';

const services = [
  {
    title: 'Développement Web',
    description: 'Création de sites web modernes et performants avec les dernières technologies.',
    icon: Globe,
  },
  {
    title: 'Design UI/UX',
    description: 'Conception d\'interfaces utilisateur intuitives et esthétiques.',
    icon: Paintbrush,
  },
  {
    title: 'E-commerce',
    description: 'Solutions e-commerce sur mesure pour développer votre activité en ligne.',
    icon: ShoppingCart,
  },
  {
    title: 'SEO',
    description: 'Optimisation pour les moteurs de recherche pour améliorer votre visibilité.',
    icon: Search,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Nos Services</h2>
          <p className="text-gray-400 text-lg">Des solutions adaptées à vos besoins</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition duration-300"
              >
                <div className="text-blue-500 mb-4">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services; 