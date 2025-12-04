"use client";

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Menu, X, Code, Palette, Database, Smartphone, ChevronRight, Monitor } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('accueil');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSkillTab, setActiveSkillTab] = useState('mobile');
  
  // État pour le formulaire
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      titre: "Maitre de maison côte d'ivoire",
      description: "Plateforme de mise en rélation entre parents d'élèves et répétiteurs",
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
      technologies: ["Laravel", "Mysql", "Tailwind CSS","Github"  ],
      image: "/images/xhub.png",
      github: "https://github.com/DESIREYEO",
      demo: "https://github.com/DESIREYEO"
    },

    {
      titre: "Y_Gestion",
      description: "Plateforme web de gestion d'employés avec deux type d'utilisateurs Administrateur et employés",
      technologies: ["Php", "Mysql", "Html", "Css" ],
      image: "/images/ygestion.png",
      github: "https://github.com/DESIREYEO",
      demo: "https://github.com/DESIREYEO"
    },

    {
      titre: "LinkedinLocal",
      description: "Plateforme web de vote en ligne dont l'objectif est de faire la promotion des personnalités du web en côte d'ivoire",
      technologies: ["Php", "Mysql", "Html", "Css" ],
      image: "/images/linkedinlocal.png",
      github: "https://github.com/DESIREYEO",
      demo: "https://github.com/DESIREYEO"
    },

    {
      titre: "Todo",
      description: "Todo est une application mobile de gestion de tâches",
      technologies: ["Flutter", "Mysql", ],
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

  const scrollToSection = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Gestion du formulaire
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
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
    } catch (error) {
      setFormStatus({ 
        type: 'error', 
        message: 'Erreur de connexion. Veuillez réessayer plus tard.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
          style={{
            top: `${mousePosition.y / 10}px`,
            left: `${mousePosition.x / 10}px`,
          }}
        />
        <div className="absolute w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 top-0 right-0" />
        <div className="absolute w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 bottom-0 left-0" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-green-400 bg-clip-text text-transparent">
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

      {/* Accueil Section avec Photo */}
      <section id="accueil" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-4xl text-center space-y-8">
          <div className="relative inline-block">
            {/* Photo de profil */}
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-orange-400 shadow-2xl shadow-orange-500/50 mx-auto mt-6 mb-6 bg-gradient-to-br from-orange-400 to-green-400 p-1">
              <img 
                src="/images/profile.png" 
                alt="Désiré Yeo"
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  // Si l'image ne charge pas, afficher un placeholder animé
                  e.target.style.display = 'none';
                  e.target.parentElement.classList.add('animate-pulse');
                }}
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-400 via-green-400 to-orange-400 bg-clip-text text-transparent">
              YEO LAURENT DÉSIRÉ
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
              href="https://www.linkedin.com/in/laurent-desire-yeo-48903923a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/DESIREYEO"
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
            className="mt-8 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/50"
          >
            Me Contacter
          </button>
        </div>
      </section>

      {/* À propos Section */}
      <section id="apropos" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-green-400 bg-clip-text text-transparent">
            À propos de moi
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Qui suis-je ? */}
            <div className="backdrop-blur-lg bg-white/5 rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-3xl font-bold mb-8">Qui suis-je ?</h3>
              
              <div className="space-y-6">
               <h2> je dispose d'une solide 
