import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationsProps {
  children: React.ReactNode;
}

const ScrollAnimations: React.FC<ScrollAnimationsProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animations
      gsap.fromTo('.hero-title', 
        { 
          y: 100, 
          opacity: 0,
          scale: 0.8
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: '.hero-title',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Product cards stagger animation
      gsap.fromTo('.product-card',
        {
          y: 80,
          opacity: 0,
          rotationX: 15
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.product-showcase',
            start: 'top 70%',
            end: 'bottom 30%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Feature cards with 3D effect
      gsap.fromTo('.feature-card',
        {
          z: -100,
          opacity: 0,
          rotationY: 45
        },
        {
          z: 0,
          opacity: 1,
          rotationY: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: '.features-section',
            start: 'top 60%',
            end: 'bottom 40%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Testimonials with morphing effect
      gsap.fromTo('.testimonial-card',
        {
          scale: 0.5,
          opacity: 0,
          borderRadius: '50%'
        },
        {
          scale: 1,
          opacity: 1,
          borderRadius: '24px',
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: '.testimonials-section',
            start: 'top 65%',
            end: 'bottom 35%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Floating vector elements
      gsap.to('.floating-vector', {
        y: -20,
        rotation: 5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        stagger: 0.5
      });

      // Parallax scrolling for background elements
      gsap.to('.parallax-slow', {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: "#home",
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      gsap.to('.parallax-fast', {
        yPercent: -100,
        ease: "none",
        scrollTrigger: {
          trigger: "#home",
          start: "top bottom", 
          end: "bottom top",
          scrub: true
        }
      });

      // CTA section with magnetic effect
      gsap.fromTo('.cta-section',
        {
          scale: 0.9,
          opacity: 0.8
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.cta-section',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Text reveal animations
      gsap.fromTo('.text-reveal',
        {
          y: 50,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.text-reveal',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {children}
    </div>
  );
};

export default ScrollAnimations;