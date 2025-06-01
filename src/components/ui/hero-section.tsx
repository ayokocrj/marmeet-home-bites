
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChefHat, Globe, Flame } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <div className="bg-gradient-marmeet p-6 text-center space-y-6 rounded-b-3xl">
      <div className="space-y-4">
        <div className="flex items-center justify-center space-x-2">
          <Flame className="w-8 h-8 text-white animate-glow" />
          <h1 className="text-3xl font-bold text-white text-shadow-warm font-poppins">
            MARMEET
          </h1>
          <ChefHat className="w-8 h-8 text-white" />
        </div>
        
        <h2 className="text-xl font-semibold text-white/95 leading-tight font-poppins">
          Découvrez des plats faits maison du monde entier
        </h2>
        
        <div className="flex items-center justify-center space-x-2 text-white/90">
          <Globe className="w-5 h-5" />
          <span className="text-sm font-nunito">
            Cuisines authentiques près de chez vous
          </span>
        </div>
      </div>

      <Button className="bg-white text-marmeet-secondary hover:bg-white/90 font-semibold px-8 py-3 rounded-full shadow-warm transition-all duration-200 hover:shadow-warm-lg font-poppins">
        Découvrir des plats
      </Button>
    </div>
  );
};
