
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Cpu, 
  Layout, 
  Users, 
  Zap, 
  Building2, 
  Monitor, 
  ShieldCheck,
  AlertCircle,
  Quote,
  Search,
  ClipboardCheck,
  Calendar,
  Settings
} from 'lucide-react';

const UniqueOffer: React.FC = () => {
  return (
    <div className="pt-24 bg-surface min-h-screen">
      {/* 1. HERO SECTION (LE CROCHET) */}
      <section className="relative overflow-hidden pt-12 md:pt-20 pb-32">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: The Image */}
           

            {/* Right Column: The Content */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-10 md:pl-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-extrabold tracking-tighter leading-[0.9] text-balance text-black">
                  Activez le système d’exploitation de votre innovation.
                </h1>
                <p className="text-xl md:text-2xl text-muted font-light leading-relaxed italic max-w-2xl">
                  Installez votre Lab Natif : l'infrastructure physique et digitale qui transforme votre savoir-faire en avantage stratégique.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-6 pt-4">
                <Link 
                  to="/contact" 
                  className="group flex items-center gap-6 px-10 py-5 bg-black text-white rounded-full font-bold uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-xl hover:shadow-black/20"
                >
                  RÉSERVER MON DIAGNOSTIC <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Visual Decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03] pointer-events-none select-none">
          <span className="font-logo text-[40vw] font-black tracking-tighter absolute top-1/2 -translate-y-1/2 right-0 leading-none">§</span>
        </div>
      </section>

      {/* 2. L'AGITATION DU PROBLÈME (L’EMPATHIE) */}
      <section className="bg-white py-32 border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5 space-y-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-muted block">État des lieux</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight text-black">
                Le monde avance et vous ?
              </h2>
              <p className="text-lg text-muted leading-relaxed">
                Vos talents sont là. Donnez-leur l'environnement qu'ils méritent pour créer et décider en toute autonomie.
              </p>
              
              <div className="rounded-[3rem] overflow-hidden aspect-video shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1620206299258-ac415ce0f7d3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  className="w-full h-full object-cover grayscale"
                  alt="Complexité organisationnelle"
                />
              </div>

              <div className="pt-8">
                <Link to="/contact" className="group inline-flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-black border-b-2 border-black/10 pb-2 hover:border-black transition-all">
                  IDENTIFIER MES BLOCAGES STRUCTURELS <Search size={16} className="group-hover:translate-y-1 transition-transform" />
                </Link>
              </div>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Le Syndrome du Garage",
                  desc: "L'innovation est traitée comme un 'plus', faute d'un espace pour l'incarner au quotidien.",
                  icon: <Building2 className="text-muted" />
                },
                {
                  title: "L'Évaporation des idées",
                  desc: "Vos meilleures intuitions meurent entre deux e-mails car votre environnement n'est pas adapté.",
                  icon: <Zap className="text-muted" />
                },
                {
                  title: "La Dépendance aux prestataires",
                  desc: "Vous payez pour des rapports externes que vos équipes ne savent pas s'approprier.",
                  icon: <Users className="text-muted" />
                },
                {
                  title: "Blocage Structurel",
                  desc: "Ce n'est pas un manque d'idées qui vous bloque, c'est l'absence d'une infrastructure pour les faire exister.",
                  icon: <AlertCircle className="text-muted" />
                }
              ].map((item, i) => (
                <div key={i} className="p-10 rounded-[2.5rem] bg-surface border border-gray-50 space-y-6 group hover:border-black transition-colors">
                  <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-black">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. LA SOLUTION (L'OFFRE UNIQUE S9) */}
      <section className="container mx-auto px-6 py-32 bg-surface rounded-[5rem]">
        <div className="text-center space-y-6 mb-24">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-muted block">S9 Operating System</span>
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-tight text-black">Ne gérez plus l'innovation. Installez-la.</h2>
          <p className="text-xl text-muted max-w-3xl mx-auto italic">
            Possédez votre propre moteur d'innovation. Votre Lab Natif agit comme un écosystème complet conçu pour transformer vos intuitions en décisions stratégiques immédiates et autonomes. 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Pillar 1 - Cockpit de Décision */}
          <div className="p-12 bg-black text-white rounded-[4rem] relative overflow-hidden flex flex-col justify-between min-h-[550px] shadow-2xl border border-white/5">
            <div className="absolute inset-0 opacity-30 pointer-events-none">
              <img 
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80" 
                className="w-full h-full object-cover grayscale" 
                alt="Architecture de Pensée - Cockpit" 
              />
            </div>
            <div className="relative z-10 space-y-8">
              <div className="text-white">
                <Layout className="w-12 h-12" />
              </div>
              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted">Architecture de Pensée</span>
                <h3 className="text-3xl font-bold tracking-tighter">Le Cockpit de Décision</h3>
                <p className="text-gray-300 leading-relaxed italic">Un environnement visuel, physique et numérique, pour cartographier la complexité, utiliser le Foresight et décider en temps réel.</p>
              </div>
            </div>
          </div>

          {/* Pillar 2 - LAB HYBRIDE */}
          <div className="p-12 bg-white text-black rounded-[4rem] border border-gray-100 relative overflow-hidden flex flex-col justify-between min-h-[550px] shadow-xl">
             <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
               <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover grayscale" alt="Lab" />
            </div>
            <div className="relative z-10 space-y-8">
              <div className="text-black">
                <Monitor className="w-12 h-12" />
              </div>
              <div className="space-y-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted">Architecture Physique & Digitale</span>
                <h3 className="text-3xl font-bold tracking-tighter">L’Espace d'Action Hybride</h3>
                
                <div className="space-y-4 text-sm text-muted italic">
                  <p className="leading-relaxed"><strong className="text-accent">Le Lab Physique :</strong> Un espace conçu sur-mesure dans vos murs pour sortir du mode "bureau" et entrer en mode "conception".</p>
                  
                  <div className="flex items-center gap-4 py-2">
                    <div className="h-px flex-grow bg-gray-100"></div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted shrink-0">ou/et</span>
                    <div className="h-px flex-grow bg-gray-100"></div>
                  </div>
                  
                  <p className="leading-relaxed"><strong className="text-accent">Le Lab Digital :</strong> Une infrastructure miroir configurée pour la pensée visuelle, le prototypage rapide et la continuité.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 3 - PROTOCOLE */}
          <div className="p-12 bg-black text-white rounded-[4rem] relative overflow-hidden flex flex-col justify-between min-h-[550px] shadow-2xl">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover grayscale" alt="Protocole" />
            </div>
            <div className="relative z-10 space-y-8">
              <div className="text-white">
                <Cpu className="w-12 h-12" />
              </div>
              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted">Architecture Humaine</span>
                <h3 className="text-3xl font-bold tracking-tighter">Le Protocole d’Émergence</h3>
                <p className="text-gray-300 leading-relaxed italic">Une méthode d'action située et des rituels de travail qui rendent vos équipes autonomes dès le premier jour.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Link to="/contact" className="group flex items-center gap-6 px-12 py-6 bg-black text-white rounded-full font-bold uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-xl">
            CONFIGURER MON LAB NATIF <Settings size={20} className="group-hover:rotate-90 transition-transform duration-500" />
          </Link>
        </div>
      </section>

      {/* 4. LA MÉTHODOLOGIE (INSTALLATION EN 3 TEMPS) */}
      <section className="bg-surface py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20 items-end">
            <div className="space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-muted block">Le Process</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight text-black">Installation en 3 temps, sans friction.</h2>
            </div>
            <div className="space-y-6">
              <div className="h-40 w-full rounded-[2rem] overflow-hidden grayscale opacity-50">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" alt="Methodologie Blueprint" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 border border-gray-200 rounded-[3rem] overflow-hidden shadow-2xl mb-16 text-black">
            {[
              {
                step: "01",
                title: "Diagnostic de Capacité",
                desc: "Analyse de vos flux de décision et cartographie de votre 'langage de conception'. Nous définissons l'architecture idéale de votre futur Lab hybride."
              },
              {
                step: "02",
                title: "Le Build",
                desc: "Aménagement de votre espace physique et configuration de vos outils digitaux (votre OS propriétaire). Installation des rituels de création."
              },
              {
                step: "03",
                title: "L’Activation",
                desc: "Nous pilotons avec vous votre premier projet stratégique au sein de ce nouvel environnement pour 'roder' la machine."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-12 space-y-8 group hover:bg-surface transition-colors">
                <span className="text-4xl font-black text-gray-100 group-hover:text-black transition-colors">{item.step}</span>
                <div className="space-y-4">
                  <h4 className="text-2xl font-bold tracking-tight">{item.title}</h4>
                  <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Link to="/contact" className="group flex items-center gap-6 px-10 py-5 border-2 border-black rounded-full font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">
              PLANIFIER L'INSTALLATION <Calendar size={18} className="group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. LA PREUVE SOCIALE (LA RÉASSURANCE) */}
      <section className="container mx-auto px-6 py-40">
        <div className="max-w-5xl mx-auto bg-white p-12 md:p-24 rounded-[5rem] border border-gray-100 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 opacity-5 rotate-12 -translate-y-12 translate-x-12 text-black">
            <Quote className="w-full h-full" />
          </div>
          <div className="relative z-10 space-y-12 text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight text-black">
              Dans un monde qui sature, la technique seule ne suffit plus à vous différencier. Nous bâtissons votre infrastructure de création hybride pour réintégrer l’humain, l’usage et la pratique au cœur de votre stratégie. Nous ne vous rendons pas seulement innovants, nous vous rendons autonomes. Ne gérez plus le changement, installez le système qui le produit.
            </h2>
            <div className="space-y-6">
              <div className="text-black">
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* 6. APPEL À L'ACTION (LE FINAL) */}
      <section className="container mx-auto px-6 py-20 pb-40">
        <div className="bg-black text-white rounded-[5rem] p-12 md:p-32 text-center relative overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.2)]">
          <div className="relative z-10 space-y-12">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-[0.9] max-w-5xl mx-auto">
              Prêt à transformer votre structure en machine à créer ?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed italic">
              L'innovation souveraine ne commence pas par une idée, mais par un environnement de travail. Discutons de la configuration de votre futur Lab Natif.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
              <Link 
                to="/contact" 
                className="group flex items-center justify-center gap-6 px-12 py-6 bg-white text-black rounded-full font-bold uppercase tracking-[0.2em] hover:scale-105 transition-transform"
              >
                Demander une session stratégique <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-muted">
              <ShieldCheck className="inline-block mr-2" size={14} /> Diagnostic d'infrastructure offert
            </p>
          </div>
          
          <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center select-none">
            <span className="font-logo text-[45vw] font-black tracking-tighter leading-none">§</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UniqueOffer;
