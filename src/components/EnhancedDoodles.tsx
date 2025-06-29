import React from 'react';
import { motion } from 'framer-motion';

const EnhancedDoodles: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Large Decorative Elements */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          rotate: [0, 10, -10, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10"
      >
        <svg width="120" height="120" viewBox="0 0 120 120" className="text-pastel-purple/20">
          <path d="M60 10 C80 30, 110 40, 90 70 C70 100, 40 90, 30 60 C20 30, 40 20, 60 10 Z" fill="currentColor" />
          <circle cx="60" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5" />
        </svg>
      </motion.div>

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-40 right-20"
      >
        <svg width="100" height="100" viewBox="0 0 100 100" className="text-pastel-pink/25">
          <path d="M50 5 L85 35 L70 75 L30 75 L15 35 Z" fill="currentColor" />
          <path d="M50 20 L70 40 L50 60 L30 40 Z" fill="none" stroke="white" strokeWidth="2" />
        </svg>
      </motion.div>

      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          rotate: [0, -15, 15, 0]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
        className="absolute bottom-32 left-32"
      >
        <svg width="90" height="90" viewBox="0 0 90 90" className="text-pastel-mint/30">
          <circle cx="45" cy="45" r="35" fill="currentColor" />
          <path d="M25 45 Q45 25, 65 45 Q45 65, 25 45" fill="none" stroke="white" strokeWidth="3" />
          <circle cx="35" cy="35" r="5" fill="white" opacity="0.8" />
          <circle cx="55" cy="55" r="3" fill="white" opacity="0.6" />
        </svg>
      </motion.div>

      <motion.div
        animate={{
          x: [0, -25, 0],
          y: [0, 35, 0],
          scale: [1, 0.9, 1]
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-20 right-40"
      >
        <svg width="80" height="80" viewBox="0 0 80 80" className="text-pastel-coral/25">
          <path d="M40 5 L70 25 L60 55 L20 55 L10 25 Z" fill="currentColor" />
          <path d="M40 15 L55 30 L40 45 L25 30 Z" fill="none" stroke="white" strokeWidth="2" />
          <circle cx="40" cy="30" r="8" fill="none" stroke="white" strokeWidth="1.5" opacity="0.7" />
        </svg>
      </motion.div>

      {/* Medium Floating Elements */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
        className="absolute top-60 left-1/4"
      >
        <svg width="60" height="60" viewBox="0 0 60 60" className="text-pastel-lavender/30">
          <path d="M30 5 L50 20 L45 45 L15 45 L10 20 Z" fill="currentColor" />
          <circle cx="30" cy="25" r="10" fill="none" stroke="white" strokeWidth="2" />
        </svg>
      </motion.div>

      <motion.div
        animate={{
          x: [0, 20, 0],
          y: [0, -25, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
        className="absolute top-1/3 right-1/3"
      >
        <svg width="50" height="50" viewBox="0 0 50 50" className="text-pastel-peach/35">
          <circle cx="25" cy="25" r="20" fill="currentColor" />
          <path d="M15 25 L35 25 M25 15 L25 35" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </motion.div>

      <motion.div
        animate={{
          x: [0, -15, 0],
          y: [0, 20, 0],
          rotate: [0, -90, 0]
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2.5
        }}
        className="absolute bottom-1/3 left-1/2"
      >
        <svg width="70" height="70" viewBox="0 0 70 70" className="text-pastel-sky/25">
          <path d="M35 5 L60 30 L35 55 L10 30 Z" fill="currentColor" />
          <circle cx="35" cy="30" r="12" fill="none" stroke="white" strokeWidth="2" />
          <path d="M25 30 L45 30" stroke="white" strokeWidth="1.5" />
        </svg>
      </motion.div>

      {/* Small Scattered Doodles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -10, 0],
            rotate: [0, 360],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 6 + i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
          className="absolute"
          style={{
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`
          }}
        >
          <svg width="25" height="25" viewBox="0 0 25 25" className="text-pastel-blush/40">
            {i % 4 === 0 && <circle cx="12.5" cy="12.5" r="8" fill="currentColor" />}
            {i % 4 === 1 && <path d="M12.5 2 L22 12.5 L12.5 23 L3 12.5 Z" fill="currentColor" />}
            {i % 4 === 2 && <path d="M12.5 2 L20 20 L5 20 Z" fill="currentColor" />}
            {i % 4 === 3 && <rect x="5" y="5" width="15" height="15" rx="3" fill="currentColor" />}
          </svg>
        </motion.div>
      ))}

      {/* Organic Flowing Lines */}
      <motion.div
        animate={{
          pathLength: [0, 1, 0],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 left-0 w-full h-full"
      >
        <svg width="100%" height="100%" className="text-pastel-sage/20">
          <path
            d="M0,200 Q200,100 400,200 T800,200 Q1000,300 1200,200"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray="10,5"
          />
          <path
            d="M0,400 Q300,300 600,400 T1200,400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="15,10"
          />
        </svg>
      </motion.div>

      {/* Corner Decorative Elements */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-5 right-5"
      >
        <svg width="40" height="40" viewBox="0 0 40 40" className="text-pastel-purple/40">
          <path d="M20 5 L35 20 L20 35 L5 20 Z" fill="currentColor" />
        </svg>
      </motion.div>

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
        className="absolute bottom-5 left-5"
      >
        <svg width="35" height="35" viewBox="0 0 35 35" className="text-pastel-coral/40">
          <circle cx="17.5" cy="17.5" r="15" fill="currentColor" />
        </svg>
      </motion.div>
    </div>
  );
};

export default EnhancedDoodles;