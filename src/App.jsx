import React, { useState, useEffect } from 'react';
import './App.css';
import mapHero01 from './assets/Map-hero-01.jpg';
import mapHero02 from './assets/map-hero-02.jpg';
import mapHero03 from './assets/map-hero-03.jpg';

import mapLocationIcon from './assets/location-icon.png';
import mapRouteIcon from './assets/route-icon.png';
import mapTreeIcon from './assets/tree-icon.png';
import mapShoeIcon from './assets/she-icon.png';
import mapLandmarkIcon from './assets/landmark-icon.png';

import mapTwoSeasons01 from './assets/two-seasons-01.jpg';
import mapTwoSeasons02 from './assets/two-seasons-02.jpg';

import mapShoes01 from './assets/shoes-01.jpg';
import mapShoes02 from './assets/shoes-02.jpg';
import mapShoes03 from './assets/shoes-03.jpg';
import mapShoes04 from './assets/shoes-04.jpg';

import mapLandmark01 from './assets/landmark-01.png';
import mapLandmark02 from './assets/landmark-02.png';
import mapLandmark03 from './assets/landmark-03.png';
import mapLandmark04 from './assets/landmark-04.png';
import mapLandmark05 from './assets/landmark-05.png';

import mapClosing from './assets/closing-image.jpg';
import walkingHero01 from './assets/Walking-hero-01.png';
import walkingHero02 from './assets/Walking-hero-02.png';

import walkingReadingExperience from './assets/Walking-reading-experience.png';

import walkingColor01 from './assets/Walking-color-01.png';
import walkingColor02 from './assets/Walking-color-02.png';

import walkingArtDirection01 from './assets/Walking-Art-direction-01.png';
import walkingArtDirection02 from './assets/Walking-Art-direction-02.png';
import walkingArtDirection03 from './assets/Walking-Art-direction-03.png';
import walkingArtDirection04 from './assets/Walking-Art-direction-04.png';

import walkingArchitecture01 from './assets/Walking-architecture-01.png';
import walkingArchitecture02 from './assets/Walking-architecture-02.png';
import walkingArchitecture03 from './assets/Walking-architecture-03.png';

import walkingClosing from './assets/Walking-closing.jpg';
// Unusual Ventures — Hero
import uvHero01 from './assets/UV-hero-01.jpg';
import uvHeroVideo from './assets/UV-hero-video.mp4';
import uvHero02 from './assets/UV-hero-video.jpg';
import uvHero03 from './assets/UV-hero-02.jpg';
// Unusual Ventures — Digital Experience
import uvDigital01 from './assets/UV-digital-video-01.jpg';
import uvDigital02 from './assets/UV-digital-video-02.jpg';
import uvDigital04 from './assets/UV-digital-video-03.jpg';
import uvDigitalVideo01 from './assets/UV-digital-video-01.mp4';
import uvDigitalVideo03 from './assets/UV-digital-video-03.mp4';
// Unusual Ventures — Illustration System
import uvIllustration01 from './assets/UV-illustration-01.jpg';
import uvIllustration02 from './assets/UV-illustration-02.jpg';
import uvIllustration03 from './assets/UV-illustration-03.jpg';
import uvIllustration04 from './assets/UV-illustration-04.jpg';
import uvTeam01 from './assets/UV-team-01.jpg';
import uvTeam02 from './assets/UV-team-02.jpg';
import uvTeam03 from './assets/UV-team-03.jpg';
// Unusual Ventures — Visual Identity
import uvColor from './assets/UV-palette.png';
import uvType from './assets/UV-type.png';
import uvTypeUse from './assets/UV-type-IN-Use.png';
// Unusual Ventures — Presentation System
import uvPresentation01 from './assets/UV-presentation-01.jpg';
import uvPresentation02 from './assets/UV-presentation-02.jpg';
import uvPresentation03 from './assets/UV-presentation-03.png';
import uvPresentation04 from './assets/UV-presentation-04.jpg';
// Unusual Ventures — Brand Communications
import uvCommunication01 from './assets/UV-communication-01.jpg';
import uvCommunication02 from './assets/UV-communication-02.jpg';
import uvCommunication03 from './assets/UV-communication-03.jpg';
// Mission North — Hero
import mnHero01 from './assets/MN-hero-01.png';
import mnHero02 from './assets/MN-hero-02.png';
import mnHero03 from './assets/Frame 17.jpg';
import mnHero04 from './assets/MN-hero-04.jpg';
import mnHero05 from './assets/MN-hero-05.jpg';

// Mission North — Logo Development
import mnLogo01 from './assets/MN-logo-01.png';
import mnLogo02 from './assets/MN-logo-02.jpg';
import mnLogo03 from './assets/MN-logo-03.png';
import mnLogo04 from './assets/MN-logo-04.png';
import mnLogo05 from './assets/MN-logo-05.png';

// Mission North — Visual Identity
import mnColor from './assets/MN-color.png';
import mnType from './assets/MN-type.png';

// Mission North — Brand Applications
import mnBrand01 from './assets/MN-brand-01.jpg';
import mnBrandVideo from './assets/MN-brand-video.mp4';
import mnBrand03 from './assets/MN-brand-02.jpg';
import mnBrand04 from './assets/MN-brand-03.jpg';

// Mission North — Digital Experience
import mnDigital01 from './assets/MN-digital-01.jpg';
import mnDigital02 from './assets/MN-digital-02.jpg';
import mnDigital03 from './assets/MN-digital-03.jpg';
// Revayat — Hero
import revayatHero01 from './assets/revayat-hero-01.jpg';
import revayatHero02 from './assets/revayat-hero-02.jpg';
import revayatHero03 from './assets/revayat-hero-03.jpg';

// Revayat — Campaign
import revayatCamp01 from './assets/Revayat-Camp-01.jpg';
import revayatCamp02 from './assets/Revayat-Camp-02.jpg';

// Revayat — Visual Language
import revayatVisual01 from './assets/Revayat-Visual-01.jpg';
import revayatVisual02 from './assets/Revayat-Visual-02.jpg';
import revayatVisual03 from './assets/Revayat-Visual-03.jpg';
import revayatVisual04 from './assets/Revayat-Visual-04.jpg';

// Revayat — Identity
import revayatIdentity01 from './assets/Revayat-Identity-01.jpg';
import revayatIdentity02 from './assets/Revayat-Identity-02.jpg';

// Revayat — Participation
import revayatParticipation01 from './assets/Revayat-Participation-01.jpg';
import revayatParticipation02 from './assets/Revayat-Participation-02.jpg';

// Revayat — Context
import revayatContext01 from './assets/Revayat-context-01.jpg';
import revayatContext02 from './assets/Revayat-context-02.jpg';
// War Children 
import warHero01 from './assets/War-hero-01.jpg';
import warHero02 from './assets/War-hero-02.jpg';
import warHero03 from './assets/War-hero-03.jpg';

import sequential01 from './assets/Sequential-01.jpg';
import sequential02 from './assets/Sequential-02.jpg';
import sequential03 from './assets/Sequential-03.jpg';
import sequential04 from './assets/Sequential-04.jpg';
import sequential05 from './assets/Sequential-05.jpg';

import warPoster from './assets/War-poster.jpg';

import warEditorial01 from './assets/War-Editorial-01.jpg';
import warEditorial02 from './assets/War-Editorial-02.jpg';

// Cannabis & Hemp — Hero
import cannabisHero01 from './assets/Cannabis-hero-01.png';
import cannabisHero02 from './assets/Cannabis-hero-02.png';

// Cannabis Platform
import cannabisPlatform01 from './assets/Cannabis-platform-01.png';
import cannabisPlatform02 from './assets/Cannabis-platform-02.png';
import cannabisPlatform03 from './assets/Cannabis-platform-03.png';

// Cannabis Mobile
import cannabisMobile from './assets/Cannabis-mobile.png';

// Cannabis — Print
import cannabisPrint01 from './assets/Cannabis-print-01.png';
import cannabisPrint02 from './assets/Cannabis-print-02.png';
import cannabisPrint03 from './assets/Cannabis-print-03.png';

// Hemp Platform
import hemp01 from './assets/hemp-01.png';
import hemp02 from './assets/hemp-02.png';
import hemp03 from './assets/hemp-03.png';

// Hemp — Print
import hempPrint01 from './assets/hemp-print-01.png';
import hempPrint02 from './assets/hemp-print-02.png';
import hempPrint03 from './assets/hemp-print-03.png';
// Currents — Project Images
import currentsHeroDetail from './assets/Currents Hero.png';

import currentsPage01 from './assets/currents-01.png';
import currentsPage02 from './assets/currents-02.png';

import currentsNav01 from './assets/currents-nav-01.png';
import currentsNav02 from './assets/currents-nav-02.png';
import currentsNav03 from './assets/currents-nav-03.png';
import currentsNav04 from './assets/currents-nav-04.png';

import currentsType01 from './assets/currents-type-01.png';
import currentsType02 from './assets/currents-type-02.png';
import currentsType03 from './assets/currents-type-03.png';

import currentsScale01 from './assets/currents-scale-01.png';
import currentsScale02 from './assets/currents-scale-02.png';
import currentsScale03 from './assets/currents-scale-03.png';
import currentsScale04 from './assets/currents-scale-04.png';
import currentsScale05 from './assets/currents-scale-05.png';
import currentsScale06 from './assets/currents-scale-06.png';

import currentsArt01 from './assets/currents-image-01.png';
import currentsArt02 from './assets/currents-image-02.png';
import currentsArt03 from './assets/currents-image-03.png';
import illustration01 from './assets/illustration-01.png';
import illustration02 from './assets/illustration-02.png';
import illustration03 from './assets/illustration-03.png';
// HealthGauge — Hero
import hgHero01 from './assets/Hg-hero-01.png';
import hgHero02 from './assets/Hg-hero-02.png';

// HealthGauge — Mobile
import hgMobile01 from './assets/Hg-mobile-01.png';
import hgMobile02 from './assets/Hg-mobile-02.png';
import hgMobile03 from './assets/Hg-mobile-03.png';
import hgMobile04 from './assets/Hg-mobile-04.png';
import hgMobile05 from './assets/Hg-mobile-05.png';
import hgMobile06 from './assets/Hg-mobile-06.png';
import hgMobile07 from './assets/Hg-mobile-07.png';
import hgMobile08 from './assets/Hg-mobile-08.png';
import hgMobile09 from './assets/Hg-mobile-09.png';
import hgMobile10 from './assets/Hg-mobile-10.png';

// HealthGauge — Web
import hgWeb01 from './assets/Hg-web-01.png';
import hgWeb02 from './assets/Hg-web-02.png';
import hgWeb03 from './assets/Hg-web-03.png';

// HealthGauge — Connected Care
import hgCare01 from './assets/Hg-care-01.png';
import hgCare02 from './assets/Hg-care-02.png';
import hgCare03 from './assets/Hg-care-03.png';
import hgCare04 from './assets/Hg-care-04.png';

// HealthGauge — Brand
import hgBrand01 from './assets/Hg-brand-01.png';
import hgBrand02 from './assets/HG-brand-02.png';

import hgColor01 from './assets/Hg-color-01.png';
import hgColor02 from './assets/Hg-color-02.png';

