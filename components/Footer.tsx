'use client';

import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/">
              <Image
                src="/images/logo-white.png"
                alt="Logo"
                width={150}
                height={50}
                className="h-15 w-auto mb-4 -ml-5"
              />
            </Link>
            <p className="text-gray-400">
              Votre partenaire de confiance pour des solutions web innovantes et performantes.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" onClick={(e) => handleScroll(e, 'hero')} className="text-gray-400 hover:text-white transition duration-300">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/" onClick={(e) => handleScroll(e, 'services')} className="text-gray-400 hover:text-white transition duration-300">
                  Services
                </Link>
              </li>
              <li>
                  <Link href="/" onClick={(e) => handleScroll(e, 'contact')} className="text-gray-400 hover:text-white transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/106985904/"
                className="text-gray-400 hover:text-white transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} KIMDEV. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 