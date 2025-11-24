import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const Trailer: React.FC = () => {
  return (
    <section className="w-full py-20 px-4 bg-vintageBlack relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-12 h-[1px] bg-burntRed"></div>
          <h2 className="text-3xl font-sans font-bold text-white uppercase tracking-wider">Trailer Oficial</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video w-full bg-black/50 border border-white/10 rounded-sm shadow-[0_0_50px_rgba(178,34,34,0.1)] overflow-hidden group"
        >
            {/* Placeholder Overlay - Visible if no video loads, or as a poster */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
               <Play className="w-20 h-20 text-white/10" />
            </div>

            <iframe
              className="absolute top-0 left-0 w-full h-full z-10"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=placeholder" 
              title="aDeus nossos SONhoS Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
        </motion.div>
        
        <p className="mt-4 text-center text-sm text-white/40 font-serif italic">
          "Quando o sonho acaba, a música continua?"
        </p>
      </div>
    </section>
  );
};

export default Trailer;