import hgType01 from './assets/Hg-type-01.png';
import hgType02 from './assets/Hg-type-02.png';
import hgType03 from './assets/Hg-type-03.png';
import hgType04 from './assets/Hg-type-04.png';

// HealthGauge — Illustration System
import illustration04 from './assets/illustration-04.png';
import illustration05 from './assets/illustration-05.png';
import illustration06 from './assets/illustration-6.png';
import illustration07 from './assets/illustration-07.png';
import illustration08 from './assets/illustration-08.png';
import illustration09 from './assets/illustration-09.png';
import illustration10 from './assets/illustration-10.png';
import aboutImage from './assets/about-image.jpg';
import walkingHome from './assets/walking-home.jpg';
import revayatHome from './assets/revayat-home.jpg';
import cannabisHome from './assets/Cannabis-home.png';
import warChildrenHome from './assets/war-children-home.jpg';
import shoeMapHome from './assets/shoe-map-home.jpg';
import unusualVenturesHome from './assets/unusual-ventures-home.jpg';
import missionNorthHome from './assets/mission-north-home.png';
import currentsHome from './assets/currents-home.jpg';
import healthGaugeHome from './assets/healthgauge-home.jpg';
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
    scope: 'Health-Tech SaaS . Brand System . UI/UX',

    intro:
      'A digital health ecosystem designed to help people monitor, understand, and share personal health data. Over two years, I led the design of HealthGauge’s web and mobile experiences, developing interfaces for health monitoring, data visualization, care coordination, communication, and supporting visual systems.',

      cardImage: healthGaugeHome,
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

      cardImage: currentsHome,
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

      cardImage: unusualVenturesHome,
  },
  {
    id: 4,

    cardTitle: 'Mission North',
    cardCategory: 'BRANDING · VISUAL IDENTITY',

    title: 'Mission North',
    year: '2019-2020',
    role: 'Brand Designer',
    scope: 'Brand Identity · Logo Design · Visual System',

    intro:
      'A complete brand identity developed for Mission North as the agency entered a new chapter under a new name. Centred on the directional N° mark, the system extended across typography, colour, graphic language, and collateral, balancing clarity and confidence with the more feminine, approachable character requested in the brief.',

      cardImage: missionNorthHome,
  },
    {
      id: 5,
    
      cardTitle: 'Playful Walking',
      cardCategory: 'EDITORIAL DESIGN · PUBLICATION',
    
      title: 'Playful Walking with A/r/tography',
      year: '2024',
      role: 'Art Director & Publication Designer',
      scope: (
        <>
          Editorial Design · Publication System ·
          <br />
          Art Direction
        </>
      ),
    
      intro:
        'An editorial design project developed as a three-book series, bringing together scholarly writing, artistic research, and visual contributions within a cohesive publication system. I created a consistent visual language across all three volumes, balancing continuity in typography, hierarchy, and page structure with enough flexibility for each book and contribution to retain its own character.',
    
      cardImage: walkingHome,
    },
  
    {
      id: 6,
    
      cardTitle: 'Revayat',
      cardCategory: 'VISUAL COMMUNICATION · INTERACTIVE DESIGN',
    
      title: 'Revayat (Social Campaign)',
      year: '2018',
      role: 'Designer & Researcher',
      scope:
        'Design Research · Campaign Design · Visual Identity · Illustration · Interactive Design',
    
      intro:
        'A research-led visual communication campaign developed through my MDes thesis, exploring how design could build awareness around women’s rights and support empowerment among young Iranian women. The project combined a bilingual poster series with a participatory digital platform centred on role models, storytelling, and shared experience.',
    
      cardImage: revayatHome,
    },

    {
      id: 7,
    
      cardTitle: 'Cannabis Marketplace',
      cardCategory: 'INFORMATION DESIGN · APP DESIGN',
    
      title: 'Cannabis & Hemp Marketplace Platforms',
      year: '2017–2018',
      role: 'Visual Designer · UI Designer',
      scope: 'UI Design · Information Design · Illustration · Iconography',
    
      intro:
        'A visual and digital system developed for two related marketplace platforms serving the cannabis and hemp industries. The work brought together mobile interface design, information visualization, geographic mapping, custom iconography, illustration, and stakeholder-facing communications, with each platform adapted through its own distinct visual identity and color system.',
    
      cardImage: cannabisHome,
    },

    {
      id: 8,
    
      cardTitle: 'War Children',
      cardCategory: 'CRITICAL DESIGN · POSTER',
    
      title: 'War Children',
      year: '2017',
      role: 'Visual Designer / Art Director',
      scope: 'Critical Design · Poster Design · Public Intervention',
    
      intro:
        'A critical design project exploring how repeated visual encounters can build awareness around the lives of children affected by war. I created a sequence of posters that appeared incrementally in public space over several days: beginning with a single child’s face, then gradually introducing more portraits, and finally culminating in a large-format poster that revealed the complete message. The project used repetition, accumulation, and delayed disclosure to turn an everyday public wall into a site of attention and confrontation.',
    
      cardImage: warChildrenHome,
    },
    {
      id: 9,
    
      cardTitle: 'Mapping My Edmonton',
      cardCategory: 'INFORMATION DESIGN · ILLUSTRATION',
    
      title: 'Mapping My Edmonton',
      year: '2017',
      role: 'Designer & Illustrator',
      scope: 'Information Design · Illustrated Mapping · Data Visualization',
    
      intro:
        'A pair of illustrated maps exploring Edmonton through personal movement, seasonal change, and footwear. Combining landmarks, routes, climate information, and an autobiographical shoe inventory, the project uses cartography as a record of everyday movement through the city.',
    
      cardImage: shoeMapHome,
  },];

export default function App() {
  const [view, setView] = useState('home');
  const [illustrationIndex, setIllustrationIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);
  useEffect(() => {
    const interval = setInterval(() => {
      setIllustrationIndex((current) => (current + 1) % 3);
    }, 4000);
  
    return () => clearInterval(interval);
  }, []);

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
            setView('work');
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
  className="mobile-hide"
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
  <a
    href="https://www.linkedin.com/in/zohreh-valiary-a0238188/"
    target="_blank"
    rel="noreferrer"
  >
    LinkedIn
  </a>

  <span> | </span>

  <a href="mailto:zohreh@zohrehvaliary.com">
    Email
  </a>
</div>
    </footer>
  );
  const ProjectNavigation = ({ projectId }) => {
    const currentIndex = PROJECTS.findIndex(
      (project) => project.id === projectId
    );
  
    const previousProject =
      currentIndex > 0 ? PROJECTS[currentIndex - 1] : null;
  
    const nextProject =
      currentIndex < PROJECTS.length - 1
        ? PROJECTS[currentIndex + 1]
        : null;
  
    return (
      <nav className="project-navigation">
        <div className="project-navigation-side project-navigation-previous">
          {previousProject && (
            <>
              <span className="project-navigation-label">
                Previous Project
              </span>
  
              <button
                className="project-navigation-link"
                onClick={() => setView(previousProject)}
              >
                ← {previousProject.cardTitle}
              </button>
            </>
          )}
        </div>
  
        <div className="project-navigation-side project-navigation-next">
          {nextProject && (
            <>
              <span className="project-navigation-label">
                Next Project
              </span>
  
              <button
                className="project-navigation-link"
                onClick={() => setView(nextProject)}
              >
                {nextProject.cardTitle} →
              </button>
            </>
          )}
        </div>
      </nav>
    );
  };
  if (view === 'about') {
    return (
      <div>
        <Header />
  
        <main className="page-content about-page">
          <div className="editorial-grid project-header-grid">
            <div className="col-7">
              <h1 className="large-title">About</h1>
              
  
              <div className="bio-text">
                <p>
                I am a visual and digital designer working across product design, brand systems, editorial design, and visual communication.
                </p>
  
                <p>
                My practice brings together structural clarity, typography, image-making, and research-informed thinking to create thoughtful, coherent visual systems across digital and print contexts.
                </p>
              </div>
  
              <div className="experience-grid">
  <div>
    <span className="label">Selected Experience</span>

    <div className="about-entry">
      <p className="about-entry-title">Canadian Crafts Federation</p>
      <p className="about-entry-meta">Digital Literacy / LMS Lead</p>
    </div>

    <div className="about-entry">
      <p className="about-entry-title">OneNetinc</p>
      <p className="about-entry-meta">Visual Designer</p>
    </div>

    <div className="about-entry">
      <p className="about-entry-title">Symmetry Asset Management Inc.</p>
      <p className="about-entry-meta">Visual & Digital Designer</p>
    </div>
  </div>

  <div>
    <span className="label">Selected Projects</span>

    <div className="about-entry">
      <p className="about-entry-title">HealthGauge</p>
      <p className="about-entry-meta">Product Design · UI/UX</p>
    </div>

    <div className="about-entry">
      <p className="about-entry-title">Unusual Ventures</p>
      <p className="about-entry-meta">Brand & Visual Systems</p>
    </div>

    <div className="about-entry">
      <p className="about-entry-title">Mission North</p>
      <p className="about-entry-meta">Brand Identity</p>
    </div>

    <div className="about-entry">
      <p className="about-entry-title">Cannabis Marketplace</p>
      <p className="about-entry-meta">Information Design · App Design</p>
    </div>
  </div>
</div>
            </div>
  
            <div className="col-5">
              <img
                className="about-image"
                src={aboutImage}
                alt="Portrait of Zohreh Valiary"
              />
            </div>
          </div>
        </main>
  
        <Footer />
      </div>
    );
  }

  if (view === 'contact') {
    return (
      <div className="contact-layout">
        <Header />
  
        <main className="page-content contact-page">
          <div className="contact-page-content">
            <h1 className="contact-page-heading">
              Let’s work together.
            </h1>
  
            <p className="contact-page-intro">
              For collaborations, opportunities, or project inquiries, get in touch.
            </p>
            <div className="contact-actions">
  <a
    className="contact-email"
    href="mailto:zohreh@zohrehvaliary.com"
  >
    zohreh@zohrehvaliary.com
  </a>

  <div className="contact-secondary-links">
    <a
      href="YOUR-LINKEDIN-URL"
      target="_blank"
      rel="noreferrer"
    >
      LinkedIn
    </a>

    <span>·</span>

    <a
      href="YOUR-RESUME-LINK"
      target="_blank"
      rel="noreferrer"
    >
      Résumé
    </a>
  </div>
</div>
          </div>
        </main>
  
        <Footer />
      </div>
    );
  }
  if (view === 'work') {
    return (
      <div>
        <Header />
  
        <main className="page-content work-page-content">
          <section className="all-work-page">
            <h1 className="all-work-title">Work</h1>
  
            <p className="all-work-intro">
              Selected projects across product design, visual identity,
              editorial design, and visual communication.
            </p>
            <div className="all-work-grid">
            {PROJECTS.map((project, index) => (
    <div
      key={project.id}
      className="all-work-item"
      onClick={() => setView(project)}
    >
      <div className="all-work-image">
        {project.cardImage && (
          <img
          src={project.cardImage}
          alt={project.cardTitle}
          loading={index < 3 ? 'eager' : 'lazy'}
          fetchPriority={index === 0 ? 'high' : 'auto'}
          decoding="async"
        />
        )}
      </div>

      <div className="all-work-info">
        <div>
          <h3>{project.cardTitle}</h3>
          <span className="all-work-category">
            {project.cardCategory}
          </span>
        </div>

        <span className="all-work-year">{project.year}</span>
      </div>
    </div>
  ))}
</div>
          </section>
        </main>
  
        <Footer />
      </div>
    );
  }
