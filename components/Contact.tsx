'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Building2 } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Contactez-nous</h2>
          <p className="text-gray-400 text-lg">Nous sommes à votre écoute pour concrétiser votre projet</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4">
              <div className="text-blue-500">
                <Building2 size={24} />
              </div>
              <div>
                <h3 className="text-white font-bold">KIMDEV</h3>
                <p className="text-gray-400">Votre partenaire digital</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-blue-500">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-white font-bold">Téléphone</h3>
                <p className="text-gray-400">+33 6 63 36 45 83</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-blue-500">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-white font-bold">Email</h3>
                <p className="text-gray-400">kimdev-agency@outlook.fr</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Nom complet *</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-white mb-2">Nom de l'entreprise *</label>
                <input
                  type="text"
                  id="company"
                  required
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nom de votre entreprise"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email *</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-white mb-2">Numéro de téléphone *</label>
                <input
                  type="tel"
                  id="phone"
                  required
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="+33 6 XX XX XX XX"
                />
              </div>
              <div>
                <label htmlFor="project" className="block text-white mb-2">Votre projet *</label>
                <textarea
                  id="project"
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Décrivez votre projet en quelques mots..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
              >
                Envoyer
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 