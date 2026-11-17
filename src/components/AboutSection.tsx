import { UserCheck, Code2, Handshake } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const engineeringPrinciples = [
  {
    icon: UserCheck,
    title: 'Direct Founder Involvement',
    description:
      'You collaborate directly with founder Hamza Jabbar from initial scoping through technical architecture and final release—no handoffs to disconnected layers.',
  },
  {
    icon: Code2,
    title: 'Practical, Maintainable Code',
    description:
      'We prioritize clean, readable codebases across Python, FastAPI, React, and Flutter so your software stays reliable and easy to extend as you grow.',
  },
  {
    icon: Handshake,
    title: 'Long-Term Client Relationships',
    description:
      'We approach every build as an ongoing partnership—communicating clearly across international time zones and supporting your software beyond launch day.',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 border-b border-[#131F38]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Narrative & Founder Introduction Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <p className="text-sm font-medium text-blue-400">Founder-Led Software Agency</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
                Engineering Leadership Focused on Real Business Utility
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                Nexlyra Labs is a founder-led software development agency focused on practical
                technology solutions, disciplined software quality, and long-term client
                relationships.
              </p>
            </div>

            {/* Founder Introduction Card */}
            <div className="rounded-xl bg-[#0B1324] border border-[#192847] p-5 sm:p-6 space-y-3.5">
              <div className="flex items-center gap-3.5">
                <div
                  className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-blue-600/15 border border-blue-500/35 text-blue-400 font-semibold text-sm tracking-tight shrink-0"
                  aria-hidden="true"
                >
                  HJ
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white tracking-tight">
                    {siteConfig.founderName}
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-400">
                    Founder &amp; Lead Software Engineer
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Hamza Jabbar leads every technical engagement at Nexlyra Labs, bringing hands-on
                experience across AI workflow automation, Python and FastAPI backend engineering,
                Flutter mobile development, and applied machine learning. Rather than outsourcing
                architecture, Hamza works directly with growing businesses to turn operational
                bottlenecks into dependable, maintainable software.
              </p>
            </div>
          </div>

          {/* Principles Column */}
          <div className="lg:col-span-7 divide-y divide-[#16233F] rounded-xl bg-[#0B1324] border border-[#192847]">
            {engineeringPrinciples.map((principle) => {
              const Icon = principle.icon;
              return (
                <div key={principle.title} className="p-6 sm:p-7 flex items-start gap-4 sm:gap-5">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-600/12 border border-blue-500/25 text-blue-400 shrink-0 mt-0.5">
                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white tracking-tight mb-1.5">
                      {principle.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