if (typeof view === 'object' && view.id === 1) {
  const project = view;

return (
  <div>
    <Header />

    <main className="page-content project-page healthgauge-page">
  <div className="editorial-grid project-header-grid">
    <div className="col-8">
          <h1 className="project-title">{project.title}</h1>
          <p className="project-intro">{project.intro}</p>
        </div>

        <div className="col-4 project-meta">
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

      <div className="healthgauge-hero-grid">
  <div className="healthgauge-hero-image">
  <img
  src={hgHero01}
  alt="HealthGauge mobile interface designs"
  loading="eager"
  fetchPriority="high"
  decoding="async"
/>
  </div>

  <div className="healthgauge-hero-image">
  <img
  src={hgHero02}
  alt="HealthGauge dark mode mobile interface"
  loading="eager"
  decoding="async"
/>
  </div>
</div>
      <section className="ecosystem-section">
  <h2 className="ecosystem-heading">The Ecosystem</h2>

  <p className="ecosystem-intro">
    What began with the design of HealthGauge’s mobile app expanded over two
    years into a connected digital ecosystem spanning personal health
    monitoring, complex data visualization, care coordination, communication,
    and brand experience.
  </p>

  <div className="ecosystem-grid">
    <div className="ecosystem-item">
      <h3>Mobile App</h3>
      <p>
        Personal health tracking, measurements, trends, and insights across
        light and dark interfaces.
      </p>
    </div>

    <div className="ecosystem-item">
      <h3>Web Platform</h3>
      <p>
        Dashboards, health histories, data visualization, file management,
        surveys, credentials, and administrative tools.
      </p>
    </div>

    <div className="ecosystem-item">
      <h3>Connected Care</h3>
      <p>
        Caregiver monitoring, shared access and permissions, health thresholds,
        feedback, and communication between users and care teams.
      </p>
    </div>

    <div className="ecosystem-item">
      <h3>Brand & Visual System</h3>
      <p>
        Corporate identity, brand guidelines, illustration, iconography, and
        supporting visual assets.
      </p>
    </div>
  </div>
</section>
    
    <section className="healthgauge-section mobile-app-section">
  <h2 className="project-section-title">Mobile App</h2>

  <p className="project-section-body">
    My work with HealthGauge began with the mobile app, where I designed
  interfaces for personal health tracking, measurements, trends, and health
  insights across both light and dark modes. The interface system was
  developed to remain consistent across modes while preserving clarity,
  hierarchy, and readability. This work established the foundation for a
  broader product ecosystem that later expanded across web, connected care,
  and supporting visual systems.
  </p>

  <div className="mobile-app-images">
  <div className="mobile-app-row mobile-app-row-large">
    <div className="mobile-app-image">
    <img src={hgMobile01} alt="" loading="lazy" decoding="async" />
    </div>

    <div className="mobile-app-image">
    <img src={hgMobile02} alt="" loading="lazy" decoding="async" />
    </div>
  </div>

  <div className="mobile-app-row mobile-app-row-small">
    <div className="mobile-app-image">
    <img src={hgMobile03} alt="" loading="lazy" decoding="async" />
    </div>
    <div className="mobile-app-image">
    <img src={hgMobile04} alt="" loading="lazy" decoding="async" />
    </div>
    <div className="mobile-app-image">
    <img src={hgMobile05} alt="" loading="lazy" decoding="async" />
    </div>
    <div className="mobile-app-image">
    <img src={hgMobile06} alt="" loading="lazy" decoding="async" />
    </div>
  </div>

  <div className="mobile-app-row mobile-app-row-small">
    <div className="mobile-app-image">
    <img src={hgMobile07} alt="" loading="lazy" decoding="async" />
    </div>
    <div className="mobile-app-image">
    <img src={hgMobile08} alt="" loading="lazy" decoding="async" />
    </div>
    <div className="mobile-app-image">
    <img src={hgMobile09} alt="" loading="lazy" decoding="async" />
    </div>
    <div className="mobile-app-image">
    <img src={hgMobile10} alt="" loading="lazy" decoding="async" />
    </div>
  </div>
</div>
</section>
<section className="healthgauge-section web-platform-section">
  <h2 className="project-section-title">Web Platform</h2>

  <p className="project-section-body">
    As HealthGauge expanded, I designed a web platform that brought together
    health monitoring, detailed measurement histories, data visualization,
    account management, communication, and&nbsp;a&nbsp;growing set of supporting tools.
    The interface needed to make complex health information accessible while
    remaining consistent across a wide range of workflows and user states.
  </p>

  <div className="web-platform-images">
  <div className="web-platform-image web-platform-image-large">
  <img
  src={hgWeb01}
  alt=""
  loading="lazy"
  decoding="async"
/>
  </div>

  <div className="web-platform-row">
    <div className="web-platform-image web-platform-image-small">
    <img
  src={hgWeb02}
  alt=""
  loading="lazy"
  decoding="async"
/>
    </div>

    <div className="web-platform-image web-platform-image-small">
    <img
  src={hgWeb03}
  alt=""
  loading="lazy"
  decoding="async"
/>
    </div>
  </div>
</div>
</section>
<section className="healthgauge-section connected-care-section">
  <h2 className="project-section-title">Connected Care</h2>

  <p className="project-section-body">
    HealthGauge extended personal health monitoring into a connected-care
    experience, allowing users to share information with caregivers and care
    teams. I designed interfaces for caregiver monitoring, shared access and
    permissions, health thresholds, feedback, and communication around patient
    data.
  </p>

  <div className="connected-care-images">
  <div className="connected-care-row connected-care-row-top">
    <div className="connected-care-image">
    <img src={hgCare01} alt="" loading="lazy" decoding="async" />
    </div>
    <div className="connected-care-image">
    <img src={hgCare02} alt="" loading="lazy" decoding="async" />
    </div>
  </div>

  <div className="connected-care-row connected-care-row-bottom">
    <div className="connected-care-image">
    <img src={hgCare03} alt="" loading="lazy" decoding="async" />
    </div>
    <div className="connected-care-image">
    <img src={hgCare04} alt="" loading="lazy" decoding="async" />
    </div>
  </div>
</div>
</section>
<section className="healthgauge-section brand-visual-section">
  <h2 className="project-section-title">Brand &amp; Visual System</h2>

  <p className="project-section-body">
    Alongside the product experience, I developed HealthGauge’s broader visual
    system across brand guidelines, color, typography, illustration,
    iconography, and supporting digital materials. Working with the company’s
    existing logo, I built a cohesive visual language that could extend across
    the mobile and web products, corporate communications, and early website
    concepts while maintaining consistency across a complex health-tech
    ecosystem.
  </p>
  <div className="illustration-system-subsection">
  <h3 className="brand-standards-title">Illustration System</h3>

  <p className="project-section-body">
    I developed a flexible illustration language to make HealthGauge’s health
    and wellness content feel more approachable and human. The system combined
    simplified figures, everyday environments, health-data motifs, and the
    brand’s core color palette, creating a consistent visual vocabulary that
    could extend across onboarding, digital communications, and broader brand
    applications.
  </p>

  <div className="illustration-carousel">
    <div
      className={`illustration-carousel-item ${
        illustrationIndex === 0
          ? 'is-center'
          : illustrationIndex === 1
          ? 'is-left'
          : 'is-right'
      }`}
    >
      <img src={illustration01} alt="" decoding="async" />
    </div>

    <div
      className={`illustration-carousel-item ${
        illustrationIndex === 1
          ? 'is-center'
          : illustrationIndex === 2
          ? 'is-left'
          : 'is-right'
      }`}
    >
      <img src={illustration02} alt="" decoding="async" />
    </div>

    <div
      className={`illustration-carousel-item ${
        illustrationIndex === 2
          ? 'is-center'
          : illustrationIndex === 0
          ? 'is-left'
          : 'is-right'
      }`}
    >
     <img src={illustration03} alt="" decoding="async" />
    </div>
  </div>

  <div className="illustration-grid">
  <div className="illustration-tall-image">
  <img src={illustration04} alt="" loading="lazy" decoding="async" />
  </div>

  <div className="illustration-tall-image">
  <img src={illustration05} alt="" loading="lazy" decoding="async" />
  </div>

  <div className="illustration-tall-image">
  <img src={illustration06} alt="" loading="lazy" decoding="async" />
  </div>

  <div className="illustration-stack">
    <div className="illustration-wide-image">
    <img src={illustration07} alt="" loading="lazy" decoding="async" />
    </div>
    <div className="illustration-wide-image">
    <img src={illustration09} alt="" loading="lazy" decoding="async" />
    </div>
  </div>

  <div className="illustration-stack">
    <div className="illustration-wide-image">
    <img src={illustration08} alt="" loading="lazy" decoding="async" />
    </div>
    <div className="illustration-wide-image">
    <img src={illustration10} alt="" loading="lazy" decoding="async" />
    </div>
  </div>
  </div> {/* closes illustration-grid */}

</div> {/* closes illustration-system-subsection */}

<div className="brand-standards">
    <h3 className="brand-standards-title">Brand Standards</h3>

    <p className="project-section-body">
      Building on the existing logo, I developed a foundational brand guide
      defining logo use and clear space, color, typography, and digital
      application principles. The standards created a shared visual framework
      across HealthGauge’s mobile, web, and supporting brand materials.
    </p>

    <p className="brand-disclaimer">
      The HealthGauge logo predated my involvement. I developed the broader
      visual identity system around the existing mark.
    </p>
  </div>
  <div className="brand-standards-images">
  <div className="brand-standards-image brand-standards-image-large">
  <img
  src={hgBrand01}
  alt=""
  loading="lazy"
  decoding="async"
/>
  </div>

  <div className="brand-standards-image brand-standards-image-small">
  <img
  src={hgBrand02}
  alt=""
  loading="lazy"
  decoding="async"
/>
</div>
</div>
<div className="colour-palette">
  <h3 className="brand-standards-title">Colour Palette</h3>

  <div className="colour-palette-images">
    <div className="colour-palette-image">
    <img
  src={hgColor01}
  alt=""
  loading="lazy"
  decoding="async"
/>
    </div>

    <div className="colour-palette-image">
    <img
  src={hgColor02}
  alt=""
  loading="lazy"
  decoding="async"
/>
    </div>
  </div>
</div>

<div className="typography-subsection">
  <h3 className="brand-standards-title">Typography</h3>

  <div className="typography-images">
    <div className="typography-image">
    <img src={hgType01} alt="" loading="lazy" decoding="async" />
    </div>

    <div className="typography-image">
    <img src={hgType02} alt="" loading="lazy" decoding="async" />
    </div>

    <div className="typography-image">
    <img src={hgType03} alt="" loading="lazy" decoding="async" />
    </div>

    <div className="typography-image">
    <img src={hgType04} alt="" loading="lazy" decoding="async" />
    </div>
  </div>
</div>

<div className="brand-specifications-subsection">
  <h3 className="brand-standards-title">Brand Specifications</h3>

  <div className="brand-specifications-image"></div>
</div>

</section>
<ProjectNavigation projectId={1} />

</main>

<Footer />

</div>
);
}
/* CURRENTS PROJECT PAGE */

