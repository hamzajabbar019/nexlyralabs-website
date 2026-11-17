import { useState } from 'react';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AboutSection } from './components/AboutSection';
import { ProcessSection } from './components/ProcessSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import type { ServiceId } from './data/agencyData';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceId | ''>('');

  const scrollToSection = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      el.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' });
    }
  };

  const handleSelectService = (serviceId: ServiceId) => {
    setSelectedService(serviceId);
    scrollToSection('#contact');
  };

  return (
    <div className="min-h-screen bg-[#050A14] text-[#E6EDF7] flex flex-col">
      <ScrollProgressBar />
      <Navbar onNavigateContact={() => scrollToSection('#contact')} />

      <main className="flex-1">
        <Hero
          onStartProject={() => scrollToSection('#contact')}
          onExploreServices={() => scrollToSection('#services')}
        />
        <ServicesSection onSelectService={handleSelectService} />
        <ProjectsSection />
        <AboutSection />
        <ProcessSection />
        <ContactSection preselectedService={selectedService} />
      </main>

      <Footer />
    </div>
  );
}
