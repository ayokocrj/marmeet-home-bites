
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, MapPin, Clock, Heart } from 'lucide-react';

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
      <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto">
        {icon}
      </div>
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-white text-shadow">
          {title}
        </h2>
        <p className="text-white/90 text-lg leading-relaxed px-4">
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
    <div className="min-h-screen bg-gradient-marmeet flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-sm">
          <OnboardingStep
            {...steps[currentStep]}
            isActive={true}
          />
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Progress indicators */}
        <div className="flex justify-center space-x-2">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentStep 
                  ? 'bg-white w-8' 
                  : index < currentStep 
                    ? 'bg-white/60' 
                    : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        <Button
          onClick={handleNext}
          className="w-full h-14 bg-white text-marmeet-orange hover:bg-white/90 font-semibold text-lg rounded-xl flex items-center justify-center space-x-2"
        >
          <span>{currentStep === steps.length - 1 ? 'Commencer' : 'Suivant'}</span>
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default ClientOnboarding;
