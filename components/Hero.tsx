import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-burntRed/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="z-10 flex flex-col items-center text-center">
        
        {/* Line 1: 'a' + 'Deus' */}
        <div className="flex items-baseline space-x-1 sm:space-x-2">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-4xl sm:text-6xl md:text-8xl font-serif italic text-white"
          >
            a
          </motion.span>
          
          <motion.span
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 1, type: "spring", bounce: 0.3 }}
            className="text-5xl sm:text-7xl md:text-9xl font-bold font-sans tracking-tight text-white"
          >
            Deus
          </motion.span>
        </div>

        {/* Line 2: 'nossos' - Swinging effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="mt-2 sm:mt-4"
        >
          <motion.p
            animate={{ rotate: [0, -2, 2, -1, 1, 0] }}
            transition={{ duration: 3, delay: 3, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
            className="text-2xl sm:text-4xl md:text-5xl font-serif text-antiqueBeige italic tracking-widest"
          >
            nossos
          </motion.p>
        </motion.div>

        {/* Line 3: 'SONhoS' */}
        <motion.h1
          initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
          animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, delay: 4 }}
          className="text-6xl sm:text-8xl md:text-[9rem] font-extrabold font-sans text-transparent bg-clip-text bg-gradient-to-b from-burntRed to-red-900 mt-2 sm:mt-6 leading-none drop-shadow-2xl"
        >
          SONhoS
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 5.5 }}
          className="mt-12 text-sm sm:text-base md:text-lg font-serif tracking-widest text-white/60 uppercase border-t border-white/20 pt-6"
        >
          Um filme de Rodrigo Fontoura de Oliveira
        </motion.p>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 6, duration: 1 }}
        className="absolute bottom-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-white/40">Descubra</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;