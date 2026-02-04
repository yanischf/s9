
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Sun, Moon, Menu, X, ArrowRight, Zap } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-surface/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-100 dark:border-neutral-900">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link to="/" className="text-sm font-bold tracking-tighter uppercase">
            STUDIO S9®
          </Link>
          <div className="hidden md:flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
            OPEN FOR ANY COLLABORATION
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <NavLink 
            to="/unique-offer"
            className={({ isActive }) => 
              `text-[11px] font-bold uppercase tracking-widest transition-colors ${isActive ? 'text-black dark:text-white' : 'text-muted hover:text-black dark:hover:text-white'}`
            }
          >
            L'OFFRE
          </NavLink>

          <NavLink 
            to="/toolkit"
            className={({ isActive }) => 
              `text-[11px] font-bold uppercase tracking-widest transition-colors ${isActive ? 'text-black dark:text-white' : 'text-muted hover:text-black dark:hover:text-white'}`
            }
          >
            TOOLKIT
          </NavLink>

          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `text-[11px] font-bold uppercase tracking-widest transition-colors ${isActive ? 'text-black dark:text-white' : 'text-muted hover:text-black dark:hover:text-white'}`
            }
          >
            MANIFESTE
          </NavLink>
          
          <NavLink 
            to="/events" 
            className={({ isActive }) => 
              `text-[11px] font-bold uppercase tracking-widest transition-colors ${isActive ? 'text-black dark:text-white' : 'text-muted hover:text-black dark:hover:text-white'}`
            }
          >
            EVENTS
          </NavLink>
          
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `text-[11px] font-bold uppercase tracking-widest transition-colors ${isActive ? 'text-black dark:text-white' : 'text-muted hover:text-black dark:hover:text-white'}`
            }
          >
            CONTACTS
          </NavLink>

          <Link 
            to="/contact" 
            className="group ml-4 px-6 py-2.5 bg-black dark:bg-white text-white dark:text-black rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:scale-105 transition-all flex items-center gap-3 shadow-lg shadow-black/5"
          >
            INTÉGRER MON LAB <Zap size={12} className="group-hover:fill-current transition-all" />
          </Link>
        </nav>

        <div className="flex items-center gap-6">
          <button onClick={toggleTheme} className="text-muted hover:text-black dark:hover:text-white transition-colors">
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface dark:bg-black border-b border-gray-200 dark:border-neutral-900 p-8 flex flex-col gap-8 animate-in fade-in slide-in-from-top-2 max-h-[85vh] overflow-y-auto">
          <Link to="/contact" className="group w-full p-6 bg-black dark:bg-white text-white dark:text-black rounded-[2rem] text-xl font-bold uppercase tracking-widest flex justify-between items-center" onClick={() => setIsMobileMenuOpen(false)}>
            INTÉGRER MON LAB <ArrowRight />
          </Link>
          <Link to="/unique-offer" className="text-3xl font-bold tracking-tighter" onClick={() => setIsMobileMenuOpen(false)}>L'OFFRE</Link>
          <Link to="/toolkit" className="text-3xl font-bold tracking-tighter" onClick={() => setIsMobileMenuOpen(false)}>TOOLKIT</Link>
          <Link to="/about" className="text-3xl font-bold tracking-tighter" onClick={() => setIsMobileMenuOpen(false)}>MANIFESTE</Link>
          <Link to="/events" className="text-3xl font-bold tracking-tighter" onClick={() => setIsMobileMenuOpen(false)}>EVENTS</Link>
          <Link to="/contact" className="text-3xl font-bold tracking-tighter underline underline-offset-8" onClick={() => setIsMobileMenuOpen(false)}>CONTACTS</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
