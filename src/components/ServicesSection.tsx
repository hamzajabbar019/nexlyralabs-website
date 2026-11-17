import {
  Workflow,
  BotMessageSquare,
  Server,
  Globe,
  Smartphone,
  Cpu,
  ArrowUpRight,
  Check,
} from 'lucide-react';
import { servicesList, type ServiceId, type ServiceItem } from '../data/agencyData';

interface ServicesSectionProps {
  onSelectService: (serviceId: ServiceId) => void;
}

const iconMap: Record<ServiceItem['iconName'], typeof Workflow> = {
  Workflow,
  BotMessageSquare,
  Server,
  Globe,
  Smartphone,
  Cpu,
};

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 border-b border-[#131F38]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 sm:mb-14">
          <p className="text-sm font-medium text-blue-400 mb-2">Our Services</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white [text-wrap:balance] mb-4">
            Practical Engineering Across Automation, Web, Mobile, and AI
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Every engagement is built around maintainable architecture, clear milestones, and
            software designed for real operational use.
          </p>
        </div>

        {/* Asymmetric 12-Column Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          {servicesList.map((service) => {
            const IconComponent = iconMap[service.iconName];
            return (
              <article
                key={service.id}
                className={`${service.spanClass} group rounded-xl bg-[#0B1324] border border-[#192847] hover:border-blue-500/45 transition-colors duration-200 p-6 sm:p-7 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-600/12 border border-blue-500/25 text-blue-400 shrink-0">
                      <IconComponent className="w-5 h-5" strokeWidth={1.75} />
                    </div>
                    <span className="font-mono text-xs tabular-nums text-slate-400">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-slate-300"
                      >
                        <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-5 border-t border-[#16233F] flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs text-slate-400">{service.stack}</p>
                  <button
                    type="button"
                    onClick={() => onSelectService(service.id)}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1 py-0.5"
                  >
                    <span>Discuss Service</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
