
import React from 'react';

export const FloatingSpoon: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`absolute ${className}`}>
    <span className="text-4xl animate-warm-pulse opacity-20">🥄</span>
  </div>
);

export const FloatingPot: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`absolute ${className}`}>
    <span className="text-3xl animate-glow opacity-20">🍲</span>
  </div>
);

export const FloatingFlame: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`absolute ${className}`}>
    <span className="text-2xl animate-warm-pulse opacity-30">🔥</span>
  </div>
);

export const BackgroundPattern: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <FloatingSpoon className="top-20 left-4 rotate-12" />
    <FloatingPot className="top-40 right-8 -rotate-12" />
    <FloatingFlame className="top-60 left-12" />
    <FloatingSpoon className="bottom-40 right-4 rotate-45" />
    <FloatingPot className="bottom-20 left-8 rotate-12" />
  </div>
);