if (typeof view === 'object' && view.id === 2) {
  const project = view;

  return (
    <div>
      <Header />

      <main className="page-content project-page currents-page">

        <div className="editorial-grid project-header-grid">
          <div className="col-8">
            <h1 className="project-title">{project.title}</h1>
            <p className="project-intro">{project.intro}</p>
          </div>

          <div className="col-4 project-meta">
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
              <p className="currents-scope">
  Editorial Design · Publication Design ·
  <br />
  Information Architecture
</p>
            </div>
          </div>
        </div>

        <div className="currents-hero">
        <img
  src={currentsHeroDetail}
  alt="Currents in Elementary Visual Arts Education publication"
  loading="eager"
  fetchPriority="high"
  decoding="async"
/>
</div>

        <section className="currents-editorial-system">
          <h2 className="ecosystem-heading">Building the Editorial System</h2>

          <p className="ecosystem-intro">
            <em>Currents in Elementary Visual Arts Education</em> brings together
            contributions from multiple authors, each with different combinations
            of text, imagery, artworks, and visual material. I developed an editorial
            system that could accommodate this diversity while giving the publication
            a coherent identity, clear navigation, and a consistent reading experience.
          </p>
        </section>

        <section className="healthgauge-section currents-section page-architecture-section">
          <h2 className="project-section-title">Page Architecture</h2>

          <p className="project-section-body">
            Each contribution brought a different relationship between text,
            images, artworks, captions, and supporting material. I developed a
            flexible page architecture that could respond to these differences
            while maintaining consistent margins, hierarchy, pacing, and visual
            continuity throughout the publication.
          </p>

          <div className="currents-page-architecture">
    <div className="currents-page-image">
    <img
  src={currentsPage01}
  alt=""
  loading="lazy"
  decoding="async"
/>
    </div>

    <div className="currents-page-image">
    <img
  src={currentsPage02}
  alt=""
  loading="lazy"
  decoding="async"
/>
    </div>
  </div>
</section>

        <section className="healthgauge-section currents-section">
          <h2 className="project-section-title">Navigation &amp; Hierarchy</h2>

          <p className="project-section-body">
            With multiple contributors, chapters, interludes, and varied forms
            of content, the publication required a clear editorial hierarchy. I
            developed recurring structures for chapter openings, headings, page
            elements, and navigation cues to help readers move through the book
            while maintaining continuity across very different contributions.
          </p>

          <div className="currents-navigation-grid">
  <div className="currents-navigation-column currents-navigation-left">
    <div className="currents-nav-image-small">
    <img
  src={currentsNav01}
  alt=""
  loading="lazy"
  decoding="async"
/>
    </div>

    <div className="currents-nav-image-small">
    <img
  src={currentsNav02}
  alt=""
  loading="lazy"
  decoding="async"
/>
    </div>
  </div>

  <div className="currents-navigation-column currents-navigation-right">
    <div className="currents-nav-image-large">
    <img
  src={currentsNav03}
  alt=""
  loading="lazy"
  decoding="async"
/>
    </div>

    <div className="currents-nav-image-large">
    <img
  src={currentsNav04}
  alt=""
  loading="lazy"
  decoding="async"
/>
    </div>
  </div>
</div>
        </section>

        <section className="healthgauge-section currents-section">
          <h2 className="project-section-title">Typography &amp; Visual Language</h2>

          <p className="project-section-body">
            To unify a publication composed of diverse contributions, I developed
            a typographic system that established clear hierarchy while remaining
            adaptable across essays, interviews, image-based pieces, and supporting
            material. Decisions around scale, spacing, alignment, and contrast helped
            create a reading experience that was legible, navigable, and visually
            consistent without flattening the distinct character of each contribution.
          </p>

          <div className="currents-typography-grid">
  <div className="currents-typography-left">
    <div className="currents-type-image-small">
    <img
  src={currentsType01}
  alt=""
  loading="lazy"
  decoding="async"
/>
    </div>

    <div className="currents-type-image-small">
    <img
  src={currentsType02}
  alt=""
  loading="lazy"
  decoding="async"
/>
    </div>
  </div>

  <div className="currents-type-image-large">
  <img
  src={currentsType03}
  alt=""
  loading="lazy"
  decoding="async"
/>
  </div>
</div>
        </section>

        <section className="healthgauge-section currents-section">
          <h2 className="project-section-title">Image Integration &amp; Art Direction</h2>

          <p className="project-section-body">
            The publication brings together a wide range of visual material,
            from artworks and photographs to diagrams, documentation, and
            contributor-generated imagery. I developed approaches to scale,
            cropping, placement, sequencing, and captioning that allowed these
            materials to remain legible and distinctive while working within
            the larger editorial system.
          </p>

          <div className="currents-image-integration-grid">
  <div className="currents-image-integration-large">
  <img
  src={currentsArt01}
  alt=""
  loading="lazy"
  decoding="async"
/>
  </div>

  <div className="currents-image-integration-stack">
    <div className="currents-image-integration-small">
    <img
  src={currentsArt02}
  alt=""
  loading="lazy"
  decoding="async"
/>
    </div>

    <div className="currents-image-integration-small">
    <img
  src={currentsArt03}
  alt=""
  loading="lazy"
  decoding="async"
/>
    </div>
  </div>
</div>
        </section>

        <section className="healthgauge-section currents-section">
          <h2 className="project-section-title">Designing at Scale</h2>

          <p className="project-section-body">
            As Currents grew across hundreds of pages and contributions, I
            developed reusable editorial structures that could accommodate new
            material, revisions, and varied content while maintaining coherence
            across the publication.
          </p>

          <div className="currents-scale-grid">
  <div className="currents-scale-image">
  <img
  src={currentsScale01}
  alt=""
  loading="lazy"
  decoding="async"
/>
  </div>

  <div className="currents-scale-image">
  <img
  src={currentsScale02}
  alt=""
  loading="lazy"
  decoding="async"
/>
  </div>

  <div className="currents-scale-image">
  <img
  src={currentsScale03}
  alt=""
  loading="lazy"
  decoding="async"
/>
  </div>

  <div className="currents-scale-image">
  <img
  src={currentsScale04}
  alt=""
  loading="lazy"
  decoding="async"
/>
  </div>

  <div className="currents-scale-image">
  <img
  src={currentsScale05}
  alt=""
  loading="lazy"
  decoding="async"
/>
  </div>

  <div className="currents-scale-image">
  <img
  src={currentsScale06}
  alt=""
  loading="lazy"
  decoding="async"
/>
  </div>
</div>
        </section>
        <ProjectNavigation projectId={2} />

      </main>

      <Footer />
    </div>
  );
}
/* CANNABIS & HEMP PROJECT PAGE */

if (typeof view === 'object' && view.id === 7) {
  const project = view;

  return (
    <div>
      <Header />

      <main className="page-content project-page cannabis-page">

        {/* PROJECT HEADER */}
        <div className="editorial-grid project-header-grid">
          <div className="col-8">
            <h1 className="project-title">{project.title}</h1>
            <p className="project-intro">{project.intro}</p>
          </div>

          <div className="col-4 project-meta">
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
  <p>
    UI Design · Information Design ·
    <br />
    Illustration · Iconography
  </p>
</div>
          </div>
        </div>


      {/* HERO */}
<div className="cannabis-hero">
  <div className="cannabis-hero-image">
  <img
  src={cannabisHero01}
  alt=""
  loading="eager"
  fetchPriority="high"
  decoding="async"
/>
  </div>

  <div className="cannabis-hero-image">
  <img
  src={cannabisHero02}
  alt=""
  loading="eager"
  decoding="async"
/>
  </div>
</div>

        {/* TWO RELATED MARKETPLACE SYSTEMS */}
        <section className="cannabis-systems-intro">
          <h2 className="ecosystem-heading">
            Two Related Marketplace Systems
          </h2>

          <p className="ecosystem-intro">
            The cannabis and hemp platforms were developed as related marketplace
            systems with a shared structural logic across interface design,
            mapping, iconography, and information graphics. The cannabis platform
            became the more consumer-facing expression of the system, while the
            hemp platform adapted the same framework for a more industry- and
            stakeholder-focused context.
          </p>
        </section>


        {/* CANNABIS PLATFORM */}
        <section className="healthgauge-section cannabis-section cannabis-platform-section">
          <h2 className="project-section-title">Cannabis Platform</h2>

          <p className="project-section-body">
            The cannabis platform was designed as a consumer-facing marketplace
            that brings together products, services, education, and location-based
            information within a connected digital ecosystem. The system extended
            across web and mobile experiences, supported by custom iconography,
            geographic mapping, and modular information graphics that made complex
            categories and resources easier to navigate and understand.
          </p>
          <div className="cannabis-platform-row-1">
          <img
  src={cannabisPlatform01}
  alt=""
  loading="lazy"
  decoding="async"
/>
</div>

<div className="cannabis-two-col-row">
  <div className="cannabis-platform-row-2-image">
  <img
  src={cannabisPlatform02}
  alt=""
  loading="lazy"
  decoding="async"
/>
  </div>

  <div className="cannabis-platform-row-2-image">
  <img
  src={cannabisPlatform03}
  alt=""
  loading="lazy"
  decoding="async"
/>
  </div>
</div>
        </section>


        {/* MOBILE MARKETPLACE */}
        <section className="healthgauge-section cannabis-section mobile-marketplace-section">
          <h2 className="project-section-title">
            Mobile Marketplace Experience
          </h2>

          <p className="project-section-body">
            The mobile experience translated the broader marketplace system into
            a more direct, user-facing interface. Designed around location-based
            discovery, marketplace access, community features, and educational
            content, the app brought geographic information and platform resources
            into a compact mobile format. The interface used the same iconography,
            mapping language, and color system as the wider platform, creating
            continuity between the information graphics and the digital experience.
          </p>

          <div className="mobile-marketplace-image">
          <img
  src={cannabisMobile}
  alt=""
  loading="lazy"
  decoding="async"
/>
</div>
        </section>


        {/* CANNABIS PRINT */}
        <section className="healthgauge-section cannabis-section cannabis-print-section">
          <h2 className="project-section-title">
            Extending the System to Print
          </h2>

          <p className="project-section-body">
            The visual system extended beyond the digital platform into a printed
            booklet designed to communicate complex marketplace relationships in
            a more editorial format. Maps, custom iconography, stakeholder diagrams,
            and information graphics were reorganized across spreads to create a
            clear narrative flow while maintaining consistency with the broader
            cannabis and hemp systems. The booklet provided a more detailed,
            tangible format for presenting geographic, regulatory, and marketplace
            information to stakeholders.
          </p>
          <div className="print-row-top">
  <div className="print-row-top-left">
  <img
  src={cannabisPrint01}
  alt=""
  loading="lazy"
  decoding="async"
/>
  </div>

  <div className="print-row-top-right">
  <img
  src={cannabisPrint02}
  alt=""
  loading="lazy"
  decoding="async"
/>
  </div>
</div>

<div className="print-row-bottom">
<img
  src={cannabisPrint03}
  alt=""
  loading="lazy"
  decoding="async"
/>
</div>
        </section>


    {/* HEMP PLATFORM */}
<section className="healthgauge-section cannabis-section hemp-platform-section">
  <h2 className="project-section-title">Hemp Platform</h2>

  <p className="project-section-body">
    The hemp platform adapted the shared system for a more industry- and
    stakeholder-focused context. A distinct earthy palette, regional maps,
    product iconography, and information graphics were used to communicate
    market activity, applications, and opportunities across the global
    hemp sector.
  </p>

  <div className="hemp-platform-row-1">
  <img
  src={hemp01}
  alt=""
  loading="lazy"
  decoding="async"
/>
  </div>

  <div className="cannabis-two-col-row">
    <div className="hemp-platform-row-2-image">
    <img
  src={hemp02}
  alt=""
  loading="lazy"
  decoding="async"
/>
    </div>

    <div className="hemp-platform-row-2-image">
    <img
  src={hemp03}
  alt=""
  loading="lazy"
  decoding="async"
/>
    </div>
  </div>
</section>


        {/* HEMP PRINT */}
        <section className="healthgauge-section cannabis-section hemp-print-section">
          <h2 className="project-section-title">
            Adapting the System for Print
          </h2>

          <p className="project-section-body">
            The hemp visual system was extended into a printed market report,
            translating maps, product categories, and data-driven content into a
            clear editorial format. The publication retained the platform’s visual
            language while creating a structured and accessible experience for
            more detailed industry information.
          </p>

          <div className="adapting-print-row-top">
  <div className="adapting-print-left">
  <img
  src={hempPrint01}
  alt=""
  loading="lazy"
  decoding="async"
/>
  </div>

  <div className="adapting-print-right">
  <img
  src={hempPrint02}
  alt=""
  loading="lazy"
  decoding="async"
/>
  </div>
</div>

<div className="adapting-print-row-bottom">
<img
  src={hempPrint03}
  alt=""
  loading="lazy"
  decoding="async"
/>
</div>
        </section>


        <ProjectNavigation projectId={7} />

      </main>

      <Footer />
    </div>
  );
}

