import React from 'react';
import { motion } from 'framer-motion';
import { Music, User, Heart } from 'lucide-react';

const characters = [
  {
    name: "Rodrigo",
    role: "O Músico Perdido",
    desc: "Talentoso mas consumido pelo ego. Busca reencontrar sua voz não nos palcos, mas na própria alma.",
    icon: <Music className="w-6 h-6 text-burntRed" />
  },
  {
    name: "Igor",
    role: "A Consciência",
    desc: "Aquele que permaneceu quando a fama se foi. Um espelho duro da realidade que Rodrigo tenta evitar.",
    icon: <User className="w-6 h-6 text-fadedGold" />
  },
  {
    name: "Lilian",
    role: "O Porto Seguro",
    desc: "A força silenciosa que mantém os fragmentos da família unidos enquanto o sonho desmorona.",
    icon: <Heart className="w-6 h-6 text-antiqueBeige" />
  }
];

const Synopsis: React.FC = () => {
  return (
    <section className="w-full py-24 px-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-fadedGold/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-sans font-bold text-white mb-8 leading-tight">
              A busca pela <span className="text-burntRed">Redenção</span> através do Rock.
            </h2>
            <div className="space-y-6 text-lg text-antiqueBeige font-serif leading-relaxed">
              <p>
                Rodrigo é um músico que tocou o céu com as mãos, mas esqueceu de manter os pés no chão. 
                Mergulhado em uma arrogância silenciosa, ele vê sua banda, seus amigos e sua família 
                se distanciarem à medida que sua obsessão pelo sucesso o consome.
              </p>
              <p>
                "aDeus nossos SONhoS" não é apenas sobre música. É sobre o silêncio ensurdecedor 
                que fica quando o show acaba. É uma jornada nostálgica e visceral sobre voltar 
                para casa quando todas as portas parecem fechadas.
              </p>
            </div>
          </motion.div>

          {/* Cards Side */}
          <div className="grid gap-6">
            {characters.map((char, index) => (
              <motion.div
                key={char.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg hover:border-burntRed/50 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-black/40 rounded-full border border-white/5 group-hover:border-burntRed/30 transition-colors">
                    {char.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-sans">{char.name}</h3>
                    <p className="text-sm text-fadedGold uppercase tracking-wider mb-2 font-bold text-[10px]">{char.role}</p>
                    <p className="text-sm text-gray-400 font-serif leading-relaxed">
                      {char.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Synopsis;