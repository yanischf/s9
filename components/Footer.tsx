
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold text-lg">
                S9
              </div>
              <span className="font-bold text-lg tracking-tighter">STUDIO S9</span>
            </Link>
            <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xs leading-relaxed">
              Nous concevons les conditions qui rendent vos projets possibles. Studio de design global, systémique et prospectif.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Menu</h4>
            <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
              <li><Link to="/" className="hover:text-black dark:hover:text-white transition-colors">Accueil</Link></li>
              <li><Link to="/about" className="hover:text-black dark:hover:text-white transition-colors">Manifeste</Link></li>
              <li><Link to="/events" className="hover:text-black dark:hover:text-white transition-colors">Communauté</Link></li>
              <li><Link to="/contact" className="hover:text-black dark:hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Suivez-nous</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-neutral-900 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-neutral-900 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-neutral-900 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Contact</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
              123 Avenue du Design<br />
              75011 Paris, France
            </p>
            <Link to="/contact" className="text-sm font-bold underline underline-offset-4 decoration-accent">
              hello@studio-s9.com
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 dark:border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Studio S9. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-xs text-gray-400">
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