/* WAR CHILDREN PROJECT PAGE */

if (typeof view === 'object' && view.id === 8) {
  const project = view;

  return (
    <div>
      <Header />

      <main className="page-content project-page war-children-page">

        {/* PROJECT HEADER */}
        <div className="editorial-grid project-header-grid">
          <div className="col-8">
            <h1 className="project-title">{project.title}</h1>
            <p className="project-intro">{project.intro}</p>
          </div>

          <div className="col-4 project-meta">
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
              <p>
                Critical Design · Poster Design ·
                <br />
                Public Intervention
              </p>
            </div>
          </div>
        </div>

        {/* HERO PORTRAITS */}
        <div className="war-children-hero">
  <div className="war-children-hero-image">
  <img
  src={warHero01}
  alt=""
  loading="eager"
  fetchPriority="high"
  decoding="async"
/>
  </div>

  <div className="war-children-hero-image">
  <img
  src={warHero02}
  alt=""
  loading="eager"
  decoding="async"
/>
  </div>

  <div className="war-children-hero-image">
  <img
  src={warHero03}
  alt=""
  loading="eager"
  decoding="async"
/>
  </div>
</div>

        {/* THE INTERVENTION */}
        <section className="war-intervention-intro">
          <h2 className="ecosystem-heading">The Intervention</h2>

          <p className="ecosystem-intro">
            The poster series was designed as a temporal intervention rather
            than a single static campaign. Each day introduced another stage
            of the work, allowing the imagery to accumulate gradually before
            the final message was revealed. This progression used repetition
            and anticipation to encourage viewers to notice the changing
            public space and reconsider the individual faces within the larger
            context of war.
          </p>
        </section>

        {/* SEQUENTIAL REVEAL */}
        <section className="healthgauge-section war-section">
          <h2 className="project-section-title">Sequential Reveal</h2>

          <p className="project-section-body">
            The intervention unfolded in stages over several days. The first
            poster introduced a single child’s portrait without explanation.
            Additional faces appeared in the days that followed, gradually
            increasing the visual presence of the work. In the final stage,
            the earlier posters were replaced with a large-format composition
            that brought the portraits together and revealed the complete
            campaign message.
          </p>

          <div className="war-sequence-grid">
  <div className="war-sequence-card">
    <div className="war-sequence-item">
    <img
  src={sequential01}
  alt=""
  loading="lazy"
  decoding="async"
/>
    </div>
    <span className="war-sequence-label">DAY 01</span>
  </div>

  <div className="war-sequence-card">
    <div className="war-sequence-item">
    <img
  src={sequential02}
  alt=""
  loading="lazy"
  decoding="async"
/>
    </div>
    <span className="war-sequence-label">DAY 02</span>
  </div>

  <div className="war-sequence-card">
    <div className="war-sequence-item">
    <img
  src={sequential03}
  alt=""
  loading="lazy"
  decoding="async"
/>
    </div>
    <span className="war-sequence-label">DAY 03</span>
  </div>

  <div className="war-sequence-card">
    <div className="war-sequence-item">
    <img
  src={sequential04}
  alt=""
  loading="lazy"
  decoding="async"
/>
    </div>
    <span className="war-sequence-label">DAY 04</span>
  </div>
</div>

<div className="war-wall-image">
<img
  src={sequential05}
  alt=""
  loading="lazy"
  decoding="async"
/>
</div>
        </section>

        {/* PORTRAIT SYSTEM */}
        <section className="healthgauge-section war-section">
          <h2 className="project-section-title">Portrait System</h2>

          <p className="project-section-body">
            The portraits became the visual language of the project. Each face
            was developed as an expressive, individually distinct image, with
            shifts in color, gesture, texture, and mark-making emphasizing a
            sense of singularity. As the intervention unfolded, these portraits
            accumulated across the poster series, moving from isolated
            encounters to a collective field of faces.
          </p>

          <div className="war-portrait-system-image">
          <img
  src={warPoster}
  alt=""
  loading="lazy"
  decoding="async"
/>
</div>
        </section>

        {/* FINAL POSTER */}
        <section className="healthgauge-section war-section war-final-poster-section">
          <h2 className="project-section-title">The Final Poster</h2>

          <p className="project-section-body">
  The final poster brought the accumulated portraits together and introduced
  the project’s full message. After several days of partial and unexplained
  encounters, the complete composition reframed the earlier images as part of
  a larger statement about childhood, vulnerability, and the human cost of war.
</p>
        </section>

        {/* EDITORIAL EXTENSION */}
        <section className="healthgauge-section war-section">
          <h2 className="project-section-title">Editorial Extension</h2>

          <div className="war-editorial-grid">
  <div className="war-editorial-image war-editorial-image-large">
  <img
  src={warEditorial01}
  alt=""
  loading="lazy"
  decoding="async"
/>
  </div>

  <div className="war-editorial-image war-editorial-image-small">
  <img
  src={warEditorial02}
  alt=""
  loading="lazy"
  decoding="async"
/>
  </div>
</div>
        </section>

        <ProjectNavigation projectId={8} />

      </main>

      <Footer />
    </div>
  );
}
/* REVAYAT PROJECT PAGE */

if (typeof view === 'object' && view.id === 6) {
  const project = view;

  return (
    <div>
      <Header />

      <main className="page-content project-page revayat-page">

        {/* PROJECT HEADER */}
        <div className="editorial-grid project-header-grid">
          <div className="col-8">
            <h1 className="project-title">{project.title}</h1>
            <p className="project-intro">{project.intro}</p>
          </div>

          <div className="col-4 project-meta">
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
              <p>
                Design Research · Campaign Design ·
                <br />
                Visual Identity · Illustration ·
                <br />
                Interactive Design
              </p>
            </div>
          </div>
        </div>

        {/* HERO */}
        <div className="revayat-hero">
  <div className="revayat-hero-image">
  <img
  src={revayatHero01}
  alt=""
  loading="eager"
  fetchPriority="high"
  decoding="async"
/>
  </div>

  <div className="revayat-hero-image">
  <img
  src={revayatHero02}
  alt=""
  loading="eager"
  decoding="async"
/>
  </div>

  <div className="revayat-hero-image">
  <img
  src={revayatHero03}
  alt=""
  loading="eager"
  decoding="async"
/>
  </div>
</div>

        {/* FROM RESEARCH TO STRATEGY */}
        <section className="revayat-research-intro">
          <h2 className="ecosystem-heading">From Research to Strategy</h2>

          <p className="ecosystem-intro">
            Through interviews, questionnaires, and secondary research, the
            project identified a tension between awareness and action.
            Participants expressed strong concern about gender inequality,
            while also describing fear, frustration, and uncertainty about how
            meaningful change could happen. The research also revealed limited
            familiarity with Iranian women role models and with forms of
            resistance beyond direct protest. These findings shaped Revayat as
            a two-part campaign: a poster series introducing influential
            Iranian women, and a participatory digital platform designed for
            storytelling, exchange, and user-generated content.
          </p>
        </section>

        {/* DESIGNING THE CAMPAIGN */}
        <section className="healthgauge-section revayat-section">
          <h2 className="project-section-title">Designing the Campaign</h2>

          <p className="project-section-body">
            The research translated into a two-part communication system. The
            poster series introduced five influential Iranian women across
            literature, art, justice, leadership, and science, using their
            stories to connect individual achievement with broader questions
            of rights and social change. Each poster combined a digitally
            painted portrait, bilingual text, and Persian calligraphic forms
            built from words associated with freedom, justice, equality,
            autonomy, and empowerment.
          </p>

          <div className="revayat-campaign-grid">
  <div className="revayat-campaign-large">
  <img
  src={revayatCamp01}
  alt=""
  loading="lazy"
  decoding="async"
/>
  </div>

  <div className="revayat-campaign-small">
  <img
  src={revayatCamp02}
  alt=""
  loading="lazy"
  decoding="async"
/>
  </div>
</div>
        </section>

        {/* BUILDING THE VISUAL LANGUAGE */}
        <section className="healthgauge-section revayat-section">
          <h2 className="project-section-title">
            Building the Visual Language
          </h2>

          <p className="project-section-body">
            The visual language combines digitally painted portraits with
            bilingual typography and Persian calligraphy. Each portrait was
            rendered in a classical painting style to give the women a sense
            of presence and dignity, while the calligraphic forms introduce
            words associated with freedom, justice, equality, autonomy, and
            empowerment. Together, image and text create a system that connects
            each woman’s individual story to the broader themes of the campaign.
          </p>

          <div className="revayat-visual-grid">
  <div className="revayat-visual-image">
    <img
      src={revayatVisual01}
      alt=""
      decoding="async"
    />
  </div>

  <div className="revayat-visual-image">
    <img
      src={revayatVisual03}
      alt=""
      decoding="async"
    />
  </div>

  <div className="revayat-visual-image">
    <img
      src={revayatVisual02}
      alt=""
      decoding="async"
    />
  </div>

  <div className="revayat-visual-image">
    <img
      src={revayatVisual04}
      alt=""
      decoding="async"
    />
  </div>
</div>
        </section>

        {/* BUILDING THE IDENTITY */}
        <section className="healthgauge-section revayat-section">
          <h2 className="project-section-title">Building the Identity</h2>

          <div className="revayat-identity-grid">
  <div className="revayat-identity-left">
  <img
  src={revayatIdentity01}
  alt=""
  loading="lazy"
  decoding="async"
/>
  </div>

  <div className="revayat-identity-right">
  <img
  src={revayatIdentity02}
  alt=""
  loading="lazy"
  decoding="async"
/>
  </div>
</div>
        </section>

        {/* DESIGNING FOR PARTICIPATION */}
        <section className="healthgauge-section revayat-section">
          <h2 className="project-section-title">
            Designing for Participation
          </h2>

          <div className="revayat-participation-grid">
  <div className="revayat-participation-left">
  <img
  src={revayatParticipation01}
  alt=""
  loading="lazy"
  decoding="async"
/>
  </div>

  <div className="revayat-participation-right">
  <img
  src={revayatParticipation02}
  alt=""
  loading="lazy"
  decoding="async"
/>
  </div>
</div>
        </section>

        {/* CAMPAIGN IN CONTEXT */}
        <section className="healthgauge-section revayat-section">
          <h2 className="project-section-title">Campaign in Context</h2>

          <div className="revayat-context-grid">
  <div className="revayat-context-left">
  <img
  src={revayatContext01}
  alt=""
  loading="lazy"
  decoding="async"
/>
  </div>

  <div className="revayat-context-right">
  <img
  src={revayatContext02}
  alt=""
  loading="lazy"
  decoding="async"
/>
  </div>
</div>
        </section>

        <ProjectNavigation projectId={6} />

      </main>

      <Footer />
    </div>
  );
}
/* MISSION NORTH PROJECT PAGE */

