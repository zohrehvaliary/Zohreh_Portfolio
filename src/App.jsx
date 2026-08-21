import React, { useState, useEffect } from 'react';
import './App.css';
import currentsImage from './assets/book-pages-sample-1.jpg';
import currentsImage2 from './assets/book-pages-sample-7.png';
import currentsImage3 from './assets/book-close-up.png';
const PROJECTS = [
  {
    id: 1,

    cardTitle: 'HealthGauge',
    cardCategory: 'PRODUCT DESIGN · UI/UX',

    title: 'HealthGauge',
    year: '2020–2022',
    role: 'Lead Designer',
    scope: 'Health-Tech SaaS .  Brand System . UI/UX',

    intro:
      'A digital health ecosystem designed to help people monitor, understand, and share personal health data. Over two years, I led the design of HealthGauge’s web and mobile experiences, developing interfaces for health monitoring, data visualization, care coordination, communication, and supporting visual systems.',

    image: null,
  },
  {
    id: 2,

    cardTitle: 'Currents',
    cardCategory: 'EDITORIAL DESIGN · PUBLICATION',

    title: 'Currents in Elementary Visual Arts Education',
    year: '2026',
    role: 'Art Director & Publication Designer',
    scope: 'Editorial Design · Publication Design · Information Architecture',

    intro:
      'A large-scale multi-author publication bringing together diverse writing, imagery, and artistic practices through a unified editorial system of typography, color, navigation, page architecture, and image treatment.',

    image: currentsImage,
    image2: currentsImage2,
    image3: currentsImage3,
  },
  {
    id: 3,

    cardTitle: 'Unusual Ventures',
    cardCategory: 'BRAND DESIGN · ILLUSTRATION',

    title: 'Unusual Ventures',
    year: '2019–2020',
    role: 'Visual & Brand Designer',
    scope: 'Brand System · Illustration · Visual Design',

    intro:
      'A visual system developed over a nine-month engagement, bringing together illustration, brand assets, digital applications, presentation templates, and communication materials across the Unusual Ventures brand.',

    image: null,
  },
  {
    id: 4,

    cardTitle: 'Mission North',
    cardCategory: 'BRAND IDENTITY · WEB DESIGN',

    title: 'Mission North',
    year: '2019-2020',
    role: 'Brand Designer',
    scope: 'Brand Identity · Logo Design · Visual System',

    intro:
      'A complete brand identity developed for Mission North as the agency entered a new chapter under a new name. Centred on the directional N° mark, the system extended across typography, colour, graphic language, and collateral, balancing clarity and confidence with the more feminine, approachable character requested in the brief.',

    image: null,
  },
  {
    id: 5,
    title: 'Flux Gallery',
    category: 'UX/UI Design',
    year: '2022',
    role: 'Digital Designer',
    intro: 'An immersive digital exhibition space for generative art.',
    description:
      'Designed to disappear, the interface allows the art to take center stage while providing intuitive navigation through 3D space.',
    image:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000',
    size: 'small',
  },
  {
    id: 6,
    title: 'Kinetic Type',
    category: 'Visual Communication',
    year: '2022',
    role: 'Visual Designer',
    intro: 'Experimental motion studies in typography.',
    description:
      'A series of posters designed to be experienced in motion, exploring the legibility of type under extreme distortion.',
    image:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000',
    size: 'small',
  },
];

