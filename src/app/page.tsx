
"use client";

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Menu, X, Code, Palette, Database, Smartphone, ChevronRight } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('accueil');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
    { id: 'experience', label: 'Expérience' },
    { id: 'competences', label: 'Compétences' },
    { id: 'projets', label: 'Projets' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' }
  ];

  const experiences = [
    {
      poste: "Développeur Web Full Stack",
      entreprise: "Bakkrô SARL",
      periode: "Janvier 2025 - Août 2025",
      technologies: "Next.js, Supabase",
      description: "Développement d'applications web performantes avec Next.js"
    },
    {
      poste: "Stage Développeur Web Full Stack",
      entreprise: "Bakkrô SARL",
      periode: "Juillet 2024 - Janvier 2025",
      technologies: "Next.js, Github",
      description: "Mise en œuvre de solutions web modernes"
    },
    {
      poste: "Stage UI/UX DESIGN",
      entreprise: "Rayessi SARL",
      periode: "Octobre 2023 - Décembre 2023",
      technologies: "Figma",
      description: "Conception d'interfaces utilisateur intuitives"
    },
    {
      poste: "Stage Développeur Web/Mobile",
      entreprise: "Simplon Ci",
      periode: "Juillet 2023 - Septembre 2023",
      technologies: "PHP, MySQL",
      description: "Développement d'applications web et mobiles"
    }
  ];

  const competences = {
    frontend: ['HTML', 'CSS', 'JavaScript', 'Next.js', 'React'],
    backend: ['PHP', 'Laravel', 'Node.js'],
    mobile: ['Flutter'],
    database: ['MySQL', 'Supabase'],
    tools: ['GitHub', 'Figma', 'Git']
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

          <div className="grid md:grid-cols-2 gap-8">
            <div className="backdrop-blur-lg bg-white/5 rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">Mon Parcours</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Fort d'une solide expérience en développement Fullstack et en web design, 
                je dispose des compétences nécessaires pour mener à bien vos projets numériques.
              </p>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  desireyeo348@gmail.com
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +225 05 56 47 44 21
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Abidjan, Côte d'Ivoire
                </p>
              </div>
            </div>

            <div className="backdrop-blur-lg bg-white/5 rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">Compétences Transversales</h3>
              <ul className="space-y-3">
                {['Bon sens de communication', 'Travail en équipe', 'Capacités d\'analyse', 'Autodidacte'].map((skill, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <ChevronRight className="w-5 h-5 text-purple-400" />
                    {skill}
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Centres d'Intérêts</h3>
              <div className="flex flex-wrap gap-2">
                {['Art Martial (Kung-fu wushu)', 'Lectures', 'Voyages'].map((interest, i) => (
                  <span key={i} className="px-4 py-2 rounded-full bg-white/10 text-sm">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expérience Section */}
      <section id="experience" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Parcours Professionnel
          </h2>

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="backdrop-blur-lg bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-purple-300">{exp.poste}</h3>
                    <p className="text-gray-300">{exp.entreprise}</p>
                  </div>
                  <span className="text-sm text-gray-400 mt-2 md:mt-0">{exp.periode}</span>
                </div>
                <p className="text-gray-400 mb-3">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.split(', ').map((tech, j) => (
                    <span key={j} className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compétences Section */}
      <section id="competences" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Compétences Techniques
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(competences).map(([category, skills]) => (
              <div
                key={category}
                className="backdrop-blur-lg bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-4 capitalize text-purple-300">
                  {category === 'frontend' && 'Frontend'}
                  {category === 'backend' && 'Backend'}
                  {category === 'mobile' && 'Mobile'}
                  {category === 'database' && 'Base de Données'}
                  {category === 'tools' && 'Outils'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-2 rounded-lg bg-white/10 text-sm hover:bg-white/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
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