if (typeof view === 'object' && view.id === 4) {
  const project = view;

  return (
    <div>
      <Header />

      <main className="page-content project-page mission-north-page">

        {/* PROJECT HEADER */}
        <div className="editorial-grid project-header-grid">
          <div className="col-8">
            <h1 className="project-title">{project.title}</h1>
            <p className="project-intro">{project.intro}</p>
          </div>

          <div className="col-4 project-meta">
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
              <p>
                Brand Identity · Logo Design ·
                <br />
                Visual System
              </p>
            </div>
          </div>
        </div>

        {/* HERO / IDENTITY OVERVIEW */}
        <div className="mn-hero">
  <div className="mn-hero-left">
    <div className="mn-hero-left-01">
    <img
  src={mnHero01}
  alt=""
  loading="eager"
  fetchPriority="high"
  decoding="async"
/>
    </div>

    <div className="mn-hero-left-02">
    <img
  src={mnHero02}
  alt=""
  loading="eager"
  decoding="async"
/>
    </div>

    <div className="mn-hero-left-03">
    <img
  src={mnHero03}
  alt=""
  loading="eager"
  decoding="async"
/>
    </div>
  </div>

  <div className="mn-hero-right">
    <div className="mn-hero-right-01">
    <img
  src={mnHero04}
  alt=""
  loading="eager"
  decoding="async"
/>
    </div>

    <div className="mn-hero-right-02">
    <img
  src={mnHero05}
  alt=""
  loading="eager"
  decoding="async"
/>
    </div>
  </div>
</div>

        {/* BUILDING THE IDENTITY */}
        <section className="mn-identity-intro">
          <h2 className="ecosystem-heading">Building the Identity</h2>

          <p className="ecosystem-intro">
            Mission North emerged from the rebranding of Bateman Group at a
            moment of leadership transition and renewed direction for the
            agency. The identity needed to signal this shift while retaining
            the confidence expected of an established communications firm.
            The brief called for a more feminine and approachable visual
            character, which I developed through the logo, typography, color,
            graphic language, and supporting applications.
          </p>
        </section>

        {/* LOGO DEVELOPMENT */}
        <section className="healthgauge-section mn-section">
          <h2 className="project-section-title">Logo Development</h2>

          <p className="project-section-body">
            The logo was developed around the directional meaning embedded in
            the Mission North name. The&nbsp;N° became a compact visual shorthand
            for north, navigation, and orientation, extending the concept of
            the agency as a source of direction for its clients. I developed
            primary and abbreviated lockups, proportions, spacing, and color
            applications to create a flexible identity across print and
            digital contexts.
          </p>

          <div className="mn-logo-row-1">
  <div className="mn-logo-large">
  <img src={mnLogo01} alt="" loading="lazy" decoding="async" />
  </div>

  <div className="mn-logo-large">
  <img src={mnLogo02} alt="" loading="lazy" decoding="async" />
  </div>
</div>

<div className="mn-logo-row-2">
  <div className="mn-logo-small">
  <img src={mnLogo03} alt="" loading="lazy" decoding="async" />
  </div>

  <div className="mn-logo-small">
  <img src={mnLogo04} alt="" loading="lazy" decoding="async" />
  </div>

  <div className="mn-logo-small">
  <img src={mnLogo05} alt="" loading="lazy" decoding="async" />
  </div>
</div>
        </section>

        {/* VISUAL IDENTITY SYSTEM */}
        <section className="healthgauge-section mn-section">
          <h2 className="project-section-title">
            Visual Identity System
          </h2>

          <p className="project-section-body">
            The visual system balanced clarity and confidence with the softer,
            more feminine character requested in the brief. I developed a
            palette of vivid and muted colors, paired with a restrained
            typographic and graphic system that could move between corporate
            communication, editorial content, digital applications, and
            branded collateral.
          </p>

          <div className="mn-colour-subsection">
            <h3 className="mn-subsection-title">Colour Palette</h3>
            <div className="mn-colour-image">
            <img
  src={mnColor}
  alt=""
  loading="lazy"
  decoding="async"
/>
</div>
          </div>

          <div className="mn-typography-subsection">
            <h3 className="mn-subsection-title">Typography</h3>
            <div className="mn-typography-image">
            <img
  src={mnType}
  alt=""
  loading="lazy"
  decoding="async"
/>
</div>
          </div>
        </section>

        {/* BRAND APPLICATIONS */}
        <section className="healthgauge-section mn-section">
          <h2 className="project-section-title">Brand Applications</h2>

          <p className="project-section-body">
            The visual system extended into a range of corporate and
            promotional communications, including marketing assets,
            presentation materials, and other brand applications. I adapted
            the core visual language across formats while maintaining a
            recognizable relationship to the website and broader identity.
          </p>

          <div className="mn-brand-row-1">
  <div className="mn-brand-row-1-large">
  <img src={mnBrand01} alt="" loading="lazy" decoding="async" />
  </div>

  <div className="mn-brand-row-1-small">
  <video
  src={mnBrandVideo}
  autoPlay
  muted
  loop
  playsInline
  preload="metadata"
/>
  </div>
</div>

<div className="mn-brand-row-2">
  <div className="mn-brand-row-2-small">
  <img src={mnBrand03} alt="" loading="lazy" decoding="async" />
  </div>

  <div className="mn-brand-row-2-large">
  <img src={mnBrand04} alt="" loading="lazy" decoding="async" />
  </div>
</div>
        </section>

        {/* DIGITAL EXPERIENCE */}
        <section className="healthgauge-section mn-section">
          <h2 className="project-section-title">Digital Experience</h2>

          <p className="project-section-body">
            The Mission North identity extended into the website through a
            flexible system of typography, color, photography, and editorial
            layouts. The digital experience translated the brand’s confident
            but approachable character into a content-rich platform for
            presenting the agency’s work, culture, and point of view.
          </p>

          <div className="mn-digital-grid">
  <div className="mn-digital-large">
    <img
      src={mnDigital01}
      alt=""
      loading="lazy"
      decoding="async"
    />
  </div>

  <div className="mn-digital-stack">
    <div className="mn-digital-small-top">
      <img
        src={mnDigital02}
        alt=""
        loading="lazy"
        decoding="async"
      />
    </div>

    <div className="mn-digital-small-bottom">
      <img
        src={mnDigital03}
        alt=""
        loading="lazy"
        decoding="async"
      />
    </div>
  </div>
</div>
        </section>

        <ProjectNavigation projectId={4} />

      </main>

      <Footer />
    </div>
  );
}
/* UNUSUAL VENTURES PROJECT PAGE */

