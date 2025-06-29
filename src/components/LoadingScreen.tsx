import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  const loadingTexts = [
    "Crafting beautiful designs...",
    "Preparing vector art...",
    "Loading invitations...",
    "Simply framing your ideas..."
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length);
    }, 1000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 bg-gradient-to-br from-pastel-cream via-white to-pastel-blush flex items-center justify-center"
    >
      {/* Animated Doodles Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Design Elements */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20"
        >
          <svg width="60" height="60" viewBox="0 0 60 60" className="text-pastel-purple/30">
            <path d="M30 10 L50 50 L10 50 Z" fill="currentColor" />
          </svg>
        </motion.div>

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-40 right-32"
        >
          <svg width="80" height="80" viewBox="0 0 80 80" className="text-pastel-pink/30">
            <circle cx="40" cy="40" r="30" fill="currentColor" />
          </svg>
        </motion.div>

        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            rotate: [0, -90, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-32 left-40"
        >
          <svg width="70" height="70" viewBox="0 0 70 70" className="text-pastel-mint/30">
            <path d="M35 5 L65 35 L35 65 L5 35 Z" fill="currentColor" />
          </svg>
        </motion.div>

        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 80, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-20"
        >
          <svg width="50" height="50" viewBox="0 0 50 50" className="text-pastel-coral/30">
            <path d="M25 5 C35 15, 45 25, 25 45 C5 25, 15 15, 25 5 Z" fill="currentColor" />
          </svg>
        </motion.div>

        {/* Scattered Small Doodles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
            className="absolute"
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" className="text-pastel-lavender/40">
              <circle cx="10" cy="10" r="8" fill="currentColor" />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Main Loading Content */}
      <div className="relative z-10 text-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "backOut" }}
          className="mb-8"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="w-24 h-24 mx-auto mb-4 relative"
            >
              <img 
                src="/Simply framed.png" 
                alt="Simply Framed Logo" 
                className="w-full h-full object-contain"
              />
            </motion.div>
            
            {/* Orbiting Elements */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 w-32 h-32 mx-auto"
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-pastel-mint rounded-full"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-pastel-coral rounded-full"></div>
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-pastel-peach rounded-full"></div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-pastel-sky rounded-full"></div>
            </motion.div>
          </div>
          
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl font-serif font-bold bg-gradient-to-r from-pastel-purple to-pastel-pink bg-clip-text text-transparent"
          >
            Simply Framed
          </motion.h1>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          key={currentText}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <p className="text-lg text-neutral-600 font-light">
            {loadingTexts[currentText]}
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="bg-neutral-200 rounded-full h-2 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
              className="h-full bg-gradient-to-r from-pastel-purple to-pastel-pink rounded-full"
            />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-sm text-neutral-500 mt-2"
          >
            {progress}%
          </motion.p>
        </div>

        {/* Decorative Elements */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-br from-pastel-blush to-pastel-pink rounded-full opacity-20"
        />
        
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute -bottom-8 -right-8 w-16 h-16 bg-gradient-to-br from-pastel-mint to-pastel-sky rounded-full opacity-20"
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;