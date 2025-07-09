import React, { useEffect, useRef } from 'react';

interface ScrollAnimationsProps {
  children: React.ReactNode;
}

const ScrollAnimations: React.FC<ScrollAnimationsProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple CSS-based animations instead of GSAP to avoid compatibility issues
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {children}
    </div>
  );
};

export default ScrollAnimations;