if (typeof view === 'object' && view.id === 3) {
  const project = view;

  return (
    <div>
      <Header />

      <main className="page-content project-page unusual-ventures-page">

        {/* PROJECT HEADER */}
        <div className="editorial-grid project-header-grid">
          <div className="col-8">
            <h1 className="project-title">{project.title}</h1>
            <p className="project-intro">{project.intro}</p>
          </div>

          <div className="col-4 project-meta">
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
              <p>
                Visual Identity · Illustration ·
                <br />
                Digital Experience · Presentation Design
              </p>
            </div>
          </div>
        </div>

        {/* HERO */}
        <div className="uv-hero">
  <div className="uv-hero-large">
    <img
      src={uvHero01}
      alt=""
      loading="eager"
      fetchPriority="high"
      decoding="async"
    />
  </div>

  <div className="uv-hero-stack">
  <div className="uv-hero-small-top">
  <video
    src={uvHeroVideo}
    poster={uvHero02}
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
  />
</div>

    <div className="uv-hero-small-bottom">
      <img
        src={uvHero03}
        alt=""
        loading="eager"
        decoding="async"
      />
    </div>
  </div>
</div>

        {/* BUILDING THE VISUAL LANGUAGE */}
        <section className="uv-visual-language-intro">
          <h2 className="ecosystem-heading">
            Building the Visual Language
          </h2>

          <p className="ecosystem-intro">
  The visual language was developed around the metaphor of a founder’s journey,
  using landscape, character, color, and illustration to create a recognizable
  world across the Unusual Ventures brand. The system was designed to support
  both digital storytelling and broader communication applications.
</p>
        </section>

        {/* STORY-LED DIGITAL EXPERIENCE */}
        <section className="healthgauge-section uv-section">
          <h2 className="project-section-title">
            Story-led Digital Experience
          </h2>

          <p className="project-section-body">
  The website translated this visual language into an interactive journey.
  Visitors moved through a connected landscape of destinations, with navigation,
  animation, and illustrated transitions revealing different areas of the
  Unusual Ventures ecosystem.
</p>

<div className="uv-digital-row-1">
  <video
    src={uvDigitalVideo01}
    poster={uvDigital01}
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
  />
</div>

<div className="uv-digital-row-2">
<div className="uv-digital-half">
  <img
    src={uvDigital02}
    alt=""
    loading="lazy"
    decoding="async"
  />
</div>

  <div className="uv-digital-half">
    <video
      src={uvDigitalVideo03}
      poster={uvDigital04}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
    />
  </div>
</div>
</section>

        {/* ILLUSTRATION SYSTEM */}
        <section className="healthgauge-section uv-section">
          <h2 className="project-section-title">
            Illustration System
          </h2>

          <p className="project-section-body">
  I developed a flexible illustration system that gave Unusual Ventures a
  distinctive visual world across digital and communication applications.
  Landscapes, characters, environmental details, and narrative objects were
  designed as a cohesive vocabulary that could shift across different stories
  and contexts while maintaining a recognizable visual language.
</p>

          <div className="uv-illustration-large">
  <img
    src={uvIllustration01}
    alt=""
    loading="lazy"
    decoding="async"
  />
</div>

<div className="uv-illustration-grid">
  <div className="uv-illustration-small">
    <img
      src={uvIllustration02}
      alt=""
      loading="lazy"
      decoding="async"
    />
  </div>

  <div className="uv-illustration-small">
    <img
      src={uvIllustration03}
      alt=""
      loading="lazy"
      decoding="async"
    />
  </div>

  <div className="uv-illustration-small">
    <img
      src={uvIllustration04}
      alt=""
      loading="lazy"
      decoding="async"
    />
  </div>
</div>

          {/* TEAM MEMBERS AS CHARACTERS */}
          <div className="uv-team-subsection">
          <h3 className="ecosystem-heading">
              Team Members as Characters
            </h3>

            <p className="project-section-body">
  Some characters within the Unusual Ventures brand world were developed from
  photographs of actual team members and founders. I translated these individuals
  into the illustration system so they could appear naturally across narrative
  scenes and communications. Within broader journey scenes, Unusual Ventures team
  members were often identified through the brand’s signature blue, creating a
  consistent visual cue that distinguished them from founders, partners, and
  other participants.
</p>

<div className="uv-team-grid">
  <figure className="uv-captioned-figure">
    <div className="uv-team-image">
      <img
        src={uvTeam01}
        alt=""
        loading="lazy"
        decoding="async"
      />
    </div>

    <figcaption className="uv-image-caption">
      Founders translated from photographic references
    </figcaption>
  </figure>

  <figure className="uv-captioned-figure">
    <div className="uv-team-image">
      <img
        src={uvTeam02}
        alt=""
        loading="lazy"
        decoding="async"
      />
    </div>

    <figcaption className="uv-image-caption">
  UV team members integrated into
  <br />
  narrative brand scenes
</figcaption>
  </figure>

  <figure className="uv-captioned-figure">
    <div className="uv-team-image">
      <img
        src={uvTeam03}
        alt=""
        loading="lazy"
        decoding="async"
      />
    </div>

    <figcaption className="uv-image-caption">
      Team members identified through signature blue
    </figcaption>
  </figure>
</div>
</div>
        </section>

        {/* VISUAL IDENTITY SYSTEM */}
        <section className="healthgauge-section uv-section">
          <h2 className="project-section-title">
            Visual Identity System
          </h2>

          <p className="project-section-body">
  Working with Unusual Ventures’ existing logo, I developed the broader visual
  identity surrounding it, establishing a cohesive system of color, typography,
  illustration, and graphic elements. These elements created consistency across
  the website and provided a visual foundation that could extend across the
  company’s materials.
</p>

<p className="brand-disclaimer uv-visual-identity-disclaimer">
  The Unusual Ventures logo predated my engagement. My work focused on developing the broader visual identity system around it.
</p>

          <div className="uv-colour-subsection">
  <h3 className="ecosystem-heading">
    Colour Palette
  </h3>

  <div className="uv-colour-image">
    <img
      src={uvColor}
      alt=""
      loading="lazy"
      decoding="async"
    />
  </div>
</div>

<div className="uv-type-subsection">
  <h3 className="ecosystem-heading">
    Typography
  </h3>

  <div className="uv-type-image">
    <img
      src={uvType}
      alt=""
      loading="lazy"
      decoding="async"
    />
  </div>
</div>

<div className="uv-type-use-subsection">
  <h3 className="ecosystem-heading">
    Typography in Use
  </h3>

  <div className="uv-type-use-image">
    <img
      src={uvTypeUse}
      alt=""
      loading="lazy"
      decoding="async"
    />
  </div>
</div>
</section>

        {/* PRESENTATION SYSTEM */}
        <section className="healthgauge-section uv-section">
          <h2 className="project-section-title">
            Presentation System
          </h2>

          <p className="project-section-body">
  I developed a flexible presentation system that extended the Unusual Ventures
  identity into internal and external communications. The template included
  modular layouts for organizational structures, data visualization, editorial
  storytelling, quotes, and section openers, giving teams a consistent framework
  for building presentations across different communication needs.
</p>

<div className="uv-presentation-grid">
  <figure className="uv-captioned-figure">
    <div className="uv-presentation-image">
      <img
        src={uvPresentation01}
        alt=""
        loading="lazy"
        decoding="async"
      />
    </div>

    <figcaption className="uv-image-caption">
      Branded cover / section opener
    </figcaption>
  </figure>

  <figure className="uv-captioned-figure">
    <div className="uv-presentation-image">
      <img
        src={uvPresentation02}
        alt=""
        loading="lazy"
        decoding="async"
      />
    </div>

    <figcaption className="uv-image-caption">
      Data visualization template
    </figcaption>
  </figure>

  <figure className="uv-captioned-figure">
    <div className="uv-presentation-image">
      <img
        src={uvPresentation03}
        alt=""
        loading="lazy"
        decoding="async"
      />
    </div>

    <figcaption className="uv-image-caption">
      Journey / process diagram
    </figcaption>
  </figure>

  <figure className="uv-captioned-figure">
    <div className="uv-presentation-image">
      <img
        src={uvPresentation04}
        alt=""
        loading="lazy"
        decoding="async"
      />
    </div>

    <figcaption className="uv-image-caption">
      Editorial quote layout
    </figcaption>
  </figure>
</div>
        </section>

        {/* BRAND COMMUNICATIONS */}
        <section className="healthgauge-section uv-section">
          <h2 className="project-section-title">
            Brand Communications
          </h2>

          <p className="project-section-body">
  The visual identity extended across editorial, social, and informational
  communications, adapting the illustration system to different formats and
  levels of complexity. From social graphics and branded collateral to
  information-rich diagrams, the system maintained a recognizable voice while
  supporting a wide range of communication needs.
</p>

<div className="uv-communications-01">
  <img
    src={uvCommunication01}
    alt=""
    loading="lazy"
    decoding="async"
  />
</div>
<span className="uv-image-caption">
  Branded sticker system
</span>

<div className="uv-communications-02">
  <img
    src={uvCommunication02}
    alt=""
    loading="lazy"
    decoding="async"
  />
</div>
<span className="uv-image-caption">
  Illustrated entrepreneur journey infographic
</span>

<div className="uv-communications-03">
  <img
    src={uvCommunication03}
    alt=""
    loading="lazy"
    decoding="async"
  />
</div>
<span className="uv-image-caption">
  Social brand application
</span>
        </section>

        <ProjectNavigation projectId={3} />

      </main>

      <Footer />
    </div>
  );
}
/* PLAYFUL WALKING PROJECT PAGE */

if (typeof view === 'object' && view.id === 5) {
  const project = view;

  return (
    <div>
      <Header />

      <main className="page-content project-page playful-walking-page">

        {/* PROJECT HEADER */}
        <div className="editorial-grid project-header-grid">
          <div className="col-8">
            <h1 className="project-title">{project.title}</h1>
            <p className="project-intro">{project.intro}</p>
          </div>

          <div className="col-4 project-meta">
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

        {/* HERO */}
        <div className="walking-hero">
          <div className="walking-hero-large">
            <img
              src={walkingHero01}
              alt=""
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>

          <div className="walking-hero-small">
            <img
              src={walkingHero02}
              alt=""
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
        {/* ESTABLISHING THE EDITORIAL LANGUAGE */}
<section className="walking-editorial-language">
  <h2 className="ecosystem-heading">
    Establishing the Editorial Language
  </h2>

  <p className="ecosystem-intro">
    The three-volume series required a visual system that could create continuity
    across the collection while accommodating scholarly writing, artistic research,
    and highly varied image-based contributions. I developed a restrained editorial
    language through typography, hierarchy, spacing, and page structure, establishing
    a recognizable rhythm across all three books while allowing individual chapters
    and artworks to retain their own character and material specificity.
  </p>
</section>
{/* DESIGNING THE READING EXPERIENCE */}
<section className="walking-section">
  <h2 className="project-section-title">
    Designing the Reading Experience
  </h2>

  <p className="project-section-body">
    The editorial system was designed to support movement between sustained reading,
    visual inquiry, and moments of reflection across the three-volume series. I used
    shifts in scale, image placement, white space, and typographic hierarchy to create
    a clear reading rhythm, allowing text-heavy passages and artwork-driven spreads
    to coexist without competing for attention.
  </p>

  <div className="walking-reading-image">
    <img
      src={walkingReadingExperience}
      alt=""
      loading="lazy"
      decoding="async"
    />
  </div>
</section>
{/* COLOR ACROSS THE SERIES */}
<section className="walking-section">
  <h2 className="project-section-title">
    Color Across the Series
  </h2>

  <p className="project-section-body">
    The three-volume series shared a consistent editorial structure while each book
    was assigned its own accent color. Blue, yellow, and coral were carried through
    section openers, typographic details, and navigational elements, allowing each
    volume to establish a distinct identity while remaining part of a unified
    collection.
  </p>
  <div className="walking-color-legend">
  <div className="walking-color-key">
    <span>BOOK I</span>
    <span className="walking-color-dot walking-color-dot-blue"></span>
    <span>Blue</span>
  </div>

  <div className="walking-color-key">
    <span>BOOK II</span>
    <span className="walking-color-dot walking-color-dot-coral"></span>
    <span>Coral</span>
  </div>

  <div className="walking-color-key">
    <span>BOOK III</span>
    <span className="walking-color-dot walking-color-dot-yellow"></span>
    <span>Yellow</span>
  </div>
</div>

  <div className="walking-color-row">
    <div className="walking-color-image">
      <img
        src={walkingColor01}
        alt=""
        loading="lazy"
        decoding="async"
      />
    </div>

    <div className="walking-color-image">
      <img
        src={walkingColor02}
        alt=""
        loading="lazy"
        decoding="async"
      />
    </div>
  </div>
</section>
{/* IMAGE INTEGRATION & ART DIRECTION */}
<section className="walking-section">
  <h2 className="project-section-title">
    Image Integration & Art Direction
  </h2>

  <p className="project-section-body">
    The books brought together artwork, photographs, diagrams, and other visual
    material from multiple contributors, often with very different proportions,
    resolutions, and aesthetic qualities. I developed flexible image-placement
    strategies that allowed each contribution to retain its individuality while
    remaining integrated within the larger editorial system. Cropping, scale,
    sequencing, captions, and surrounding white space were adjusted carefully
    to support both visual impact and readability.
  </p>

  <div className="walking-art-direction-grid">
    <div className="walking-art-direction-image">
      <img
        src={walkingArtDirection01}
        alt=""
        loading="lazy"
        decoding="async"
      />
    </div>

    <div className="walking-art-direction-image">
      <img
        src={walkingArtDirection02}
        alt=""
        loading="lazy"
        decoding="async"
      />
    </div>

    <div className="walking-art-direction-image">
      <img
        src={walkingArtDirection03}
        alt=""
        loading="lazy"
        decoding="async"
      />
    </div>

    <div className="walking-art-direction-image">
      <img
        src={walkingArtDirection04}
        alt=""
        loading="lazy"
        decoding="async"
      />
    </div>
  </div>
</section>
{/* PAGE ARCHITECTURE */}
<section className="walking-section">
  <h2 className="project-section-title">
    Page Architecture
  </h2>

  <p className="project-section-body">
    A modular page architecture was developed to accommodate a wide range of
    content types while maintaining consistency across the series. Flexible
    templates supported long-form text, image-led spreads, quotations, captions,
    and mixed-media contributions, giving each chapter enough freedom to respond
    to its material while preserving a coherent editorial structure.
  </p>

  <div className="walking-architecture-row">
    <div className="walking-architecture-half">
      <img
        src={walkingArchitecture01}
        alt=""
        loading="lazy"
        decoding="async"
      />
    </div>

    <div className="walking-architecture-half">
      <img
        src={walkingArchitecture02}
        alt=""
        loading="lazy"
        decoding="async"
      />
    </div>
  </div>

  <div className="walking-architecture-full">
    <img
      src={walkingArchitecture03}
      alt=""
      loading="lazy"
      decoding="async"
    />
  </div>
</section>
{/* CLOSING IMAGE */}
<section className="walking-closing">
  <img
    src={walkingClosing}
    alt=""
    loading="lazy"
    decoding="async"
  />
</section>

        <ProjectNavigation projectId={5} />

      </main>

      <Footer />
    </div>
  );
}
/* MAPPING MY EDMONTON PROJECT PAGE */

