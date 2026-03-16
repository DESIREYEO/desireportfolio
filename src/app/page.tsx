"use client";

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Menu, X, Code, Smartphone, Monitor } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('accueil');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSkillTab, setActiveSkillTab] = useState('web');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
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
    web: {
      title: 'Développement Web',
      subtitle: 'Création d\'applications web modernes',
      icon: Monitor,
      skills: [
        { name: 'Php', experience: '2+ ans' },
        { name: 'JavaScript', experience: '2+ ans' },
        { name: 'Tailwind CSS', experience: '2 ans' },
        { name: 'Html', experience: '2+ ans' },
        { name: 'Next js', experience: '2 ans' },
        { name: 'Laravel', experience: '2 ans' }
      ]
    },
    mobile: {
      title: 'Développement Mobile',
      subtitle: 'Spécialisation en applications cross-platform',
      icon: Smartphone,
      skills: [
        { name: 'Flutter', experience: '1 ans' },
        { name: 'Android Native', experience: 'Débutant' },
      ]
    },
    devops: {
      title: 'DevOps & Architecture',
      subtitle: 'Déploiement et gestion d\'infrastructure',
      icon: Code,
      skills: [
        { name: 'Git/GitHub', experience: '3+ ans' },
        { name: 'Supabase', experience: '2 ans' },
        { name: 'Vercel', experience: '2 ans' },
        { name: 'CI/CD', experience: '2 ans' }
      ]
    }
  };

  const projets = [
    {
      titre: "XhSkillsAcademy",
      description: "Plateforme de formation pour les agrnts de santé aves un dashbord pour les instructeurs, apprenants et administrateur XhSkillsAcademy",
      technologies: ["Laravel", "Mysql", "Tailwind CSS", "Github"],
      image: "/images/xhskills.png",
      github: "https://github.com/DESIREYEO",
      demo: "https://xhskillsacademy.com/"
    },
    {
      titre: "Souclou Côte d'ivoire",
      description: "Plateforme de mise en rélation entre agence de cours a domicile et parents d'élèves avec dashboard de gestion des activités des agences",
      technologies: ["Laravel", "Mysql", "Tailwind CSS", "Github"],
      image: "/images/souclou.png",
      github: "https://github.com/DESIREYEO",
      demo: "https://souclou.ci/"
    },
    {
      titre: "Maitre de maison côte d'ivoire",
      description: "Plateforme de mise en rélation entre parents d'élèves et répétiteurs avec un dashboard de gestion",
      technologies: ["Laravel", "Mysql", "Tailwind CSS", "Github"],
      image: "/images/mdm.png",
      github: "https://github.com/DESIREYEO",
      demo: "https://maitredemaison.ci/"
    },
    {
      titre: "Bakkrô",
      description: "Application immobilière de vente et de location de maisons avec possibilité de visite a distance en 3D",
      technologies: ["Next js", "Supabase", "Tailwind CSS", "Github"],
      image: "/images/bakkro.png",
      github: "https://github.com/DESIREYEO",
      demo: "https://xn--bakkr-bua.com/"
    },
    {
      titre: "Xhub",
      description: "Plateforme web de gestion de rservations d'espace de burreaux et espace coworking",
      technologies: ["Laravel", "Mysql", "Tailwind CSS", "Github"],
      image: "/images/xhub.png",
      github: "https://github.com/DESIREYEO",
      demo: "https://github.com/DESIREYEO"
    },
    {
      titre: "Y_Gestion",
      description: "Plateforme web de gestion d'employés avec deux type d'utilisateurs Administrateur et employés",
      technologies: ["Php", "Mysql", "Html", "Css"],
      image: "/images/ygestion.png",
      github: "https://github.com/DESIREYEO",
      demo: "https://github.com/DESIREYEO"
    },
    {
      titre: "LinkedinLocal",
      description: "Plateforme web de vote en ligne dont l'objectif est de faire la promotion des personnalités du web en côte d'ivoire",
      technologies: ["Php", "Mysql", "Html", "Css"],
      image: "/images/linkedinlocal.png",
      github: "https://github.com/DESIREYEO",
      demo: "https://github.com/DESIREYEO"
    },
    {
      titre: "Todo",
      description: "Todo est une application mobile de gestion de tâches",
      technologies: ["Flutter", "Mysql"],
      image: "/images/todo.png",
      github: "https://github.com/DESIREYEO",
      demo: "https://github.com/DESIREYEO"
    }
  ];

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      titre: "Développement sur mesure",
      description: "Applications web et mobile conçues selon vos besoins spécifiques",
      features: ["Interface utilisateur moderne", "Backend robuste", "Base de données optimisée"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      titre: "Solutions mobiles",
      description: "Applications natives et cross-platform pour iOS et Android",
      features: ["Flutter", "PWA", "App Store deployment"]
    }
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setFormStatus({
          type: 'success',
          message: 'Message envoyé avec succès ! Je vous répondrai bientôt.'
        });
        setFormData({ name: '', email: '', service: '', message: '' });
      } else {
        setFormStatus({
          type: 'error',
          message: data.error || 'Une erreur est survenue. Veuillez réessayer.'
        });
      }
    } catch {
      setFormStatus({
        type: 'error',
        message: 'Erreur de connexion. Veuillez réessayer plus tard.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const delayClass = (n: number) => `reveal-delay-${n}`;

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-5 animate-blob"
          style={{
            top: `${mousePosition.y / 10}px`,
            left: `${mousePosition.x / 10}px`,
          }}
        />
        <div className="absolute w-96 h-96 bg-gray-400 rounded-full mix-blend-overlay filter blur-3xl opacity-5 animate-blob animation-delay-2000 top-0 right-0" />
        <div className="absolute w-96 h-96 bg-gray-600 rounded-full mix-blend-overlay filter blur-3xl opacity-5 animate-blob animation-delay-4000 bottom-0 left-0" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/80 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-white">
              DY
            </div>
            <div className="hidden md:flex space-x-1">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-white text-black'
                      : 'hover:bg-gray-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden backdrop-blur-xl bg-black/95 border-t border-gray-800">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 hover:bg-gray-800 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Accueil Section */}
      <section id="accueil" className="min-h-screen flex items-center justify-center px-4 pt-20 md:pt-16">
        <div className="reveal max-w-4xl text-center space-y-6 md:space-y-8">
          <div className="relative inline-block">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-white/20 mx-auto mb-4 md:mb-6 bg-gradient-to-br from-white to-gray-400 p-1">
              <img
                src="/images/profile.png"
                alt="Désiré Yeo"
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement?.classList.add('animate-pulse');
                }}
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-7xl font-bold mb-4">
            <span className="text-white">YEO LAURENT DÉSIRÉ</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-400">
            Développeur Web/Mobile Full Stack
          </p>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
            Passionné par la création d'expériences numériques innovantes, j'allie créativité,
            rigueur et compétences techniques pour concevoir des solutions performantes.
          </p>
          <div className="flex justify-center space-x-4 md:space-x-6 pt-6 md:pt-8">
            <a
              href="https://www.linkedin.com/in/laurent-desire-yeo-48903923a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full backdrop-blur-sm bg-gray-800 hover:bg-white hover:text-black transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a
              href="https://github.com/DESIREYEO"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full backdrop-blur-sm bg-gray-800 hover:bg-white hover:text-black transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a
              href="mailto:desireyeo348@gmail.com"
              className="p-3 rounded-full backdrop-blur-sm bg-gray-800 hover:bg-white hover:text-black transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </div>
          <button
            onClick={() => scrollToSection('contact')}
            className="mt-6 md:mt-8 px-6 md:px-8 py-3 md:py-4 rounded-full bg-white text-black hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium"
          >
            Me Contacter
          </button>
        </div>
      </section>

      {/* À propos Section */}
      <section id="apropos" className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16">
        <div className="max-w-6xl w-full">
          <h2 className="reveal text-3xl md:text-5xl font-bold text-center mb-10 md:mb-16 text-white">
            À propos de moi
          </h2>
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            {/* Qui suis-je ? */}
            <div className="reveal reveal-left reveal-delay-1 backdrop-blur-lg bg-gray-900/50 rounded-3xl p-6 md:p-8 border border-gray-800 hover:bg-gray-900/70 transition-all duration-300">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Qui suis-je ?</h3>
              <div className="space-y-5 md:space-y-6">
                <p className="text-gray-300 leading-relaxed">Je dispose d&apos;une solide expérience en développement Fullstack et en web design. J&apos;allie créativité, rigueur et compétences techniques afin de concevoir des solutions performantes et adaptées aux besoins des utilisateurs.</p>
                <div>
                  <div className="flex items-center gap-3 mb-2 md:mb-3">
                    <div className="w-5 h-5 text-gray-400">📚</div>
                    <h4 className="text-lg md:text-xl font-semibold text-white">Formation</h4>
                  </div>
                  <p className="text-gray-300 ml-8 font-medium text-sm md:text-base">Formation Professionnel en Développement Web/Mobile</p>
                  <p className="text-gray-400 ml-8 text-xs md:text-sm">Simplon côte d'ivoire</p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2 md:mb-3">
                    <div className="w-5 h-5 text-gray-400">💼</div>
                    <h4 className="text-lg md:text-xl font-semibold text-white">Expérience</h4>
                  </div>
                  <p className="text-gray-300 ml-8 font-medium text-sm md:text-base">2+ années en développement Full-Stack</p>
                  <p className="text-gray-400 ml-8 text-xs md:text-sm">Spécialisé en dévéloppement web et mobile</p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2 md:mb-3">
                    <div className="w-5 h-5 text-gray-400">❤️</div>
                    <h4 className="text-lg md:text-xl font-semibold text-white">Passion</h4>
                  </div>
                  <p className="text-gray-400 ml-8 text-sm md:text-base">Innovation technologique et solutions créatives</p>
                </div>
              </div>
            </div>

            {/* Valeurs */}
            <div className="space-y-4 md:space-y-6">
              <div className="reveal reveal-right reveal-delay-2 backdrop-blur-lg bg-gray-900/50 rounded-3xl p-6 md:p-8 border border-gray-800 hover:bg-gray-900/70 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gray-800 flex items-center justify-center flex-shrink-0">
                    <Code className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Innovation</h4>
                    <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                      J'adopte les technologies émergentes comme Flutter et React pour créer des solutions modernes et performantes qui répondent aux défis actuels.
                    </p>
                  </div>
                </div>
              </div>
              <div className="reveal reveal-right reveal-delay-3 backdrop-blur-lg bg-gray-900/50 rounded-3xl p-6 md:p-8 border border-gray-800 hover:bg-gray-900/70 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gray-800 flex items-center justify-center flex-shrink-0">
                    <div className="text-2xl md:text-3xl">⚡</div>
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Performance</h4>
                    <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                      Optimisation constante des architectures et du code pour des applications rapides, scalables et efficaces en production.
                    </p>
                  </div>
                </div>
              </div>
              <div className="reveal reveal-right reveal-delay-4 backdrop-blur-lg bg-gray-900/50 rounded-3xl p-6 md:p-8 border border-gray-800 hover:bg-gray-900/70 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gray-800 flex items-center justify-center flex-shrink-0">
                    <div className="text-2xl md:text-3xl">👥</div>
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Collaboration</h4>
                    <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                      Travail en équipe agile avec une communication transparente pour livrer des projets qui dépassent les attentes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compétences Section */}
      <section id="competences" className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16">
        <div className="max-w-6xl w-full">
          <h2 className="reveal text-3xl md:text-5xl font-bold text-center mb-10 md:mb-16 text-white">
            Compétences Techniques
          </h2>
          <div className="reveal reveal-delay-1 flex justify-center gap-3 md:gap-4 mb-8 md:mb-12 flex-wrap">
            {Object.entries(competences).map(([key, data]) => {
              const Icon = data.icon;
              return (
                <button
                  key={key}
                  onClick={() => setActiveSkillTab(key)}
                  className={`flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 rounded-full border-2 transition-all duration-300 text-sm md:text-base ${
                    activeSkillTab === key
                      ? 'bg-white text-black border-white'
                      : 'bg-gray-900 text-white border-gray-800 hover:border-white hover:bg-gray-800'
                  }`}
                >
                  <Icon size={18} className="md:w-5 md:h-5" />
                  <span className="font-medium">{data.title}</span>
                </button>
              );
            })}
          </div>
          <div className="reveal reveal-delay-2 backdrop-blur-lg bg-gray-900/50 rounded-3xl p-6 md:p-12 border border-gray-800">
            {Object.entries(competences).map(([key, data]) => {
              const Icon = data.icon;
              return (
                activeSkillTab === key && (
                  <div key={key} className="space-y-6 md:space-y-8">
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="p-2 md:p-3 bg-gray-800 rounded-xl border border-gray-700">
                        <Icon size={24} className="md:w-8 md:h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-4xl font-bold mb-1 md:mb-2 text-white">
                          {data.title}
                        </h2>
                        <p className="text-gray-400 text-base md:text-lg">
                          {data.subtitle}
                        </p>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 md:gap-6 mt-6 md:mt-8">
                      {data.skills.map((skill, index) => (
                        <div
                          key={index}
                          className="bg-gray-800/50 rounded-2xl p-4 md:p-6 hover:bg-gray-800 transition-all duration-300 border border-gray-700 hover:border-white"
                        >
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="text-lg md:text-xl font-semibold text-white">
                              {skill.name}
                            </h3>
                            <span className="text-xs md:text-sm px-2 md:px-3 py-1 rounded-full bg-gray-700 text-gray-300 border border-gray-600">
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
      <section id="projets" className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16">
        <div className="max-w-6xl w-full">
          <h2 className="reveal text-3xl md:text-5xl font-bold text-center mb-10 md:mb-16 text-white">
            Projets Récents
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {projets.map((projet, i) => (
              <div
                key={i}
                className={`reveal ${delayClass((i % 3) + 1)} backdrop-blur-lg bg-gray-900/50 rounded-2xl border border-gray-800 hover:bg-gray-900/70 transition-all duration-300 hover:scale-105 flex flex-col overflow-hidden group`}
              >
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <img
                    src={projet.image}
                    alt={projet.titre}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
                </div>
                <div className="p-5 md:p-6 flex flex-col flex-grow">
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white">{projet.titre}</h3>
                  <p className="text-gray-400 mb-3 md:mb-4 flex-grow text-sm md:text-base">{projet.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                    {projet.technologies.map((tech, j) => (
                      <span key={j} className="px-2 py-1 rounded bg-gray-800 text-gray-300 text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 justify-center">
                    <a
                      href={projet.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors text-xs md:text-sm"
                    >
                      <Github className="w-3 h-3 md:w-4 md:h-4" />
                      Code
                    </a>
                    <a
                      href={projet.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg bg-white text-black hover:bg-gray-200 transition-colors text-xs md:text-sm"
                    >
                      <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16">
        <div className="max-w-6xl w-full">
          <h2 className="reveal text-3xl md:text-5xl font-bold text-center mb-10 md:mb-16 text-white">
            Services
          </h2>
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className={`reveal ${delayClass(i + 1)} backdrop-blur-lg bg-gray-900/50 rounded-2xl p-6 md:p-8 border border-gray-800 hover:bg-gray-900/70 transition-all duration-300 hover:scale-105`}
              >
                <div className="flex items-start gap-4 md:gap-6 mb-5 md:mb-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gray-800 flex items-center justify-center flex-shrink-0 border border-gray-700">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">{service.titre}</h3>
                    <p className="text-gray-400 text-sm md:text-base">{service.description}</p>
                  </div>
                </div>
                <ul className="space-y-2 md:space-y-3 ml-2">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                      <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16">
        <div className="max-w-6xl w-full">
          <div className="reveal text-center mb-6 md:mb-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 text-white">
              Contact
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
              Prêt à donner vie à votre projet ? Contactez-moi pour discuter de vos besoins en développement web et mobile
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Left Side */}
            <div className="reveal reveal-left reveal-delay-1 backdrop-blur-lg bg-gray-900/50 rounded-3xl p-6 md:p-8 border border-gray-800 space-y-6 md:space-y-8">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Travaillons ensemble</h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  En tant que développeur Full-Stack basé à Abidjan, je combine expertise technique et compréhension des enjeux locaux pour créer des solutions innovantes adaptées à vos besoins.
                </p>
              </div>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-gray-800/50 border border-gray-800 hover:bg-gray-800 transition-all duration-300">
                  <div className="p-2 rounded-lg bg-gray-700">
                    <Phone className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-gray-400 mb-1">Téléphone</p>
                    <a href="tel:+2250556474421" className="text-white hover:text-gray-300 transition-colors font-medium text-sm md:text-base">
                      +225 05 56 47 44 21
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-gray-800/50 border border-gray-800 hover:bg-gray-800 transition-all duration-300">
                  <div className="p-2 rounded-lg bg-gray-700">
                    <Mail className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-gray-400 mb-1">Email</p>
                    <a href="mailto:desireyeo348@gmail.com" className="text-white hover:text-gray-300 transition-colors font-medium text-sm md:text-base">
                      desireyeo348@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-gray-800/50 border border-gray-800 hover:bg-gray-800 transition-all duration-300">
                  <div className="p-2 rounded-lg bg-gray-700">
                    <Linkedin className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-gray-400 mb-1">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/laurent-desire-yeo-48903923a/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors font-medium text-sm md:text-base">
                      Laurent Désiré Yeo
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-gray-800/50 border border-gray-800 hover:bg-gray-800 transition-all duration-300">
                  <div className="p-2 rounded-lg bg-gray-700">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-gray-400 mb-1">Localisation</p>
                    <p className="text-white font-medium text-sm md:text-base">Abidjan, Côte d'Ivoire</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="reveal reveal-right reveal-delay-2 backdrop-blur-lg bg-gray-900/50 rounded-3xl p-6 md:p-8 border border-gray-800">
              <h3 className="text-xl md:text-2xl font-bold mb-5 md:mb-6">Envoyez-moi un message</h3>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                {formStatus.message && (
                  <div className={`p-3 md:p-4 rounded-xl border text-sm md:text-base ${
                    formStatus.type === 'success'
                      ? 'bg-green-500/10 border-green-500/50 text-green-300'
                      : 'bg-red-500/10 border-red-500/50 text-red-300'
                  }`}>
                    {formStatus.message}
                  </div>
                )}
                <div>
                  <label className="block text-xs md:text-sm text-gray-300 mb-2">Nom complet</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Votre nom complet"
                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-xl backdrop-blur-sm bg-gray-800/50 border border-gray-700 focus:border-white outline-none transition-colors text-white placeholder-gray-500 text-sm md:text-base"
                  />
                </div>
                <div>
                  <label className="block text-xs md:text-sm text-gray-300 mb-2">Adresse email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="votre@email.com"
                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-xl backdrop-blur-sm bg-gray-800/50 border border-gray-700 focus:border-white outline-none transition-colors text-white placeholder-gray-500 text-sm md:text-base"
                  />
                </div>
                <div>
                  <label className="block text-xs md:text-sm text-gray-300 mb-2">Service</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-xl backdrop-blur-sm bg-gray-800/50 border border-gray-700 focus:border-white outline-none transition-colors text-white text-sm md:text-base"
                  >
                    <option value="" className="bg-black">Sélectionnez un service</option>
                    <option value="web" className="bg-black">Développement Web</option>
                    <option value="mobile" className="bg-black">Développement Mobile</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs md:text-sm text-gray-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Décrivez votre projet ou vos besoins..."
                    rows={5}
                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-xl backdrop-blur-sm bg-gray-800/50 border border-gray-700 focus:border-white outline-none transition-colors resize-none text-white placeholder-gray-500 text-sm md:text-base"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl bg-white text-black hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-sm md:text-base"
                >
                  <Mail className="w-4 h-4 md:w-5 md:h-5" />
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="backdrop-blur-md bg-gray-900/50 border-t border-gray-800 py-6 md:py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400 text-sm md:text-base">
          <p>&copy; 2025 Désiré Yeo. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
