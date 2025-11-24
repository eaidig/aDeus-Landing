import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Ticket } from 'lucide-react';

const EventInfo: React.FC = () => {
  return (
    <section className="w-full py-24 relative flex justify-center items-center overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 grayscale mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-vintageBlack via-vintageBlack/90 to-transparent"></div>

      <div className="relative z-10 max-w-4xl w-full px-6 text-center">
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border-y border-white/20 py-12"
        >
            <h2 className="text-xl sm:text-2xl font-serif italic text-fadedGold mb-2">Grande Estreia</h2>
            <h3 className="text-4xl sm:text-6xl font-bold font-sans text-white uppercase tracking-tighter mb-8">
                Lançamento Oficial
            </h3>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="flex flex-col items-center">
                    <Calendar className="w-8 h-8 text-burntRed mb-4" />
                    <span className="text-2xl font-bold text-white">29 NOV</span>
                    <span className="text-sm text-gray-400">2025</span>
                </div>
                <div className="flex flex-col items-center border-l-0 md:border-l border-white/10 border-r-0 md:border-r">
                    <MapPin className="w-8 h-8 text-burntRed mb-4" />
                    <span className="text-lg font-bold text-white">Praça Coração de Maria</span>
                    <span className="text-sm text-gray-400">Esteio / RS</span>
                </div>
                <div className="flex flex-col items-center">
                    <Ticket className="w-8 h-8 text-burntRed mb-4" />
                    <span className="text-lg font-bold text-white">Sarau ao Natural</span>
                    <span className="text-sm text-gray-400">Entrada Franca</span>
                </div>
            </div>

            <motion.a 
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-burntRed hover:bg-red-700 text-white font-sans font-bold uppercase tracking-widest px-10 py-4 text-sm transition-all shadow-[0_0_20px_rgba(178,34,34,0.3)] hover:shadow-[0_0_40px_rgba(178,34,34,0.5)]"
            >
                Confirmar Presença
            </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default EventInfo;