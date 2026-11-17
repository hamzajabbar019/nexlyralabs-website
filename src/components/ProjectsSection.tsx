import { useState, useEffect } from 'react';
import { ArrowUpRight, X, Layers, Github, ExternalLink } from 'lucide-react';
import { projectsList, type ProjectItem } from '../data/agencyData';
import { ResilientImage } from './ResilientImage';

type FilterCategory = 'All' | ProjectItem['category'];

const filterOptions: FilterCategory[] = [
  'All',
  'Full-Stack & Mobile',
  'AI & Automation',
  'Machine Learning',
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  const visibleProjects =
    activeCategory === 'All'
      ? projectsList
      : projectsList.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 border-b border-[#131F38]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-blue-400 mb-2">Project Portfolio</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white [text-wrap:balance] mb-3">
              Founder &amp; University Engineering Builds
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Genuine software systems and applied research built by founder Hamza Jabbar across
              mobile development, AI workflow automation, and machine learning.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="inline-flex flex-wrap items-center gap-1 p-1 rounded-lg bg-[#0B1324] border border-[#192847] self-start lg:self-auto"
          >
            {filterOptions.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-300 hover:text-white hover:bg-[#111D36]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project) => (
            <article
              key={project.id}
              className="group rounded-xl bg-[#0B1324] border border-[#192847] hover:border-blue-500/45 transition-colors duration-200 overflow-hidden flex flex-col justify-between"
            >
              <div>
                <ResilientImage
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  fallbackTitle={project.title}
                  aspectClass="aspect-[4/3]"
                  className="border-b border-[#16233F]"
                />

                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mb-2.5">
                    <span className="text-blue-400 font-medium">{project.originLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.category}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-white tracking-tight mb-2.5">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-4">{project.summary}</p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-4 border-t border-[#16233F] flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs text-slate-400 min-w-0 truncate">{project.stack.join(' · ')}</p>
                <div className="flex items-center gap-3 shrink-0">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} repository on GitHub`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-300 hover:text-white transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1 py-0.5"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1 py-0.5"
                  >
                    <span>Architecture</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Project Architecture Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#030711]/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="w-full max-w-2xl rounded-xl bg-[#0B1324] border border-[#22355C] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-[#192847]">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="text-blue-400 font-medium">{selectedProject.originLabel}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedProject.category}</span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-slate-400 hover:text-white hover:bg-[#13203B] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-7 space-y-5 max-h-[80vh] overflow-y-auto">
              <div>
                <h3 id="project-modal-title" className="text-2xl font-bold text-white mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#192847]">
                <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-blue-400" />
                  <span>Technical Architecture &amp; Scope</span>
                </h4>
                <ul className="space-y-2.5">
                  {selectedProject.architectureNotes.map((note) => (
                    <li
                      key={note}
                      className="text-sm text-slate-300 leading-relaxed flex items-start gap-2.5"
                    >
                      <span className="text-blue-400 mt-1" aria-hidden="true">
                        —
                      </span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#192847] flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-slate-400">
                  <span className="text-slate-300 font-medium">Stack: </span>
                  {selectedProject.stack.join(' · ')}
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-200 bg-[#101C36] hover:bg-[#16264A] border border-[#1E3156] rounded-lg transition-colors whitespace-nowrap shrink-0"
                  >
                    <Github className="w-4 h-4" />
                    <span>View on GitHub</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
