import { useState } from 'react';
import { Layers } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  aspectClass?: string;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle = 'Nexlyra Labs',
  aspectClass = 'aspect-video',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (hasError) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center overflow-hidden bg-[#0B1426] border border-[#1E2E4D] text-center p-6 ${aspectClass} ${className}`}
        role="img"
        aria-label={alt}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              'radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.25), transparent 60%)',
          }}
        />
        <Layers className="w-8 h-8 text-blue-400/80 mb-3 relative z-10" strokeWidth={1.5} />
        <p className="text-sm font-medium text-slate-300 relative z-10">{fallbackTitle}</p>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#0B1426] ${aspectClass} ${className}`}>
      {!loaded && (
        <div
          className="absolute inset-0 bg-[#0D172B] animate-pulse"
          aria-hidden="true"
        />
      )}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        onLoad={() => setLoaded(true)}
        onError={() => setHasError(true)}
        className={`h-full w-full object-cover transition-opacity duration-300 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}
