
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, MapPin, Clock, Heart, Flame, ChefHat } from 'lucide-react';
import { BackgroundPattern } from '@/components/ui/decorative-elements';

const OnboardingStep = ({ 
  title, 
  description, 
  icon, 
  isActive 
}: { 
  title: string; 
  description: string; 
  icon: React.ReactNode; 
  isActive: boolean;
}) => (
  <div className={`transition-all duration-500 ${isActive ? 'animate-fade-in' : 'opacity-50'}`}>
    <div className="text-center space-y-6">
      <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto shadow-warm border-2 border-white/30">
        {icon}
      </div>
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-white text-shadow-warm font-poppins">
          {title}
        </h2>
        <p className="text-white/90 text-lg leading-relaxed px-4 font-nunito">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const ClientOnboarding = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Découvrez les plats au menu",
      description: "Avec MARMEET vous pouvez explorer des plats fait maison chez des chef amateurs de cuisine à emporter autour de vous",
      icon: <Heart className="w-12 h-12 text-white" />
    },
    {
      title: "Réservez à emporter",
      description: "Faite votre choix sur le plat qui vous donne envie et réservez. Regarder l'heure de la collecte pour être sûr d'être à l'heure.",
      icon: <Clock className="w-12 h-12 text-white" />
    },
    {
      title: "Collecter",
      description: "Sur place, montrez le détail de votre réservation au chef et swiper pour récupérer votre plat.",
      icon: <MapPin className="w-12 h-12 text-white" />
    }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate('/client/home');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-marmeet flex flex-col relative overflow-hidden">
      <BackgroundPattern />
      
      {/* Header avec logo */}
      <div className="text-center pt-8 pb-4 relative z-10">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <Flame className="w-6 h-6 text-white animate-glow" />
          <h1 className="text-2xl font-bold text-white font-poppins">MARMEET</h1>
          <ChefHat className="w-6 h-6 text-white" />
        </div>
        <p className="text-white/80 text-sm font-nunito">
          Bienvenue dans votre cuisine de quartier
        </p>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-6 relative z-10">
        <div className="w-full max-w-sm">
          <OnboardingStep
            {...steps[currentStep]}
            isActive={true}
          />
        </div>
      </div>

      <div className="p-6 space-y-6 relative z-10">
        {/* Progress indicators */}
        <div className="flex justify-center space-x-2">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentStep 
                  ? 'bg-white w-8 shadow-sm' 
                  : index < currentStep 
                    ? 'bg-white/60 w-2' 
                    : 'bg-white/30 w-2'
              }`}
            />
          ))}
        </div>

        <Button
          onClick={handleNext}
          className="w-full h-14 bg-white text-marmeet-secondary hover:bg-white/90 font-semibold text-lg rounded-xl flex items-center justify-center space-x-2 shadow-warm transition-all duration-200 hover:shadow-warm-lg font-poppins"
        >
          <span>{currentStep === steps.length - 1 ? 'Commencer ma découverte' : 'Suivant'}</span>
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default ClientOnboarding;
