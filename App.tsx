
import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { DefinitionSection } from './components/DefinitionSection';
import { ConstitutionSection } from './components/ConstitutionSection';
import { CoipSection } from './components/CoipSection';
import { LoipevmSection } from './components/LoipevmSection';
import { ProtectionMeasuresSection } from './components/ProtectionMeasuresSection';
import { ReportingRouteSection } from './components/ReportingRouteSection';
import { ResourcesSection } from './components/ResourcesSection';
import { Footer } from './components/Footer';
import { EmergencyBanner } from './components/EmergencyBanner';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;

      sections.forEach((section: any) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <EmergencyBanner />
      <Navbar activeSection={activeSection} />
      
      <main className="flex-grow">
        <section id="inicio">
          <Hero />
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
          <section id="definicion">
            <DefinitionSection />
          </section>

          <section id="constitucion">
            <ConstitutionSection />
          </section>

          <section id="coip">
            <CoipSection />
          </section>

          <section id="loipevm">
            <LoipevmSection />
          </section>

          <section id="medidas">
            <ProtectionMeasuresSection />
          </section>

          <section id="ruta">
            <ReportingRouteSection />
          </section>

          <section id="recursos">
            <ResourcesSection />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
