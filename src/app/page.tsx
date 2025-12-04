"use client";

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Menu, X, Code, Palette, Database, Smartphone, ChevronRight, Monitor } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('accueil');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSkillTab, setActiveSkillTab] = useState('mobile');

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const navItems = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'apropos', label: 'À propos' },
    { id: 'competences', label: 'Compétences' },
    { id: 'projets', label: 'Projets' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' }
  ];

  
  const competences = {
    mobile: {
      title: 'Développement Mobile',
      subtitle: 'Spécialisation en applications cross-platform',
      icon: Smartphone,
      skills: [
        { name: 'Flutter', experience: '1+ ans' },
        { name: 'Android Native', experience: 'Débutant' },
      ]
    },
    web: {
      title: 'Développement Web',
      subtitle: 'Création d\'applications web modernes',
      icon: Monitor,
      skills: [
        { name: 'Php', experience: '2+ ans' },
        { name: 'JavaScript', experience: '2+ ans' },
        { name: 'Tailwind css', experience: '2 ans' },
        { name: 'Html', experience: '2+ ans' },
        { name: 'Css', experience: '2+ ans' }

      ]
    }
  };

  const projets = [
    {
      titre: "Application E-commerce",
      description: "Plateforme de vente en ligne complète avec gestion des paiements",
      technologies: ["Next.js", "Supabase", "Stripe"],
      github: "https://github.com/desireyeo",
      demo: "#"
    },
    {
      titre: "Dashboard Analytics",
      description: "Interface de visualisation de données en temps réel",
      technologies: ["React", "D3.js", "Node.js"],
      github: "https://github.com/desireyeo",
      demo: "#"
    },
    {
      titre: "Application Mobile Fitness",
      description: "App de suivi d'entraînement et nutrition",
      technologies: ["Flutter", "Firebase"],
      github: "https://github.com/desireyeo",
      demo: "#"
    }
  ];

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      titre: "Développement Web",
      description: "Création de sites web modernes et performants avec les dernières technologies"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      titre: "Développement Mobile",
      description: "Applications mobiles cross-platform avec Flutter"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      titre: "UI/UX Design",
      description: "Conception d'interfaces utilisateur intuitives et attractives"
    },
    {
      icon: <Database className="w-8 h-8" />,
      titre: "Base de Données",
      description: "Architecture et gestion de bases de données optimisées"
    }
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
          style={{
            top: `${mousePosition.y / 10}px`,
            left: `${mousePosition.x / 10}px`,
          }}
        />
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 top-0 right-0" />
        <div className="absolute w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 bottom-0 left-0" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              DY
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-1">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-white/20 backdrop-blur-sm'
                      : 'hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden backdrop-blur-xl bg-slate-900/95 border-t border-white/10">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 hover:bg-white/10 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Accueil Section */}
      <section id="accueil" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-4xl text-center space-y-8">
          <div className="relative inline-block">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse mx-auto mb-8" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              YEO GUÉKOURGOLA LAURENT DÉSIRÉ
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300">
            Développeur Web/Mobile Full Stack
          </p>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Passionné par la création d'expériences numériques innovantes, j'allie créativité, 
            rigueur et compétences techniques pour concevoir des solutions performantes.
          </p>

          <div className="flex justify-center space-x-6 pt-8">
            <a
              href="https://linkedin.com/in/votre-profil"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/desireyeo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="mailto:desireyeo348@gmail.com"
              className="p-3 rounded-full backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <button
            onClick={() => scrollToSection('contact')}
            className="mt-8 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50"
          >
            Me Contacter
          </button>
        </div>
      </section>

      {/* À propos Section */}
      <section id="apropos" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            À propos de moi
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Qui suis-je ? */}
            <div className="backdrop-blur-lg bg-white/5 rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-3xl font-bold mb-8">Qui suis-je ?</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <h4 className="text-xl font-semibold text-white">Localisation</h4>
                  </div>
                  <p className="text-gray-400 ml-8">Abidjan, Côte d'Ivoire</p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-5 h-5 text-gray-400">📚</div>
                    <h4 className="text-xl font-semibold text-white">Formation</h4>
                  </div>
                  <p className="text-gray-300 ml-8 font-medium">Licence en Informatique Développeur d'Application</p>
                  <p className="text-gray-400 ml-8 text-sm">École supérieure des hautes études technologiques</p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-5 h-5 text-gray-400">💼</div>
                    <h4 className="text-xl font-semibold text-white">Expérience</h4>
                  </div>
                  <p className="text-gray-300 ml-8 font-medium">3+ années en développement Full-Stack</p>
                  <p className="text-gray-400 ml-8 text-sm">Spécialisé en architecture logicielle et mobile</p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-5 h-5 text-gray-400">❤️</div>
                    <h4 className="text-xl font-semibold text-white">Passion</h4>
                  </div>
                  <p className="text-gray-400 ml-8">Innovation technologique et solutions créatives</p>
                </div>
              </div>
            </div>

            {/* Valeurs */}
            <div className="space-y-6">
              <div className="backdrop-blur-lg bg-white/5 rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0">
                    <Code className="w-7 h-7 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-3">Innovation</h4>
                    <p className="text-gray-400 leading-relaxed">
                      J'adopte les technologies émergentes comme Flutter et React pour créer des solutions modernes et performantes qui répondent aux défis actuels.
                    </p>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-lg bg-white/5 rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <div className="text-3xl">⚡</div>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-3">Performance</h4>
                    <p className="text-gray-400 leading-relaxed">
                      Optimisation constante des architectures et du code pour des applications rapides, scalables et efficaces en production.
                    </p>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-lg bg-white/5 rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <div className="text-3xl">👥</div>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-3">Collaboration</h4>
                    <p className="text-gray-400 leading-relaxed">
                      Travail en équipe agile avec une communication transparente pour livrer des projets qui dépassent les attentes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compétences Section - NOUVELLE VERSION */}
      <section id="competences" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Compétences Techniques
          </h2>
          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {Object.entries(competences).map(([key, data]) => {
              const Icon = data.icon;
              return (
                <button
                  key={key}
                  onClick={() => setActiveSkillTab(key)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-full border-2 transition-all duration-300 ${
                    activeSkillTab === key
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white border-purple-400'
                      : 'bg-white/5 text-white border-white/20 hover:border-purple-400 hover:bg-white/10'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{data.title}</span>
                </button>
              );
            })}
          </div>

          {/* Content */}
          <div className="backdrop-blur-lg bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10">
            {Object.entries(competences).map(([key, data]) => {
              const Icon = data.icon;
              return (
                activeSkillTab === key && (
                  <div key={key} className="space-y-8">
                    {/* Header */}
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-purple-500/20 rounded-xl border border-purple-400/30">
                        <Icon size={32} className="text-purple-300" />
                      </div>
                      <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                          {data.title}
                        </h2>
                        <p className="text-gray-300 text-lg">
                          {data.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                      {data.skills.map((skill, index) => (
                        <div
                          key={index}
                          className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-purple-400/50"
                        >
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="text-xl font-semibold text-white">
                              {skill.name}
                            </h3>
                            <span className="text-sm px-3 py-1 rounded-full bg-purple-500/30 text-purple-200 border border-purple-400/50">
                              {skill.experience}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </section>

      {/* Projets Section */}
      <section id="projets" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Projets Récents
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projets.map((projet, i) => (
              <div
                key={i}
                className="backdrop-blur-lg bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 flex flex-col"
              >
                <h3 className="text-xl font-bold mb-3 text-purple-300">{projet.titre}</h3>
                <p className="text-gray-400 mb-4 flex-grow">{projet.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {projet.technologies.map((tech, j) => (
                    <span key={j} className="px-2 py-1 rounded bg-purple-500/20 text-purple-300 text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={projet.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-sm"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={projet.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 transition-colors text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Services
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-purple-300">{service.titre}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Contactez-moi
          </h2>

          <div className="backdrop-blur-lg bg-white/5 rounded-3xl p-8 border border-white/10">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-4">Informations</h3>
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <a href="mailto:desireyeo348@gmail.com" className="hover:text-purple-400 transition-colors">
                    desireyeo348@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <a href="tel:+2250556474421" className="hover:text-purple-400 transition-colors">
                    +225 05 56 47 44 21
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span>Abidjan, Côte d'Ivoire</span>
                </div>

                <div className="flex gap-4 pt-4">
                  <a
                    href="https://linkedin.com/in/votre-profil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://github.com/desireyeo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Nom"
                  className="w-full px-4 py-3 rounded-lg backdrop-blur-sm bg-white/10 border border-white/20 focus:border-purple-400 outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg backdrop-blur-sm bg-white/10 border border-white/20 focus:border-purple-400 outline-none transition-colors"
                />
                <textarea
                  placeholder="Message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg backdrop-blur-sm bg-white/10 border border-white/20 focus:border-purple-400 outline-none transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                >
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="backdrop-blur-md bg-white/5 border-t border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2025 Désiré Yeo. Tous droits réservés.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}