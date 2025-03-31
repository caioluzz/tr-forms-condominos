
import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const SuccessMessage: React.FC = () => {
  return (
    <div className="animate-fade-in flex flex-col items-center justify-center py-8">
      <div className="w-16 h-16 mb-4 rounded-full bg-green-100 flex items-center justify-center">
        <CheckCircle className="h-10 w-10 text-trenergia-green" />
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Recebemos seus dados!
      </h2>

      <p className="text-gray-600 text-center mb-6 max-w-sm text-balance">
        Obrigado pelo seu interesse nas soluções da TR Energia. Nossa equipe entrará em contato em até 24 horas com a proposta de economia na conta de energia.
      </p>

      <div className="bg-trenergia-gray p-4 rounded-lg max-w-sm">
        <p className="text-sm text-gray-600 flex items-start">
          <span className="text-trenergia-green mr-2">•</span>
          <span>
            <span className="font-medium">Próximos passos:</span> Iremos elaborar a proposta de economia de energia para que você possa aproveitar o desconto exclusivo.
          </span>
        </p>
      </div>

      <a
        href="/"
        className="mt-8 inline-flex items-center text-trenergia-blue hover:text-trenergia-lightblue transition-colors"
      >
        <span>Voltar para a página inicial</span>
        <ArrowRight className="ml-1 h-4 w-4" />
      </a>
    </div>
  );
};

export default SuccessMessage;
