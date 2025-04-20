import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="py-20 md:py-28 overflow-hidden relative min-h-[90vh] flex items-center">
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
      <div className="absolute -right-20 -top-20 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl"></div>
      <div className="absolute -left-20 top-1/2 w-64 h-64 bg-blue-900/10 rounded-full blur-2xl"></div>
      
      {/* Effet métallique */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-500/10 to-transparent opacity-40"></div>
      
      <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
        <div className="max-w-3xl mx-auto content-wrapper">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-blue-900">
            Solutions Web Innovantes pour Votre Entreprise
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            KIMDEV conçoit et développe des sites web et applications sur mesure 
            qui propulsent votre entreprise vers de nouveaux sommets.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#services">
              <Button className="bg-blue-900 hover:bg-blue-800 cursor-pointer text-white font-medium shadow-md hover:shadow-lg transition-all px-8 py-6 text-base w-full sm:w-auto ">
                Nos Services
              </Button>
            </Link>
            <Link href="#contact">
              <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-900/10 cursor-pointer shadow-md hover:shadow-lg transition-all px-8 py-6 text-base font-medium w-full sm:w-auto">
                Contactez-nous
              </Button>
            </Link>
          </div>
        </div>
        
      </div>
    </section>
  );
} 