export default function App() {
  const [view, setView] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const Header = () => (
    <header className="header">
      <div className="logo" onClick={() => setView('home')}>
        ZOHREH VALIARY
      </div>

      <nav className="nav-links">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setView('home');
          }}
        >
          Work
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setView('about');
          }}
        >
          About
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setView('contact');
          }}
        >
          Contact
        </a>
      </nav>
    </header>
  );

  const Footer = () => (
    <footer className="footer">
      <div className="footer-name">Zohreh Valiary</div>

      <div className="footer-links">
        <a href="#" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <span> | </span>
        <a href="mailto:YOUR-EMAIL">Email</a>
      </div>
    </footer>
  );

  if (view === 'about') {
    return (
      <div>
        <Header />

        <main className="page-content">
          <div className="editorial-grid project-header-grid">
            <div className="col-8">
              <h1 className="large-title">About</h1>

              <div className="bio-text">
                <p>
                  I am a senior visual designer specializing in the intersection
                  of digital products and editorial design.
                </p>

                <p>
                  My work is defined by a commitment to structural clarity,
                  typographic excellence, and research-led creative practice.
                </p>
              </div>

              <div className="experience-grid">
                <div>
                  <span className="label">Expertise</span>
                  <ul>
                    <li>Visual Identity</li>
                    <li>Design Systems</li>
                    <li>Editorial Design</li>
                    <li>UI/UX Strategy</li>
                  </ul>
                </div>

                <div>
                  <span className="label">Selected Experience</span>
                  <ul>
                    <li>Studio Placeholder (2020—Present)</li>
                    <li>Agency Name (2017—2020)</li>
                    <li>Freelance (2014—2017)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-5">
              <div className="portrait-placeholder"></div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  if (view === 'contact') {
    return (
      <div>
        <Header />

        <main className="page-content">
          <h1 className="large-title">Let's work together.</h1>
          <p className="hero-subline">
            For collaborations, opportunities, or project inquiries, get in
            touch.
          </p>
        </main>

        <Footer />
      </div>
    );
  }

  if (typeof view === 'object') {
    const project = view;

    return (
      <div>
        <Header />

        <main className="page-content">
          <div className="editorial-grid">
            <div className="col-7">
              <h1 className="project-title">{project.title}</h1>
              <p className="project-intro">{project.intro}</p>
            </div>

            <div className="col-5 project-meta">
              <div className="meta-item">
                <span className="label">Role</span>
                <p>{project.role}</p>
              </div>

              <div className="meta-item">
                <span className="label">Year</span>
                <p>{project.year}</p>
              </div>

              <div className="meta-item">
                <span className="label">Scope</span>
                <p>{project.scope}</p>
              </div>
            </div>
          </div>

          <img className="hero-img" src={project.image} alt={project.title} />

          <div className="editorial-grid">
            <div className="col-7">
              <span className="label">Overview</span>
              <p className="overview-text">{project.description}</p>
            </div>
          </div>

          {project.image2 && (
            <img
              className="project-secondary-img"
              src={project.image2}
              alt={`${project.title} project detail`}
            />
          )}
          {project.image3 && (
            <img
              className="project-closeup-img"
              src={project.image3}
              alt={`${project.title} close-up`}
            />
          )}
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="home-page">
      <Header />

      <main className="page-content">
        <section className="hero">
          <h1 className="large-title">Visual & Digital Designer</h1>

          <p className="hero-subline">
            Working across visual communication, UI/UX, editorial design,
            branding, and research-informed creative practice.
          </p>
        </section>

        <section className="selected-work-section">
          <h2 className="section-heading">Selected Work</h2>

          <div className="work-grid">
            {PROJECTS.slice(0, 4).map((project) => (
              <div
                key={project.id}
                className="work-item"
                onClick={() => setView(project)}
              >
                <div className="image-wrapper">
                  <div className="image-wrapper">
                    {project.image && (
                      <img src={project.image} alt={project.cardTitle} />
                    )}
                  </div>
                </div>

                <div className="work-info">
                  <div className="work-title-group">
                    <h3>{project.cardTitle}</h3>
                    <span className="category">{project.cardCategory}</span>
                  </div>

                  <span className="year">{project.year}</span>
                </div>
              </div>
            ))}
          </div>

          <button className="text-link" onClick={() => setView('work')}>
            View All Work
          </button>
        </section>
        <section className="capabilities-section">
          <h2 className="capabilities-heading">Capabilities</h2>

          <div className="capabilities-grid">
            <div className="capability-item">
              <h3 className="capability-title">Product & UI/UX</h3>
              <p className="capability-description">
                Interfaces, digital products, interaction
              </p>
            </div>

            <div className="capability-item">
              <h3 className="capability-title">Brand & Visual Systems</h3>
              <p className="capability-description">
                Identity, campaigns, presentation systems
              </p>
            </div>

            <div className="capability-item">
              <h3 className="capability-title">Editorial & Publication</h3>
              <p className="capability-description">
                Books, reports, digital publications
              </p>
            </div>

            <div className="capability-item">
              <h3 className="capability-title">Information & Illustration</h3>
              <p className="capability-description">
                Data, scientific visualization, illustration
              </p>
            </div>
          </div>
        </section>

        <section className="contact-cta">
          <h2 className="contact-heading">Interested in working together?</h2>

          <a className="contact-link" href="mailto:YOUR-EMAIL-HERE">
            Get in touch
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}
