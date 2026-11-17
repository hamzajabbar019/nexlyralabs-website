import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { processSteps } from '../data/agencyData';

export function ProcessSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentStep = processSteps[activeIndex];

  return (
    <section id="process" className="py-16 sm:py-20 lg:py-24 border-b border-[#131F38]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-medium text-blue-400 mb-2">Our Process</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white [text-wrap:balance] mb-3">
            A Structured Workflow From First Call to Ongoing Support
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Six transparent stages keep scope clear, code quality high, and delivery predictable.
          </p>
        </div>

        {/* Interactive 6-Step Sequence Strip */}
        <div
          role="tablist"
          aria-label="Development process stages"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6"
        >
          {processSteps.map((step, index) => {
            const isSelected = index === activeIndex;
            return (
              <button
                key={step.number}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveIndex(index)}
                className={`group text-left p-4 rounded-xl border transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                  isSelected
                    ? 'bg-[#101C36] border-blue-500/70 text-white'
                    : 'bg-[#0B1324] border-[#192847] text-slate-300 hover:border-[#2A4273] hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span
                    className={`font-mono text-xs tabular-nums ${
                      isSelected ? 'text-blue-400' : 'text-slate-500'
                    }`}
                  >
                    {step.number}
                  </span>
                  {index < processSteps.length - 1 && (
                    <ArrowRight
                      className={`w-3.5 h-3.5 hidden lg:block ${
                        isSelected ? 'text-blue-400' : 'text-slate-600'
                      }`}
                      aria-hidden="true"
                    />
                  )}
                </div>
                <p className="text-sm sm:text-base font-semibold tracking-tight whitespace-nowrap truncate">
                  {step.title}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detail Panel */}
        <div
          role="tabpanel"
          aria-label={`${currentStep.title} stage details`}
          className="rounded-xl bg-[#0B1324] border border-[#192847] p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
        >
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2.5 text-xs text-blue-400 font-medium">
              <span className="font-mono tabular-nums">Stage {currentStep.number}</span>
              <span aria-hidden="true">·</span>
              <span>{currentStep.title}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
              {currentStep.summary}
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {currentStep.details}
            </p>
          </div>

          <div className="lg:text-right shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-[#16233F] lg:pl-8">
            <p className="text-xs text-slate-400 mb-1">Key Stage Output</p>
            <p className="text-sm sm:text-base font-medium text-white">{currentStep.output}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
