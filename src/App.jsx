import React, { useState, useEffect } from 'react';
import './App.css';
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
    year: '2020',
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
  
    title: 'Playful Walking',
    year: '2023–2024',
    cardImage: walkingHome,
  },
  {
    id: 6,
    cardTitle: 'Revayat',
    cardCategory: 'VISUAL COMMUNICATION · INTERACTIVE DESIGN',
  
    title: 'Revayat',
    year: '2019',
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
    cardImage: warChildrenHome,
  },
  {
    id: 9,
    cardTitle: 'Shoe Maps',
    cardCategory: 'INFORMATION DESIGN · ILLUSTRATION',
  
    title: 'Shoe Maps',
    year: '2018',
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
        <a href="#" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <span> | </span>
        <a href="mailto:YOUR-EMAIL">Email</a>
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
            {PROJECTS.map((project) => (
    <div
      key={project.id}
      className="all-work-item"
      onClick={() => setView(project)}
    >
      <div className="all-work-image">
        {project.cardImage && (
          <img src={project.cardImage} alt={project.cardTitle} />
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
    <img src={hgHero01} alt="HealthGauge mobile interface designs" />
  </div>

  <div className="healthgauge-hero-image">
    <img src={hgHero02} alt="HealthGauge dark mode mobile interface" />
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
      <img src={hgMobile01} alt="" />
    </div>

    <div className="mobile-app-image">
      <img src={hgMobile02} alt="" />
    </div>
  </div>

  <div className="mobile-app-row mobile-app-row-small">
    <div className="mobile-app-image">
      <img src={hgMobile03} alt="" />
    </div>
    <div className="mobile-app-image">
      <img src={hgMobile04} alt="" />
    </div>
    <div className="mobile-app-image">
      <img src={hgMobile05} alt="" />
    </div>
    <div className="mobile-app-image">
      <img src={hgMobile06} alt="" />
    </div>
  </div>

  <div className="mobile-app-row mobile-app-row-small">
    <div className="mobile-app-image">
      <img src={hgMobile07} alt="" />
    </div>
    <div className="mobile-app-image">
      <img src={hgMobile08} alt="" />
    </div>
    <div className="mobile-app-image">
      <img src={hgMobile09} alt="" />
    </div>
    <div className="mobile-app-image">
      <img src={hgMobile10} alt="" />
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
    <img src={hgWeb01} alt="" />
  </div>

  <div className="web-platform-row">
    <div className="web-platform-image web-platform-image-small">
      <img src={hgWeb02} alt="" />
    </div>

    <div className="web-platform-image web-platform-image-small">
      <img src={hgWeb03} alt="" />
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
      <img src={hgCare01} alt="" />
    </div>
    <div className="connected-care-image">
      <img src={hgCare02} alt="" />
    </div>
  </div>

  <div className="connected-care-row connected-care-row-bottom">
    <div className="connected-care-image">
      <img src={hgCare03} alt="" />
    </div>
    <div className="connected-care-image">
      <img src={hgCare04} alt="" />
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
      <img src={illustration01} alt="" />
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
      <img src={illustration02} alt="" />
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
      <img src={illustration03} alt="" />
    </div>
  </div>

  <div className="illustration-grid">
  <div className="illustration-tall-image">
    <img src={illustration04} alt="" />
  </div>

  <div className="illustration-tall-image">
    <img src={illustration05} alt="" />
  </div>

  <div className="illustration-tall-image">
    <img src={illustration06} alt="" />
  </div>

  <div className="illustration-stack">
    <div className="illustration-wide-image">
      <img src={illustration07} alt="" />
    </div>
    <div className="illustration-wide-image">
      <img src={illustration09} alt="" />
    </div>
  </div>

  <div className="illustration-stack">
    <div className="illustration-wide-image">
      <img src={illustration08} alt="" />
    </div>
    <div className="illustration-wide-image">
      <img src={illustration10} alt="" />
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
    <img src={hgBrand01} alt="" />
  </div>

  <div className="brand-standards-image brand-standards-image-small">
  <img src={hgBrand02} alt="" />
</div>
</div>
<div className="colour-palette">
  <h3 className="brand-standards-title">Colour Palette</h3>

  <div className="colour-palette-images">
    <div className="colour-palette-image">
      <img src={hgColor01} alt="" />
    </div>

    <div className="colour-palette-image">
      <img src={hgColor02} alt="" />
    </div>
  </div>
</div>

<div className="typography-subsection">
  <h3 className="brand-standards-title">Typography</h3>

  <div className="typography-images">
    <div className="typography-image">
      <img src={hgType01} alt="" />
    </div>

    <div className="typography-image">
      <img src={hgType02} alt="" />
    </div>

    <div className="typography-image">
      <img src={hgType03} alt="" />
    </div>

    <div className="typography-image">
      <img src={hgType04} alt="" />
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
      <img src={currentsPage01} alt="" />
    </div>

    <div className="currents-page-image">
      <img src={currentsPage02} alt="" />
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
      <img src={currentsNav01} alt="" />
    </div>

    <div className="currents-nav-image-small">
      <img src={currentsNav02} alt="" />
    </div>
  </div>

  <div className="currents-navigation-column currents-navigation-right">
    <div className="currents-nav-image-large">
      <img src={currentsNav03} alt="" />
    </div>

    <div className="currents-nav-image-large">
      <img src={currentsNav04} alt="" />
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
      <img src={currentsType01} alt="" />
    </div>

    <div className="currents-type-image-small">
      <img src={currentsType02} alt="" />
    </div>
  </div>

  <div className="currents-type-image-large">
    <img src={currentsType03} alt="" />
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
    <img src={currentsArt01} alt="" />
  </div>

  <div className="currents-image-integration-stack">
    <div className="currents-image-integration-small">
      <img src={currentsArt02} alt="" />
    </div>

    <div className="currents-image-integration-small">
      <img src={currentsArt03} alt="" />
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
    <img src={currentsScale01} alt="" />
  </div>

  <div className="currents-scale-image">
    <img src={currentsScale02} alt="" />
  </div>

  <div className="currents-scale-image">
    <img src={currentsScale03} alt="" />
  </div>

  <div className="currents-scale-image">
    <img src={currentsScale04} alt="" />
  </div>

  <div className="currents-scale-image">
    <img src={currentsScale05} alt="" />
  </div>

  <div className="currents-scale-image">
    <img src={currentsScale06} alt="" />
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
    <img src={cannabisHero01} alt="" />
  </div>

  <div className="cannabis-hero-image">
    <img src={cannabisHero02} alt="" />
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

          <div className="cannabis-platform-row-1"></div>

          <div className="cannabis-two-col-row">
            <div className="cannabis-platform-row-2-image"></div>
            <div className="cannabis-platform-row-2-image"></div>
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

          <div className="mobile-marketplace-image"></div>
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
            <div className="print-row-top-left"></div>
            <div className="print-row-top-right"></div>
          </div>

          <div className="print-row-bottom"></div>
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

          <div className="hemp-platform-row-1"></div>

          <div className="cannabis-two-col-row">
            <div className="hemp-platform-row-2-image"></div>
            <div className="hemp-platform-row-2-image"></div>
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
            <div className="adapting-print-left"></div>
            <div className="adapting-print-right"></div>
          </div>

          <div className="adapting-print-row-bottom"></div>
        </section>


        <ProjectNavigation projectId={7} />

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
            {PROJECTS.slice(0, 4).map((project) => (
              <div
                key={project.id}
                className="work-item"
                onClick={() => setView(project)}
              >
                <div className="image-wrapper">
  {project.cardImage && (
    <img src={project.cardImage} alt={project.cardTitle} />
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