expérience en développement 
Fullstack et en web design. J'allie 
créativité, rigueur et compétences 
techniques afin de concevoir des 
solutions performantes et adaptées 
aux besoins des utilisateurs.</h2>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-5 h-5 text-gray-400">📚</div>
                    <h4 className="text-xl font-semibold text-white">Formation</h4>
                  </div>
                  <p className="text-gray-300 ml-8 font-medium">Formation Professionnel en Développement Web/Mobile</p>
                  <p className="text-gray-400 ml-8 text-sm">Simplon côte d'ivoire</p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-5 h-5 text-gray-400">💼</div>
                    <h4 className="text-xl font-semibold text-white">Expérience</h4>
                  </div>
                  <p className="text-gray-300 ml-8 font-medium">2+ années en développement Full-Stack</p>
                  <p className="text-gray-400 ml-8 text-sm">Spécialisé en dévéloppement web et mobile</p>
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
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500/20 to-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Code className="w-7 h-7 text-orange-400" />
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
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500/20 to-orange-500/20 flex items-center justify-center flex-shrink-0">
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
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500/20 to-green-500/20 flex items-center justify-center flex-shrink-0">
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

      {/* Compétences Section */}
      <section id="competences" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-green-400 bg-clip-text text-transparent">
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
                      ? 'bg-gradient-to-r from-orange-500 to-green-500 text-white border-orange-400'
                      : 'bg-white/5 text-white border-white/20 hover:border-orange-400 hover:bg-white/10'
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
                      <div className="p-3 bg-orange-500/20 rounded-xl border border-orange-400/30">
                        <Icon size={32} className="text-orange-300" />
                      </div>
                      <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-green-400 bg-clip-text text-transparent">
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
                          className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-orange-400/50"
                        >
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="text-xl font-semibold text-white">
                              {skill.name}
                            </h3>
                            <span className="text-sm px-3 py-1 rounded-full bg-orange-500/30 text-orange-200 border border-orange-400/50">
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-green-400 bg-clip-text text-transparent">
            Projets Récents
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projets.map((projet, i) => (
              <div
                key={i}
                className="backdrop-blur-lg bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 flex flex-col overflow-hidden group"
              >
                {/* Image du projet */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={projet.image} 
                    alt={projet.titre}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
                </div>

                {/* Contenu */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 text-orange-300">{projet.titre}</h3>
                  <p className="text-gray-400 mb-4 flex-grow">{projet.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {projet.technologies.map((tech, j) => (
                      <span key={j} className="px-2 py-1 rounded bg-orange-500/20 text-orange-300 text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 justify-center">
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
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-500/20 hover:bg-orange-500/30 transition-colors text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
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
      <section id="services" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-green-400 bg-clip-text text-transparent">
            Services
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500/20 to-green-500/20 flex items-center justify-center flex-shrink-0 border border-orange-400/30">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-white">{service.titre}</h3>
                    <p className="text-gray-400">{service.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-3 ml-2">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section avec Formulaire Fonctionnel */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-green-400 bg-clip-text text-transparent">
              Contact
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Prêt à donner vie à votre projet ? Contactez-moi pour discuter de vos besoins en développement web et mobile
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Side - Informations */}
            <div className="backdrop-blur-lg bg-white/5 rounded-3xl p-8 border border-white/10 space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Travaillons ensemble</h3>
                <p className="text-gray-300 leading-relaxed">
                En tant que développeur Full-Stack basé à Abidjan, je combine expertise technique et compréhension des enjeux locaux pour créer des solutions innovantes adaptées à vos besoins.</p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="p-2 rounded-lg bg-orange-500/20">
                    <Phone className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Téléphone</p>
                    <a href="tel:+2250556474421" className="text-white hover:text-orange-400 transition-colors font-medium">
                      +225 05 56 47 44 21
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="p-2 rounded-lg bg-orange-500/20">
                    <Mail className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <a href="mailto:desireyeo348@gmail.com" className="text-white hover:text-orange-400 transition-colors font-medium">
                      desireyeo348@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="p-2 rounded-lg bg-orange-500/20">
                    <MapPin className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Localisation</p>
                    <p className="text-white font-medium">Abidjan, Côte d'Ivoire</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Side - Form */}
            <div className="backdrop-blur-lg bg-white/5 rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6">Envoyez-moi un message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                {formStatus.message && (
                  <div className={`p-4 rounded-xl border ${
                    formStatus.type === 'success' 
                      ? 'bg-green-500/10 border-green-500/50 text-green-300' 
                      : 'bg-red-500/10 border-red-500/50 text-red-300'
                  }`}>
                    {formStatus.message}
                  </div>
                )}

                <div>
                  <label className="block text-sm text-gray-300 mb-2">Nom complet</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Votre nom complet"
                    className="w-full px-4 py-3 rounded-xl backdrop-blur-sm bg-white/10 border border-white/20 focus:border-orange-400 outline-none transition-colors text-white placeholder-gray-500"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">Adresse email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="votre@email.com"
                    className="w-full px-4 py-3 rounded-xl backdrop-blur-sm bg-white/10 border border-white/20 focus:border-orange-400 outline-none transition-colors text-white placeholder-gray-500"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">Service</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl backdrop-blur-sm bg-white/10 border border-white/20 focus:border-orange-400 outline-none transition-colors text-white"
                  >
                    <option value="" className="bg-slate-800">Sélectionnez un service</option>
                    <option value="web" className="bg-slate-800">Développement Web</option>
                    <option value="mobile" className="bg-slate-800">Développement Mobile</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Décrivez votre projet ou vos besoins..."
                    rows="6"
                    className="w-full px-4 py-3 rounded-xl backdrop-blur-sm bg-white/10 border border-white/20 focus:border-orange-400 outline-none transition-colors resize-none text-white placeholder-gray-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <Mail className="w-5 h-5" />
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
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