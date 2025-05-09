'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Building2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    project: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      console.log('Envoi des données:', formData);

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log('Réponse du serveur:', data); 

      if (!response.ok) {
        throw new Error(data.error || 'Une erreur est survenue lors de l\'envoi du message');
      }

      setStatus('success');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        project: ''
      });
    } catch (error) {
      console.error('Erreur complète:', error);
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Une erreur est survenue');
    }
  };

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
              <div className="text-sky-500">
                <Building2 size={24} />
              </div>
              <div>
                <h3 className="text-white font-bold">KIMDEV</h3>
                <p className="text-gray-400">Votre partenaire digital</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sky-500">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-white font-bold">Téléphone</h3>
                <p className="text-gray-400">+33 6 63 36 45 83</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sky-500">
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
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-white mb-2">Nom du contact *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-white mb-2">Nom de l'entreprise *</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                  placeholder="Nom de votre entreprise"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-white mb-2">Numéro de téléphone *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                  placeholder="+33 6 XX XX XX XX"
                />
              </div>
              <div>
                <label htmlFor="project" className="block text-white mb-2">Votre projet *</label>
                <textarea
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                  placeholder="Décrivez votre projet en quelques mots..."
                ></textarea>
              </div>
              {status === 'error' && (
                <div className="text-red-500 text-sm bg-red-500/10 p-3 rounded-lg">
                  {errorMessage}
                </div>
              )}
              {status === 'success' && (
                <div className="text-green-500 text-sm bg-green-500/10 p-3 rounded-lg">
                  Message envoyé avec succès ! Nous vous recontacterons rapidement.
                </div>
              )}
              <button
                type="submit"
                disabled={status === 'loading'}
                className={`w-full bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-500 hover:to-sky-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ${
                  status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {status === 'loading' ? 'Envoi en cours...' : 'Envoyer'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
