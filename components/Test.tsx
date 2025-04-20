import React from "react";
import { ServiceCard } from "./ServiceCard";
import { Laptop, Code, PenTool, Briefcase, BarChart, Globe } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      title: "Création de Sites Web",
      description: "Des sites vitrines modernes et responsive qui mettent en valeur votre image de marque.",
      icon: Globe
    },
    {
      title: "Développement Web",
      description: "Applications web sur mesure avec les dernières technologies pour répondre à vos besoins spécifiques.",
      icon: Code
    },
    {
      title: "Design UI/UX",
      description: "Interfaces utilisateur intuitives et expériences utilisateur qui convertissent les visiteurs en clients.",
      icon: PenTool
    },
    {
      title: "E-commerce",
      description: "Solutions e-commerce complètes pour vendre vos produits et services en ligne efficacement.",
      icon: Briefcase
    },
    {
      title: "Référencement SEO",
      description: "Optimisation pour les moteurs de recherche afin d'améliorer votre visibilité et votre classement.",
      icon: BarChart
    },
    {
      title: "Maintenance Web",
      description: "Services de maintenance pour garder votre site web sécurisé, à jour et performant.",
      icon: Laptop
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute -left-20 top-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-2xl"></div>
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            Nos Services
          </h2>
          <p className="text-lg text-blue-700 max-w-2xl mx-auto">
            Des solutions web complètes pour faire briller votre entreprise en ligne
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 