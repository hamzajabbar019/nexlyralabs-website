import { ArrowRight, ArrowDownRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { heroStudioImage } from '../data/agencyData';
import { siteConfig } from '../config/siteConfig';
import { ResilientImage } from './ResilientImage';

interface HeroProps {
  onStartProject: () => void;
  onExploreServices: () => void;
}

const capabilitiesStrip = [
  {
    label: 'AI & Workflows',
    detail: 'Automated operational agents & API orchestration',
  },
  {
    label: 'Backend Systems',
    detail: 'Python, FastAPI & PostgreSQL architectures',
  },
  {
    label: 'Web & Mobile',
    detail: 'Custom React platforms & Flutter apps',
  },
  {
    label: 'Applied ML',
    detail: 'Computer vision & structured data pipelines',
  },
];

export function Hero({ onStartProject, onExploreServices }: HeroProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 border-b border-[#131F38]"
    >
      {/* Subtle architectural radial lighting accent */}
      <div
        className="pointer-events-none absolute -top-24 right-0 w-[560px] h-[560px] opacity-25 blur-3xl"
        style={{
          background:
            'radial-gradient(circle at center, rgba(37, 99, 235, 0.35), transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Content Column */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm text-blue-400 font-medium mb-5">
              <span>{siteConfig.tagline}</span>
            </div>

            <h1 className="text-[clamp(2.15rem,4.2vw,3.5rem)] font-bold tracking-tight text-white leading-[1.1] [text-wrap:balance] mb-6">
              We Build Smart Digital Solutions for Growing Businesses.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mb-8">
              We help businesses automate operations, build powerful software and turn ideas into
              reliable digital products.
            </p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3.5 sm:gap-4">
              <button
                type="button"
                onClick={onStartProject}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050A14]"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] text-sm font-medium text-slate-200 bg-[#0B1324] hover:bg-[#111D36] border border-[#1F3154] hover:border-blue-500/50 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <span>Explore Our Services</span>
                <ArrowDownRight className="w-4 h-4 text-blue-400" />
              </button>
            </div>
          </motion.div>

          {/* Right Media Column */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex"
          >
            <div className="relative w-full rounded-xl overflow-hidden border border-[#1E3258] ring-1 ring-inset ring-white/5 bg-[#0B1324] flex flex-col">
              <ResilientImage
                src={heroStudioImage}
                alt="AI workflow architecture and Python software engineering workstation at Nexlyra Labs"
                fallbackTitle="Nexlyra Labs AI & Software Engineering"
                aspectClass="aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[380px]"
                className="w-full h-full"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050A14]/90 via-[#050A14]/25 to-transparent"
                aria-hidden="true"
              />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <p className="text-xs font-medium text-blue-400 mb-1">
                  Founder-Led Software Agency
                </p>
                <p className="text-sm text-slate-200 leading-snug">
                  Direct engineering collaboration with {siteConfig.founderName}, from architecture
                  planning to production delivery.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width 4-Column Capability Strip Below Hero Split */}
        <div className="mt-14 pt-8 border-t border-[#131F38] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {capabilitiesStrip.map((item) => (
            <div key={item.label} className="space-y-1.5">
              <h2 className="text-sm font-semibold text-white tracking-tight">{item.label}</h2>
              <p className="text-sm text-slate-400 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
