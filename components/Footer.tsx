import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-100 text-gray-900 py-16 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* Mandatory Legal Text */}
        <p className="text-sm md:text-base font-sans leading-relaxed mb-6 max-w-3xl text-gray-700">
          O curta-metragem gaúcho <strong>'aDeus nossos SONhoS'</strong> é um projeto cultural independente realizado por Rodrigo Fontoura de Oliveira. A sua produção foi viabilizada através da seleção no edital de fomento ao audiovisual da Prefeitura de Esteio, com recursos da Lei Paulo Gustavo.
        </p>
        
        <p className="text-xs text-gray-500 uppercase tracking-wide mb-10 border-t border-gray-300 pt-4 w-full">
          Edital: Chamamento Público N° 1/2023 | Processo Administrativo: Nº 4198/2023
        </p>

        {/* Official Logos */}
        <div className="w-full max-w-2xl">
          <img 
            src="https://adeusnossossonhos.com.br/wp-content/uploads/2025/08/Paulo-Gustavo-1024x389.png" 
            alt="Logos: Lei Paulo Gustavo, Ministério da Cultura, Governo Federal" 
            className="w-full h-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
          />
        </div>

        <div className="mt-12 text-[10px] text-gray-400 font-mono">
            &copy; 2025 Rodrigo Fontoura de Oliveira. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;