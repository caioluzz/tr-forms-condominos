
import React from 'react';
import { Sun } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const FormHeader: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`mb-6 md:mb-8 text-center animate-fade-in`}>
      <div className="inline-flex items-center justify-center mb-2">
        <Sun className={`${isMobile ? 'w-6 h-6' : 'w-8 h-8'} text-trenergia-yellow mr-2`} />
        <span className={`${isMobile ? 'text-lg' : 'text-xl'} font-bold text-trenergia-blue`}>TR Energia</span>
      </div>
      <h1 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold text-gray-800 mb-2`}>
        Colaboradores TR Energia: 30% de desconto na sua conta de luz
      </h1>
      <p className="text-gray-600 text-balance text-sm md:text-base">
      Preencha o formulário abaixo para receber sua proposta personalizada junto com o contrato para aproveitamento do desconto exclusivo.
      </p>
    </div>
  );
};

export default FormHeader;