if (typeof view === 'object' && view.id === 9) {
  const project = view;

  return (
    <div>
      <Header />

      <main className="page-content project-page mapping-page">

        {/* PROJECT HEADER */}
        <div className="editorial-grid project-header-grid">
          <div className="col-8">
            <h1 className="project-title">{project.title}</h1>
            <p className="project-intro">{project.intro}</p>
          </div>

          <div className="col-4 project-meta">
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

        {/* HERO */}
        <div className="mapping-hero">
          <div className="mapping-hero-large">
            <img
              src={mapHero01}
              alt=""
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>

          <div className="mapping-hero-stack">
            <div className="mapping-hero-small-top">
              <img
                src={mapHero02}
                alt=""
                loading="eager"
                decoding="async"
              />
            </div>

            <div className="mapping-hero-small-bottom">
              <img
                src={mapHero03}
                alt=""
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
        {/* MAPPING A PERSONAL GEOGRAPHY */}
<section className="mapping-section mapping-personal-geography">
  <h2 className="project-section-title">
    Mapping a Personal Geography
  </h2>

  <p className="project-section-body">
    The project began with the idea of mapping everyday movement through the city.
    I used my own shoes as markers of different journeys, connecting personal routines
    and memories with Edmonton’s streets, landmarks, transit routes, and seasonal
    conditions.
  </p>

  <p className="project-section-body mapping-personal-paragraph">
    The result became a form of autobiographical cartography — a map of the city
    shaped through walking, movement, and lived experience.
  </p>

  <div className="mapping-legend">

    <div className="mapping-legend-item">
      <img src={mapLocationIcon} alt="" />
      <div>
        <h3>PLACES I GO</h3>
        <p>Locations that are part of my everyday routines and experiences.</p>
      </div>
    </div>

    <div className="mapping-legend-item">
      <img src={mapRouteIcon} alt="" />
      <div>
        <h3>ROUTES &amp; TRANSIT</h3>
        <p>Streets, paths, and LRT lines that connect me to the city.</p>
      </div>
    </div>

    <div className="mapping-legend-item">
      <img src={mapTreeIcon} alt="" />
      <div>
        <h3>SEASONS &amp; CLIMATE</h3>
        <p>Weather and seasonal details that shape the way we move.</p>
      </div>
    </div>

    <div className="mapping-legend-item">
      <img src={mapLandmarkIcon} alt="" />
      <div>
        <h3>LANDMARKS</h3>
        <p>Recognizable places that define the city’s character and memory.</p>
      </div>
    </div>

    <div className="mapping-legend-item mapping-legend-item-shoe">
  <img src={mapShoeIcon} alt="" />
  <div>
    <h3>MY SHOES</h3>
    <p>Shoes marking journeys, years, and personal stories.</p>
  </div>
</div>

  </div>
</section>
{/* TWO SEASONS, ONE SYSTEM */}
<section className="mapping-section">
  <h2 className="project-section-title">
    Two Seasons, One System
  </h2>

  <p className="project-section-body">
    The two maps were built from the same underlying geography and visual vocabulary,
    but adapted to reflect Edmonton across contrasting seasons. The landscape palette,
    weather information, environmental details, and shoe inventories shift between
    summer and winter, while landmarks, routes, location markers, and the overall
    information structure remain consistent across both seasonal interpretations
    of the city.
  </p>

  <div className="mapping-seasons-row">
    <figure className="mapping-season-figure">
      <div className="mapping-season-image">
        <img
          src={mapTwoSeasons01}
          alt=""
          loading="lazy"
          decoding="async"
        />
      </div>

      <figcaption className="mapping-image-caption">
        WINTER — SNOW-COVERED LANDSCAPE · WINTER FOOTWEAR · SNOWFALL
      </figcaption>
    </figure>

    <figure className="mapping-season-figure">
      <div className="mapping-season-image">
        <img
          src={mapTwoSeasons02}
          alt=""
          loading="lazy"
          decoding="async"
        />
      </div>

      <figcaption className="mapping-image-caption">
        SUMMER — WARMER PALETTE · SUMMER FOOTWEAR · PRECIPITATION
      </figcaption>
    </figure>
  </div>
</section>
{/* SHOES AS PERSONAL DATA */}
<section className="mapping-section">
  <h2 className="project-section-title">
    Shoes as Personal Data
  </h2>

  <p className="project-section-body">
    Footwear became a personal data layer within the maps. Each shoe was illustrated
    and paired with information such as brand, year, and price, creating a visual
    inventory connected to different periods of my life and patterns of movement
    through the city. By placing these objects alongside geographic and seasonal
    information, the maps combine quantitative details with memory, routine, and
    personal experience.
  </p>

  <div className="mapping-shoes-grid">
  <div className="mapping-shoes-column">
  <h3 className="mapping-shoes-label">WINTER SHOES</h3>

  <figure className="mapping-shoe-row">
    <div className="mapping-shoes-image">
      <img
        src={mapShoes01}
        alt=""
        loading="lazy"
        decoding="async"
      />
    </div>

    <figcaption className="mapping-shoe-captions">
      <span>FRANCO SARTO · 2016 · $160</span>
      <span>BAUER · 2015 · $110</span>
    </figcaption>
  </figure>

  <figure className="mapping-shoe-row">
    <div className="mapping-shoes-image">
      <img
        src={mapShoes02}
        alt=""
        loading="lazy"
        decoding="async"
      />
    </div>

    <figcaption className="mapping-shoe-captions">
      <span>FRYE · 2014 · $180</span>
      <span>CONVERSE · 2015 · $90</span>
    </figcaption>
  </figure>
</div>

<div className="mapping-shoes-column">
  <h3 className="mapping-shoes-label">SUMMER SHOES</h3>

  <figure className="mapping-shoe-row">
    <div className="mapping-shoes-image">
      <img
        src={mapShoes03}
        alt=""
        loading="lazy"
        decoding="async"
      />
    </div>

    <figcaption className="mapping-shoe-captions">
      <span>KARL LAGERFELD · 2016 · $130</span>
      <span>KARL LAGERFELD · 2015 · $150</span>
    </figcaption>
  </figure>

  <figure className="mapping-shoe-row">
    <div className="mapping-shoes-image">
      <img
        src={mapShoes04}
        alt=""
        loading="lazy"
        decoding="async"
      />
    </div>

    <figcaption className="mapping-shoe-captions">
      <span>FRANCO SARTO · 2015 · $140</span>
      <span>KARL LAGERFELD · 2014 · $90</span>
    </figcaption>
  </figure>
</div>  </div>
</section>
{/* ILLUSTRATING THE CITY */}
<section className="mapping-section">
  <h2 className="project-section-title">
    Illustrating the City
  </h2>

  <p className="project-section-body">
    Edmonton’s landmarks were translated into a simplified illustration language
    so they could remain recognizable while functioning within the map’s broader
    information system. I reduced buildings, transit stops, bridges, landscape
    elements, and other familiar places into consistent geometric forms, balancing
    enough detail to preserve their identity with enough abstraction to keep the
    maps legible at a distance.
  </p>

  <div className="mapping-landmarks-top">
    <figure className="mapping-landmark-top-figure">
      <div className="mapping-landmark-top-image">
        <img
          src={mapLandmark01}
          alt=""
          loading="lazy"
          decoding="async"
        />
      </div>
      <figcaption className="mapping-landmark-caption">
        ART GALLERY OF ALBERTA · SIR WINSTON CHURCHILL SQ
      </figcaption>
    </figure>

    <figure className="mapping-landmark-top-figure">
      <div className="mapping-landmark-top-image">
        <img
          src={mapLandmark02}
          alt=""
          loading="lazy"
          decoding="async"
        />
      </div>
      <figcaption className="mapping-landmark-caption">
        LEGISLATIVE BUILDING · 10800 97 AVE NW
      </figcaption>
    </figure>
  </div>

  <div className="mapping-landmarks-bottom">
    <figure className="mapping-landmark-bottom-figure">
      <div className="mapping-landmark-bottom-image">
        <img
          src={mapLandmark03}
          alt=""
          loading="lazy"
          decoding="async"
        />
      </div>
      <figcaption className="mapping-landmark-caption">
        WEST EDMONTON MALL · 8882 170 ST NW
      </figcaption>
    </figure>

    <figure className="mapping-landmark-bottom-figure">
      <div className="mapping-landmark-bottom-image">
        <img
          src={mapLandmark04}
          alt=""
          loading="lazy"
          decoding="async"
        />
      </div>
      <figcaption className="mapping-landmark-caption">
        LATITUDE 53 · 10242 106 ST NW
      </figcaption>
    </figure>

    <figure className="mapping-landmark-bottom-figure">
      <div className="mapping-landmark-bottom-image">
        <img
          src={mapLandmark05}
          alt=""
          loading="lazy"
          decoding="async"
        />
      </div>
      <figcaption className="mapping-landmark-caption">
        UNIVERSITY OF ALBERTA · 116 ST &amp; 85 AVE
      </figcaption>
    </figure>
  </div>
</section>
{/* CLOSING IMAGE */}
<section className="mapping-closing">
  <img
    src={mapClosing}
    alt=""
    loading="lazy"
    decoding="async"
  />
</section>

        <ProjectNavigation projectId={9} />

      </main>

      <Footer />
    </div>
  );
}

/* GENERIC PROJECT PAGE */
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
  <p className="currents-scope">{project.scope}</p>
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
          Designing digital products, visual identities, publications, and
  information systems across research, culture, and technology.
          </p>
        </section>

        <section className="selected-work-section">
          <h2 className="section-heading">Selected Work</h2>

          <div className="work-grid">
          {PROJECTS.slice(0, 4).map((project, index) => (
              <div
                key={project.id}
                className="work-item"
                onClick={() => setView(project)}
              >
                <div className="image-wrapper">
  {project.cardImage && (
    <img
    src={project.cardImage}
    alt={project.cardTitle}
    loading={index < 2 ? 'eager' : 'lazy'}
    fetchPriority={index === 0 ? 'high' : 'auto'}
    decoding="async"
  />
  )}
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
